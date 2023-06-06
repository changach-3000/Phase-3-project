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

     # ----------------------------EDIT POSTS-------------------------------
    patch "/posts/editpost/:id" do
        title = params[:title]
        description = params[:description]
        distance = params[:distance]
        time = params[:time]
        image_url = params[:image_url]
      
            if title.present? && description.present? && distance.present? && time.present? && image_url.present?
            post_find = Post.find_by(id: params[:id])
            
                if post_find
                    if post_find.update(title: title, description: description, distance: distance, time: time, image_url: image_url)
                    message = { success: "updated successfully" }
                    return message.to_json()
                    else
                    message = { error: "could not update" }
                    return message.to_json()
                    end
                else
                    message = { error: "Post not found" }
                    return message.to_json()
                end
                else
                message = { error: "All fields are required" }
                return message.to_json()
            end
    end

     # ----------------------------DELETE POSTS-------------------------------
     delete "/posts/delete/:id" do
        check_post = Post.exists?(id: params[:id])
      
        if check_post
          post = Post.find(params[:id])
          post.destroy
      
          message = { success: "post deleted" }
          message.to_json()
        else
          status 406
          message = { error: "Post does not exist" }
          message.to_json()
        end
      end


end
