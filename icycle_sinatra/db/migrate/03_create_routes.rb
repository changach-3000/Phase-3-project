class CreateRoutes < ActiveRecord::Migration[6.1]
  def change
    create_table :routes do |t|
      t.string :name
      t.string :description
      t.string :distance
      t.string :time
      t.boolean :open
      t.string :level_of_difficulty
    end
  end
end