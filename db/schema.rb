# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_02_08_223133) do

  create_table "activities", force: :cascade do |t|
    t.string "title"
    t.datetime "date"
    t.text "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "contacts", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "phone_number"
    t.string "email"
    t.string "website"
    t.string "linkedin"
    t.integer "organization_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "title"
    t.string "contact_type"
    t.index ["organization_id"], name: "index_contacts_on_organization_id"
  end

  create_table "contacts_activities", force: :cascade do |t|
    t.integer "contact_id"
    t.integer "activity_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["activity_id"], name: "index_contacts_activities_on_activity_id"
    t.index ["contact_id"], name: "index_contacts_activities_on_contact_id"
  end

  create_table "organizations", force: :cascade do |t|
    t.string "name"
    t.text "about"
    t.string "phone_number"
    t.string "website"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
