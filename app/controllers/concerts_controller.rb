class ConcertsController < ApplicationController

  def index
    @concerts = Concert.all.order("date ASC")
  end


  def new
    @concert = Concert.new
  end


end
