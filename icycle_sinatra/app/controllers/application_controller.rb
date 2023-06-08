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
        user = User.find_by(id: session[:user_id])
      
        if user.nil? || !user.is_admin?
          halt 401
          { error: "User is not authorized to add a post" }.to_json
          
        end
      end

     get "/" do
        "<h1>Welcome to REST APIs CLASS</h1>"
    end
end