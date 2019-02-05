class DeletePointOfContactFromOrganizations < ActiveRecord::Migration[5.2]
  def change
    remove_column :organizations, :point_of_contact, :string
  end
end
