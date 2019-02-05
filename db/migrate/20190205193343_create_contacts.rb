class CreateContacts < ActiveRecord::Migration[5.2]
  def change
    create_table :contacts do |t|
      t.string :first_name
      t.string :last_name
      t.string :phone_number
      t.string :email
      t.string :website
      t.string :linkedin
      t.references :organization, foreign_key: true
      t.references :last_interaction
      t.references :next_interaction

      t.timestamps
    end

    add_foreign_key :contacts, :contacts_activities, column: :last_interaction_id, primary_key: :activity_id
    add_foreign_key :contacts, :contacts_activities, column: :next_interaction_id, primary_key: :activity_id
  end
end
