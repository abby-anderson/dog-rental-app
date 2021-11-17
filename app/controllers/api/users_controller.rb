class Api::UsersController < ApplicationController
  
    def create
        user = User.create(user_params)
        if user.valid?
            # session[:user_id] ||= user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.permit(
          :first_name,
          :last_name,
          :username,
          :location,
          :phone_number,
          :password,
          :password_confirmation
        )
    end
    
end