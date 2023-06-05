class RouteController < ApplicationController
    
    # ----------------------------GET ROUTES-------------------------------
    get "/routes" do 
        posts = Post.all
        posts.to_json() 
    end

    
end