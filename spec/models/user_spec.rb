require 'rails_helper'

describe User do

  it { should have_valid(:first_name).when("Steve" , "Barry")}
  it { should_not have_valid(:first_name).when(nil, '') }

  it { should have_valid(:last_name).when("Buscemi", "Manilow")}
  it { should_not have_valid(:last_name).when(nil, '') }

  it { should have_valid(:email).when("joe@gmail.com" , "another@gmail.com") }
  it { should_not have_valid(:email).when(nil, '', 'urser', 'urseratcom', 'users.com') }

  it 'has a matching password confirmation for password' do
    user = User.new
    user.password = "password"
    user.password_confirmation = "diffpassword"


  expect(user).to_not be_valid
  expect(user.errors[:password_confirmation]).to_not be_blank


end
end
