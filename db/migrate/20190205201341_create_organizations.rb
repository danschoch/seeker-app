class CreateOrganizations < ActiveRecord::Migration[5.2]
  def change
    create_table :organizations do |t|
      t.string :name
      t.text :about
      t.string :phone_number
      t.string :website
      t.string :email

      t.timestamps
    end
  end
end
