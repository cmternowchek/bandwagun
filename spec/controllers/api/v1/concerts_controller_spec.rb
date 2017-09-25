require "rails_helper"

RSpec.describe Api::V1::ConcertsController, type: :controller do

  let!(:first_concert) { FactoryGirl.create(:concert) }

  describe "GET#index" do
    it "should show list of concerts" do

      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json).to be_kind_of(Array)
      expect(returned_json).to_not be_kind_of(Hash)

      expect(returned_json[0]["artist"]).to eq "Coast Modern"
      expect(returned_json[0]["id"]).to eq 1

    end
  end

end
