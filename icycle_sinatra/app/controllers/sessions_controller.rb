class SessionsController <ApplicationController

    get "users" do
        users = User.all
        users.to_json()
    end

    post "users/adduser" do
        _username=params[:username]
        _password=params[:password]

        # check if all the values are present
      if (_username.present? && _password.present?)

          user = User.find_by(username: _username)

            if  (user && user.authenticate(password: _password))
                session[:user_id] = user.id

                message = {:success => "Login success"}
                message.to_json()
            else
                status 401
                message = {:error => "Wrong username or password"}
                message.to_json()
            end
      end
    end

    


end