class Api::V1::ConcertsController < ApplicationController

  def index
    render json: Concert.all
  end

  def show
   concert = Concert.find(params[:id])
  end

  end
