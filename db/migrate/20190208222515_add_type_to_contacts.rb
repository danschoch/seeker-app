class AddTypeToContacts < ActiveRecord::Migration[5.2]
  def change
    add_column :contacts, :type, :string
  end
end
