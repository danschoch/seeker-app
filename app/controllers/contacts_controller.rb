class ContactsController < ApplicationController
    def index
        @contacts = Contact.all
        json_response(@contacts)
    end

    private

    def contacts_params
        params.permit(:)


end
