class RenameTypeToContactTypeInContacts < ActiveRecord::Migration[5.2]
  def change
    rename_column :contacts, :type, :contact_type
  end
end
