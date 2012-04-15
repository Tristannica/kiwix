/* Global variables */
var _languagesHashOld       = Array();
var _languagesHash          = Array();
var _languagesRegexHash     = Array();

/* Initialize the languages arrays */
_languagesHash['aeb']       = "زَوُن";
_languagesHash['afr']       = _languagesHashOld['af']        = "Afrikaans";
_languagesHash['ar']        = "العربية";
_languagesHash['ary']       = "الدارجة";
_languagesHash['as']        = "অসমীয়া";
_languagesHash['ast']       = "Asturianu";
_languagesHash['ba']        = "Bašqort";
_languagesHash['be']        = "Беларуская";
_languagesHash['be-tarask'] = "тарашкевіца, клясычны правапіс";
_languagesHash['bul']       = _languagesHashOld['bg']        = "Български";
_languagesHash['bjn']       = "Bahasa Banjar";
_languagesHash['bn']        = "বাংলা";
_languagesHash['bre']       = _languagesHashOld['br']        = "Brezhoneg";
_languagesHash['cat']       = _languagesHashOld['ca']        = "Català";
_languagesHash['ces']       = _languagesHashOld['cs']        = "Česky";
_languagesHash['cy']        = "Cymraeg";
_languagesHash['deu']       = _languagesHashOld['de']        = "Deutsch";
_languagesHash['dan']       = _languagesHashOld['da']        = "Dansk";
_languagesHash['dsb']       = "Dolnoserbski";
_languagesHash['ell']       = _languagesHashOld['el']        = "Ελληνικά";
_languagesHash['eng']       = _languagesHashOld['en']        = "English";
_languagesHash['epo']       = _languagesHashOld['eo']        = "Esperanto";
_languagesHash['spa']       = _languagesHashOld['es']        = "Español";
_languagesHash['est']       = _languagesHashOld['et']        = "Eesti";
_languagesHash['per']       = _languagesHashOld['fa']        = "فارسی";
_languagesHash['fin']       = _languagesHashOld['fi']        = "Suomi";
_languagesHash['fo']        = "Føroyskt";
_languagesHash['fra']       = _languagesHashOld['fr']        = "Français";
_languagesHash['frp']       = "Provençau";
_languagesHash['gl']        = "Galego";
_languagesHash['gu']        = "ગુજરાતી";
_languagesHash['gsw']       = "Schwyzerdütsch";
_languagesHash['he']        = "עברית";
_languagesHash['hi']        = "हिन्दी";
_languagesHash['hr']        = "Олык Марий";
_languagesHash['hsb']       = "Hornjoserbsce";
_languagesHash['hu']        = "Magyar";
_languagesHash['ia']        = "Interlingua";
_languagesHash['ind']       =_languagesHashOld['id']         = "Bahasa Indonesia";
_languagesHash['ie']        = "Interlingue";
_languagesHash['ilo']       = "Ilokano";
_languagesHash['ita']       = _languagesHashOld['it']        = "Italiano";
_languagesHash['ja']        = "日本語";
_languagesHash['ka']        = "ქართული";
_languagesHash['kn']        = "ಕನ್ನಡ";
_languagesHash['kor']       = _languagesHashOld['ko']        = "한국어";
_languagesHash['kor-kp']    = _languagesHashOld['ko-kp']     = "조선어";
_languagesHash['ksh']       = "Ripoarisch";
_languagesHash['lb']        = "Lëtzebuergesch";
_languagesHash['li']        = "Limburgs";
_languagesHash['lt']        = "Lietuvių";
_languagesHash['lv']        = "Latviešu";
_languagesHash['map-bms']   = "Basa Banyumasan";
_languagesHash['mk']        = "Македонски";
_languagesHash['mal']       = _languagesHashOld['ml']        = "മലയാളം";
_languagesHash['mr']        = "मराठी";
_languagesHash['ms']        = "Bahasa Melayu";
_languagesHash['mt']        = "Malti";
_languagesHash['mya']       = _languagesHashOld['my']        = "မြန်မာဘာသာ";
_languagesHash['nan']       = "Bân-lâm-gú";
_languagesHash['ne']        = "नेपाली";
_languagesHash['nld']       = _languagesHashOld['nl']        = "Nederlands";
_languagesHash['nb']        = "Norsk (bokmål)";
_languagesHash['nn']        = "Norsk (nynorsk)";
_languagesHash['oci']       = _languagesHashOld['oc']        = "Occitan";
_languagesHash['or']        = "ଓଡ଼ିଆ";
_languagesHash['pol']       = _languagesHashOld['pl']        = "Język polski";
_languagesHash['pms']       = "Piemontèis";
_languagesHash['ps']        = "پښتو";
_languagesHash['por']       = _languagesHashOld['pt']        = "Português";
_languagesHash['por-pt']    = _languagesHashOld['pt-br']     = "Português do Brasil";
_languagesHash['qu']        = "Runa Simi";
_languagesHash['rm']        = "Rumantsch";
_languagesHash['ron']       = _languagesHashOld['ro']        = "Română";
_languagesHash['rus']       = _languagesHashOld['ru']        = "Русский";
_languagesHash['rue']       = "Русиньскый";
_languagesHash['sh']        = "Srpskohrvatski / Српскохрватски";
_languagesHash['si']        = "සිංහල";
_languagesHash['sk']        = "Slovenčina";
_languagesHash['sl']        = "Slovenščina";
_languagesHash['sq']        = "Shqip";
_languagesHash['sr-ec']     = "Српски (ћирилица)";
_languagesHash['sr-el']     = "Srpski (latinica)";
_languagesHash['su']        = "Basa Sunda";
_languagesHash['swe']       = _languagesHashOld['sv']        = "Svenska";
_languagesHash['swa']       = _languagesHashOld['sw']        = "Kiswahili";
_languagesHash['ta']        = "தமிழ்";
_languagesHash['tcy']       = "ತುಳು";
_languagesHash['te']        = "తెలుగు";
_languagesHash['th']        = "ไทย";
_languagesHash['tt-cyrl']   = "Татарча";
_languagesHash['ug-arab']   = "ئۇيغۇرچە";
_languagesHash['ukr']       = _languagesHashOld['uk']        = "Українська";
_languagesHash['ur']        = "اردو";
_languagesHash['vi']        = "Tiếng Việt";
_languagesHash['yi']        = "ייִדיש";
_languagesHash['wol']       = _languagesHashOld['yo']        = "Wolof";
_languagesHash['zho']       = _languagesHashOld['zh']        = "中文";
_languagesHash['zho-hans']  = _languagesHashOld['zh-hans']   = "中文(简体)";
_languagesHash['zho-hant']  = _languagesHashOld['zh-hant']   = "中文(繁體)";
_languagesHash['zho-hk']    = _languagesHashOld['zh-hk']     = "中文(香港)";

function getLanguageNameFromISO(code) {
    var language = _languagesHash[code] || _languagesHashOld[code] || "";
    if (!language && code) {
	dump("'" + code + "' is not available in languages.js.\n");
    }
    return language;
}

/* Be careful, this function returns false, also if undefined - that
 * means nothing because the table _languagesHashOld is not complete */
function isOldLanguageCode(code) {
    return _languagesHashOld[iso] ? true : false;
}

function buildLanguagesRegexHash() {
    for (var code in _languagesHash) {
	_languagesRegexHash[_languagesHash[code]] = code;
    }

    for (var code in _languagesHashOld) {
	var regex = _languagesRegexHash[_languagesHashOld[code]];
	_languagesRegexHash[_languagesHashOld[code]] = (regex ? regex + "|" : "") + code;
    }
}

function getLanguageRegex(language) {
    return _languagesRegexHash[language];
}

