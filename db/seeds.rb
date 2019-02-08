# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

org1 = Organization.create(name: "Big Org 1", about: "someting or other", email: "default@bigorg.com")
org2 = Organization.create(name: "Startup 2", about: "something different than the other org", email: "default@startup.com")
org3 = Organization.create(name: "Recruiting Firm 1", about: "we want to get you a job", email: "default@recruiter.com")


Contact.create(first_name: "Dan", last_name:"Schoch", title: "Junior Developer", phone_number: "8055094126", email: "d.schoch90@gmail.com", website: "danthedev.com", contact_type: "industry", organization: org1)
Contact.create(first_name: "Ines", last_name:"Oliveira", phone_number: "8051234567", title: "Artist", email: "inesco30@gmail.com", website: "inesco.com", contact_type: "other", organization: org1)


i = 0

while i <= 9
    i += 1

    Contact.create(first_name: "Employee", last_name:"#{i}", title: "Developer #{i}", phone_number: "80550941#{i+9}", email: "none#{i}@none.com", website: "ilovethenumber#{i}.com", contact_type: "industry", organization: org2)
end

i = 11

while i <= 20
    i += 1

    Contact.create(first_name: "Recruiter", last_name:"#{i}", title: "Recruiter #{i}", phone_number: "80550941#{i+9}", email: "none#{i}@none.com", website: "ilovethenumber#{i}.com", contact_type: "recruiter", organization: org3)
end

