class RouteController < ApplicationController
    
    # ----------------------------GET ROUTES-------------------------------
    get "/routes" do 
        routes = Route.all
        routes.to_json( include: :user) 
    end
    # ----------------------------ADD ROUTES-------------------------------
    post "/routes/addroute" do 
       authorize
       authorize_admin

        name = params[:name]
        description = params[:description]
        distance = params[:distance]
        time = params[:time]
        level_of_difficulty = params[:level_of_difficulty]
        
       if(name.present? && description.present? && distance.present? && time.present? && level_of_difficulty.present?)

                            route = Route.create(name: name, description: description, distance: distance, time: time, level_of_difficulty: level_of_difficulty)
                            if route
                                message = {:success=> "Route has been created"}
                                message.to_json
                            else
                                status 406
                                message = {:error=> "Error while creating route"}
                                message.to_json
                            end

         else
            status 406
            message = {:error=> "All field are required"}
            message.to_json
                         
        end
    end
     # ----------------------------EDIT ROUTES-------------------------------

     patch "/routes/editroute/:id" do
        authorize

        name = params[:name]
        description = params[:description]
        distance = params[:distance]
        time = params[:time]
        level_of_difficulty = params[:level_of_difficulty]
       
        if(name.present? && description.present? && distance.present? && time.present? && level_of_difficulty.present?)

            # check if post exists
            route_find = Route.find_by(id: params[:id])

            # update the specific post
            route = route_find.update(name: name, description: description, distance: distance, time: time, level_of_difficulty: level_of_difficulty)

            if route
                message = {:success => "updated successfully"}
                message.to_json()

            else
                message = {:error => "could not update"}
                message.to_json()
            end

        else
            message = {:error => "All fields are required"}
            message.to_json()
        end

    end

      # ----------------------------DELETE ROUTES-------------------------------
      delete "/routes/delete/:id" do
        authorize

        check_route = Route.exists?(id: params[:id])
      
        if check_route
          route = Route.find(params[:id])
          route.destroy
      
          message = { success: "post deleted" }
          message.to_json()
        else
          status 406
          message = { error: "Post does not exist" }
          message.to_json()
        end
      end

end