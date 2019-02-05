class ContactsController < ApplicationController
    def index
        @contacts = Contact.all
        json_response(@contacts)
    end

    private

    def contacts_params
        params.permit(:first_name, :last_name, :phone_number, :email, :website, :linkedin)
    end

end
