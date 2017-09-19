require 'rails_helper'

describe Attendance do

  it { should have_valid(:user_id).when(1, 99)}
  it { should_not have_valid(:user_id).when(nil, '') }

  it { should have_valid(:concert_id).when(1 , 12000)}
  it { should_not have_valid(:concert_id).when(nil, '') }
end
