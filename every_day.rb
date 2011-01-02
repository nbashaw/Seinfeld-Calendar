require 'rubygems'
require 'sinatra'
require 'dm-core'
require 'dm-migrations'

DataMapper.setup(:default, ENV['DATABASE_URL'] || "sqlite3://#{Dir.pwd}/development.db")

class User
  include DataMapper::Resource
  property :id, Serial
  property :name, String
  has 1, :calendar
end


class Calendar
  include DataMapper::Resource
  property :id, Serial
  property :goal, String
  property :body, Text
  property :created_at, DateTime
  belongs_to :user
  has n, :days
end

class Day
  include DataMapper::Resource
  property :id, Serial
  property :marked, Boolean, :default  => false
  belongs_to :calendar
end

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

DataMapper.auto_upgrade!
