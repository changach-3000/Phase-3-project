class UserController < ApplicationController
    
    # ----------------------------GET Users-------------------------------
    get "/users" do 
        user = User.find_by(id: session[:user_id])

        if user
            {:user => user}.json()

        else
            message = {:error => "User not logged in"}
            message.to_json() 
        end
        users = User.all
        users.to_json()
    end

    # ----------------------------Add Users-------------------------------
        post "/users/adduser" do
            _username=params[:username]
            _email=params[:email]
            _password=params[:password]
          
    
            if(_username.present? &&  _email.present? && _password.present?)
                   
               check_username = User.exists?(username: _username)
               check_email = User.exists?(email: _email)
    
               if check_username==true
                    status 406
                    message = {:error=> "Username exists in our database"}
                    message.to_json()
               
               elsif check_email
                    status 406
                    message = {:error=> "Email exists in our database"}
                    message.to_json()
               else
                        user = User.create(username: _username, email: _email, password: _password)
                        if user
                            message = {:success=> "User has been created successfully"}
                            message.to_json()
                        else
                            message = {:error=> "Error saving the user"}
                            message.to_json()
                        end
                end
            
            else
                status 406
                message = {:error=> "All values are required"}
                message.to_json()
            end
        end

             # ----------------------------Get Current User-------------------------------

            get "/currentuser" do
                user = User.find_by(id: session[:user_id])

                if user
                    {:user => user}.to_json()
                else
                    message = {:error=> "Not logged in"}
                    message.to_json()
                end
        
            end

 # ----------------------------Edit User details-------------------------------
 patch "/users/edituser/:id" do
    username = params[:username]
    email = params[:email]
                  
    if username.present? && email.present?
      user_find = User.find_by(id: params[:id])
  
      if user_find
        if user_find.update(username: username, email: email)
          message = { success: "Details updated" }
          return message.to_json()
        else
          message = { error: "Could not update details" }
          return message.to_json()
        end
      else
        status 404
        message = { error: "User not found" }
        return message.to_json()
      end
    else
      status 400
      message = { error: "All fields are required" }
      return message.to_json()
    end
  end
    
end