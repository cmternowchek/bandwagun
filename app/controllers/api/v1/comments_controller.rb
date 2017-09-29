class Api::V1::CommentsController < ApplicationController
  before_action :authenticate_user!
  skip_before_action :verify_authenticity_token, only: [:create, :update]


  def create
    data = JSON.parse(request.body.read)
    if current_user
      new_comment = Comment.create(
        title: data["title"],
        body: data["body"],
        concert_id: data["concert_id"],
        user_id: current_user.id,
      )
    else
      render json: nil
    end
  end


  def destroy
    commentToDelete = Comment.find(params[:id])
    commentToDelete.delete
  end

end
