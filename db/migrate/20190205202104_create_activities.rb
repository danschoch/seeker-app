class CreateActivities < ActiveRecord::Migration[5.2]
  def change
    create_table :activities do |t|
      t.string :title
      t.datetime :date
      t.text :notes

      t.timestamps
    end
  end
end
