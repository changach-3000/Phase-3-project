class ApplicationController < Sinatra::Base
   
    get "/" do
        "<h1>Welcome to REST API</h1>"
    end
end