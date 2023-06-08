class SessionController < ApplicationController

    post "/auth/login"  do
        username = params[:username]
        password = params[:password]

        # check if all the values are present
        if (username.present? && password.present?)
            user = User.find_by(username: username)

            if  (user && user.authenticate(password))
                session[:user_id] = user.id

                message = {:success => "successfully logged in"}
                message.to_json()
            else
                status 401
                message = {:error => "Wrong email or password"}
                message.to_json()
            end
        end
    
    end

    # logging out
    post "/auth/logout" do
        session.clear 

        message = {:success => "Logged out"}
        message.to_json()
    end


end