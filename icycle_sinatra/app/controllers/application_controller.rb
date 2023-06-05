class ApplicationController < Sinatra::Base

    # set a session
    set :session =>true

    use Rack::Session::Cookie,
    expire_after: 3600

    get "/" do
        "<h1>Welcome to REST API</h1>"
    end

end