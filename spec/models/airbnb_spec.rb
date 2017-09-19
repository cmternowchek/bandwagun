require 'rails_helper'

describe Airbnb do
  it { should have_valid(:cost).when(1, 99)}
  it { should_not have_valid(:cost).when(nil, '')}

end
