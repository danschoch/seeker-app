class Activity < ApplicationRecord
    has_many :contact_activities
    has_many :contacts, through: :contact_activities
end
