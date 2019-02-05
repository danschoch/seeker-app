class RemoveForeignKeyFromOrganizations < ActiveRecord::Migration[5.2]
  def change
    remove_foreign_key :organizations, name: :index_organizations_on_point_of_contact_id
  end
end
