class CreatePosts < ActiveRecord::Migration[6.1]
    def change
        create_table :posts do |t|
            t.string :title
            t.text :description
            t.boolean :is_verified
            t.string :distance
            t.string :time
            t.string :image_url

            t.timestamps
            t.references :user, foreign_key: true
            t.references :route, foreign_key: true
        end

    end
end