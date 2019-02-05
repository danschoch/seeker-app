class Contact < ApplicationRecord
    has_many :contact_activities
    has_many :activities, through: :contact_activities
end
