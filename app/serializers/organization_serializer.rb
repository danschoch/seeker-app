class OrganizationSerializer < ActiveModel::Serializer
  attributes :id, :name, :about, :phone_number, :email, :website

  has_many :contacts
end
