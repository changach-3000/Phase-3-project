class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'
   
    # set a session
    set :session =>true

    use Rack::Session::Cookie,
    expire_after: 3600

    # Authorize 
    def authorize
        if session[:user_id].blank?
         message = {:error=> "User is Not Authorized to add post"}
         halt 401,
         message.to_json
        end
     end

        def authorize_admin
            if session[:user_id].is_admin?
                message = {:error=> "User is Not Authorized to add post"}
                halt 401,
                message.to_json
               end
        end

     get "/" do
        "<h1>Welcome to REST APIs CLASS</h1>"
    end
end