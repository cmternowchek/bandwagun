require 'rails_helper'

describe Booking do

  it { should have_valid(:attendance_id).when(1, 99)}
  it { should_not have_valid(:attendance_id).when(nil, '') }

  it { should have_valid(:airbnb_id).when(1 , 12000)}
  it { should_not have_valid(:airbnb_id).when(nil, '') }
end
