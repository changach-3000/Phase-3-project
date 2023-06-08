class PostController < ApplicationController
    
    # ----------------------------GET POSTS-------------------------------
    get "/posts" do 
        posts = Post.all()
        posts.to_json(include: :user) 
    end

    get "/posts/:id" do 
        post = Post.find_by(id: params[:id])
        post.to_json()
    end

    # ----------------------------ADD POSTS-------------------------------
    post "/posts/addpost" do
        
        authorize
      
        title = params[:title]
        description = params[:description]
        distance = params[:distance]
        time = params[:time]
        image_url = params[:image_url]
      
        if title && description && distance && time && image_url
          post = Post.create(title: title, description: description, distance: distance, time: time, image_url: image_url)
          
          if post.save
            status 200
            { success: "Post created successfully" }.to_json
          else
            status 406
            { error: "Error saving the post" }.to_json
          end
        else
          status 406
          { error: "All fields are required" }.to_json
        end
      end

     # ----------------------------EDIT POSTS-------------------------------
    patch "/posts/editpost/:id" do
        authorize

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
        authorize

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
