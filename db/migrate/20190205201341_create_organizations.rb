class CreateOrganizations < ActiveRecord::Migration[5.2]
  def change
    create_table :organizations do |t|
      t.string :name
      t.text :about
      t.references :point_of_contact
      t.string :phone_number
      t.string :website
      t.string :email

      t.timestamps
    end

    add_foreign_key :organizations, :contacts, column: :point_of_contact_id, primary_key: :id
  end
end
