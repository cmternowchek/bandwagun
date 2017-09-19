require 'rails_helper'

describe Concert do

  it { should have_valid(:artist).when("Coast Modern", "Jesse and the Rippers") }
  it { should_not have_valid(:artist).when(nil, '') }

  it { should have_valid(:date).when("2017-09-27T20:00:00", "2020-01-01T20:00:00") }
  it { should_not have_valid(:date).when(nil, '') }

  it { should have_valid(:venue_name).when("Boot & Saddle", "The Peach Pit") }
  it { should_not have_valid(:venue_name).when(nil, '') }

  it { should have_valid(:venue_zip).when("19147", "90210") }
  it { should_not have_valid(:venue_zip).when(nil, '')}

  it { should have_valid(:ticket_URL).when("http://www.stuff.com", "http://www.things.com")}
  it { should_not have_valid(:ticket_URL).when(nil, '')}
end
