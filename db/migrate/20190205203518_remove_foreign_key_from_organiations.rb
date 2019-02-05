class RemoveForeignKeyFromOrganiations < ActiveRecord::Migration[5.2]
  def change
  end

  remove_foreign_key :organizations, column: :point_of_contact_id
end
