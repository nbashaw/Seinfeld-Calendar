require 'rubygems'
require 'sinatra'

# Homepage
get "/" do
  erb :index
end

# Signup
get "/signup" do
  erb :signup
end

# Calendar
get "/calendar" do
  erb :calendar
end

