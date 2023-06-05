class PostController < ApplicationController
    
    # ----------------------------GET POSTS-------------------------------
    get "/posts" do 
        posts = Post.all
        posts.to_json() 
    end

    # ----------------------------ADD POSTS-------------------------------
    post "/posts/addpost" do
       
        title = params[:title]
        description = params[:description]
        distance = params[:distance]
        time = params[:time]
        image_url = params[:image_url]
        user_id = params[:user_id]
       
        if(title.present? &&  description.present? && distance.present? && time.present? && image_url.present? && user_id.present?)

            check_user = User.exists?(id: user_id)
            if check_user===false
                status 406
                message = {:error=> "User trying to add post does not exist!"}
                message.to_json
            
            else
                post = Post.create(title: title, description: description, distance: distance, time: time, image_url: image_url , user_id: user_id )
                if post
                    message = {:success=> "Post created successfully"}
                    message.to_json
                else
                    status 406
                    message = {:error=> "Error saving the post"}
                    message.to_json
                end

            end
        else
            status 406
            message = {:error=> "All field are required"}
            message.to_json
        end
    end
end
