package org.kiwix.kiwixmobile;

import android.annotation.TargetApi;
import android.content.Context;
import android.os.Build;
import android.speech.tts.TextToSpeech;
import android.speech.tts.UtteranceProgressListener;
import android.util.Log;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;

public class KiwixTextToSpeech {
    public static final String TAG_KIWIX = "kiwix";

    private OnSpeakingListener onSpeakingListener;
    private WebView webView;
    private TextToSpeech tts;
    private boolean initialized = false;

    /**
     * Constructor.
     *
     * @param context               the context to create TextToSpeech with
     * @param webView               {@link android.webkit.WebView} to take contents from
     * @param onInitSucceedListener listener that receives event when initialization of TTS is done
     *                              (and does not receive if it failed)
     * @param onSpeakingListener    listener that receives an event when speaking just started or
     *                              ended
     */
    public KiwixTextToSpeech(Context context, WebView webView,
                             final OnInitSucceedListener onInitSucceedListener,
                             final OnSpeakingListener onSpeakingListener) {
        Log.d(TAG_KIWIX, "Initializing TextToSpeech");

        this.onSpeakingListener = onSpeakingListener;
        this.webView = webView;
        this.webView.addJavascriptInterface(new TTSJavaScriptInterface(), "tts");

        initTTS(context, onInitSucceedListener);
    }

    @TargetApi(Build.VERSION_CODES.ICE_CREAM_SANDWICH_MR1)
    private void initTTS(Context context, final OnInitSucceedListener onInitSucceedListener) {
        tts = new TextToSpeech(context, new TextToSpeech.OnInitListener() {
            @Override
            public void onInit(int status) {
                if (status == TextToSpeech.SUCCESS) {
                    Log.d(TAG_KIWIX, "TextToSpeech was initialized successfully.");
                    initialized = true;
                    onInitSucceedListener.onInitSucceed();
                } else {
                    Log.e(TAG_KIWIX, "Initilization of TextToSpeech Failed!");
                }
            }
        });
        if (BackwardsCompatibilityTools.equalsOrNewThanApi(Build.VERSION_CODES.ICE_CREAM_SANDWICH_MR1)) {
            tts.setOnUtteranceProgressListener(new UtteranceProgressListener() {
                @Override
                public void onStart(String utteranceId) {
                }

                @Override
                public void onDone(String utteranceId) {
                    onSpeakingListener.onSpeakingEnded();
                }

                @Override
                public void onError(String utteranceId) {
                    onSpeakingListener.onSpeakingEnded();
                }
            });
        } else {
            tts.setOnUtteranceCompletedListener(new TextToSpeech.OnUtteranceCompletedListener() {
                @Override
                public void onUtteranceCompleted(String utteranceId) {
                    onSpeakingListener.onSpeakingEnded();
                }
            });
        }
    }

    /**
     * Starts speaking the WebView content aloud (or stops it if TTS is speaking now).
     */
    public void speakAloud() {
        if (tts.isSpeaking()) {
            if (tts.stop() == TextToSpeech.SUCCESS) {
                onSpeakingListener.onSpeakingEnded();
            }
        } else {
            // We use JavaScript to get the content of the page conveniently, earlier making some
            // changes in the page
            webView.loadUrl("javascript:" +
                    "console.log(document.getElementsByTagName('html')[0].outerHTML);" +
                    "body = document.getElementsByTagName('body')[0].cloneNode(true);" +
                    // Remove some elements that are shouldn't be read (table of contents,
                    // references numbers, thumbnail captions, duplicated title, etc.)
                    "toRemove = body.querySelectorAll('sup.reference, #toc, .thumbcaption, " +
                    "title, .navbox');" +
                    "Array.prototype.forEach.call(toRemove, function(elem) {" +
                    "    elem.parentElement.removeChild(elem);" +
                    "});" +
                    "tts.speakAloud(body.innerText);");
        }
    }

    /**
     * Returns whether the TTS is initialized.
     *
     * @return <code>true</code> if TTS is initialized; <code>false</code> otherwise
     */
    public boolean isInitialized() {
        return initialized;
    }

    /**
     * Releases the resources used by the engine.
     *
     * @see android.speech.tts.TextToSpeech#shutdown()
     */
    public void shutdown() {
        tts.shutdown();
    }

    private class TTSJavaScriptInterface {
        @JavascriptInterface
        @SuppressWarnings("unused")
        public void speakAloud(String content) {
            String[] lines = content.split("\n");
            for (String line : lines) {
                tts.speak(line, TextToSpeech.QUEUE_ADD, null);
            }
            if (lines.length > 0) {
                onSpeakingListener.onSpeakingStarted();
            }
        }
    }

    /**
     * The listener which is notified when initialization of the TextToSpeech engine is successfully
     * done.
     */
    public interface OnInitSucceedListener {
        public void onInitSucceed();
    }

    /**
     * The listener that is notified when speaking starts or stops (regardless of whether it was
     * a result of error, user, or because whole text was read).
     */
    public interface OnSpeakingListener {
        public void onSpeakingStarted();

        public void onSpeakingEnded();
    }
}
