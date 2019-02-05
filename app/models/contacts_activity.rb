class ContactsActivity < ApplicationRecord
  belongs_to :contact
  belongs_to :activity
end
