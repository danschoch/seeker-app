class OrganizationsController < ApplicationController
    before_action :set_organization, only: [:show, :update, :destroy]

    def index
        @organizations = Organization.all
        json_response(@organizations)
    end

    def create
        @organization = Organization.create!(organization_params)
        json_response(@organization, :created)
    end

    def show
        json_response(@organization)
    end

    def update
    end

    def destroy
    end

    private

    def organization_params
        params.permit(:name, :about, :phone_number, :email, :website)
    end

    def set_organization
        @organization = Organization.find(params[:id])
    end

end
