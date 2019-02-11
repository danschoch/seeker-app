class ContactsController < ApplicationController
    before_action :set_contact, only: [:show, :update, :destroy]

    def index
        @contacts = Contact.all
        json_response(@contacts)
    end

    def create
        @contact = Contact.new(contact_params)
        @organization = Organization.find_or_create_by!(name: params[:organization]) if params[:organization]
        @contact.organization = @organization
        @contact.save!
        json_response(@contact, :created)
    end

    def show
        json_response(@contact)
    end

    def update
    end

    def destroy
    end

    private

    def contact_params
        params.require(:contact).permit(:first_name, :last_name, :phone_number, :email, :website, :linkedin, :title)
    end

    def set_contact
        @contact = Contact.find(params[:id])
    end

end
