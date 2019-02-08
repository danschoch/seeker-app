class ContactSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :phone_number, :email, :website, :linkedin, :title
  belongs_to :organization
end
