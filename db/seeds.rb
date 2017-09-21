# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

User.create(
  email: "cmternowchek@gmail.com",
  password: "123456",
  password_confirmation: "123456",
)

Concert.destroy_all

Concert.create(
  artist:"Coast Modern",
  date: "2017-09-22T19:00:00",
  city: "Washington",
  venue_name: "U Street Music Hall",
  venue_lat: 38.917202,
  venue_lng: -77.027764,
  venue_zip: "20009",
  ticket_URL: "http://www.faketickets.com",
)

Concert.create(
  artist: "Coast Modern",
  date: "2017-09-25T18:30:00",
  city: "New York",
  venue_name:"Mercury Lounge",
  venue_lat: 40.724859,
  venue_lng: -73.993401,
  venue_zip:"10012",
  ticket_URL: "http://www.faketickets.com",
)

Concert.create(
  artist: "Coast Modern",
  date: "2017-09-27T20:00:00",
  city: "Philadelphia",
  venue_name: "Boot & Saddle",
  venue_lat: 0.0,
  venue_lng: 0.0,
  venue_zip: "19147",
  ticket_URL: "http://www.faketickets.com",
)

Concert.create(
  artist: "Coast Modern",
  date: "2017-09-30T00:00:00",
  city: "Atlanta",
  venue_name: "Vinyl",
  venue_zip: "30305",
  ticket_URL: "http://www.getsometickets.com",
 )

Concert.create(
  artist:"Spinal Tap",
  date: "2017-09-22T19:00:00",
  city: "Philadephia",
  venue_name: "Your Mom's House",
  venue_zip: "19106",
  ticket_URL: "http://www.faketickets.com",
)

Concert.create(
  artist: "Steel Dragon",
  date: "2017-09-22T19:00:00",
  city: "King's Landing",
  venue_name: "The Iron Throne",
  venue_zip: "21401",
  ticket_URL:"http://www.faketickets.com",
)

Concert.create(
  artist: "Marvin Berry",
  date: "1955-11-12T19:00:00",
  city: "Hill Valley",
  venue_name: "Hill Valley High School",
  venue_zip: "91352",
  ticket_URL: "http://www.backtothefuturetickets.com",
)
