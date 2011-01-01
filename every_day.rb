require 'rubygems'
require 'sinatra'

get "/" do
  erb :index
end

get "/calendar" do
  erb :calendar
end

post "/calendar" do
  @goal = params[:goal]
  erb :calendar
end
