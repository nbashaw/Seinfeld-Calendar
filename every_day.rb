require 'rubygems'
require 'sinatra'

# Homepage
get "/" do
  erb :index
end

# Calendar
get "/calendar" do
  erb :calendar
end

