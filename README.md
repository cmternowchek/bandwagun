# README
[ ![Codeship Status for cmternowchek/bandwagun](https://app.codeship.com/projects/45125660-7eb8-0135-b7e7-5e76c85e797c/status?branch=master)](https://app.codeship.com/projects/246068)
![Code Climate](https://codeclimate.com/github/cmternowchek/bandwagun.png)
![Coverage Status](https://coveralls.io/repos/cmternowchek/bandwagun/badge.png)

# BANDWAGUN
[Live Site](https://bandwagun.herokuapp.com/brewpubs)


## Synopsis
Bandwagun is a concert discovery site that allows users to search for upcoming concerts and see available places to stay near the concert venue.  Great for fans who want to follow their favorite bands on tour but prefer something a bit roomier than a VW bus.

#### Features
Users can login to create an account and search the JamBase database for upcoming shows by their favorite bands.  Using the "Lets Go" button, will let users view concert details along with an interactive map displaying Hotels, AirBnB's and other accomadations near the venue.  Logged in users can also create comments on a concert page to arrange meetups, ask questions, or discuss setlists.


## Getting Started
With rails and npm installed, clone this repo down and bundle / npm install. Run ```rails s``` and ```npm start``` to boot up the servers. Navigate to the default ```localhost:3000``` to view the site locally.

## Build
Bandwagun uses a Ruby on Rails back end with React.js for the front end.

### Notable Gems
* [Devise](https://github.com/plataformatec/devise) for user authentication.
* [CarrierWave](https://github.com/carrierwaveuploader/carrierwave) for image uploading.
* [Httparty](https://github.com/jnunemaker/httparty) for simple fetch requests.

## Motivation
A helpful tool for fans attending concerts in new places!

## Testing
To run the tests for this app, running the command ```rake``` in your terminal will run all Ruby tests. For the front end using React.js, running ```karma start``` will execute the Javascript tests.
