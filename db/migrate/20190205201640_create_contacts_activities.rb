class CreateContactsActivities < ActiveRecord::Migration[5.2]
  def change
    create_table :contacts_activities do |t|
      t.references :contact, foreign_key: true
      t.references :activity, foreign_key: true

      t.timestamps
    end
  end
end
