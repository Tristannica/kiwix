#!/usr/bin/ruby

STARTTIME = Time.now

# Global defines
LANG    = "simple"
RTL     = true
PROJECT = "dictionary"
MASTER = "dictionary"
NAMESPAC= {:id => 0, :name => nil}
UNIQID  = Time.now.to_i
UNIQFD  = "/var/moulin/#{LANG}/#{PROJECT}_#{UNIQID}"
MDWKFD  = "/var/www/wiki"
DBICON  = "DBI:Mysql:#{LANG}_#{PROJECT}"
DBIUSER = "root"
DBIPASS = ""
BLOCK_SIZE	= 10485760 # 10MB

require './simple_common.rb'

require '../crawler_rss.rb'

hello()

puts "Duration: #{(Time.now - STARTTIME) /60} mn."
