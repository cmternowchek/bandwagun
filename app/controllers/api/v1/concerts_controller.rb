class Api::V1::ConcertsController < ApplicationController

  def index
    @concerts = Concert.where("artist ILIKE ?", "%#{params[:artist_name]}%")
    if @concerts.empty?
      fetch_concerts
    end
    render json: @concerts
  end

  def show
    concert = Concert.find(params[:id])
    comments = concert.comments
    if current_user
     items = {concert: concert, comments: comments, current_user: current_user}
   else
     items = {concert: concert, comments: comments}
   end
   render json: items
  end

  def fetch_concerts
    @concerts = []
    jambase_key = ENV["JAMBASE_KEY"]
    artist_info = HTTParty.get("http://api.jambase.com/artists?name=#{params["artist_name"]}&page=0&api_key=#{jambase_key}")
    api_artist_name = artist_info["Artists"].first["Name"]
    artist_id = artist_info["Artists"].first["Id"]
    concerts_info = HTTParty.get("http://api.jambase.com/events?artistId=#{artist_id}&page=0&api_key=#{jambase_key}")
    concerts_info["Events"].each do |event|
      concert = Concert.create(
        artist: api_artist_name,
        date: event["Date"].to_time.strftime("%b %d, %Y"),
        city: event["Venue"]["City"],
        venue_name: event["Venue"]["Name"],
        venue_lat: event["Venue"]["Latitude"],
        venue_lng: event["Venue"]["Longitude"],
        venue_zip: event["Venue"]["ZipCode"],
        ticket_URL: event["TicketUrl"]
      )
      @concerts << concert
    end
  end
end
