class ContactSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :phone_number, :email, :website, :linkedin, :title, :contact_type
  belongs_to :organization
end
