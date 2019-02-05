# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

org1 = Organization.create(name: "Big Org 1", about: "someting or other", email: "default@bigorg.com")


Contact.create(first_name: "Dan", last_name:"Schoch", phone_number: "8055094126", email: "d.schoch90@gmail.com", website: "danthedev.com", organization: org1)
Contact.create(first_name: "Ines", last_name:"Oliveira", phone_number: "8051234567", email: "inesco30@gmail.com", website: "inesco.com", organization: org1)