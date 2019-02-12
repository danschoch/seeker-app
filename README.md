# Seeker

Seeker is a management tool for your job searching process. Part to-do list, part digital rolodex, Seeker aims to centralize the information and resources you need to stay on top of all aspects of searching for a new job. Keep a central list of relavant contacts and set reminders for follow-up tasks, such as thank you's. Manage applications from end-to-end, from initial contact, to sending in requested materials, to interviews, to negotiations. Finally, get an overhead view of what action needs to be taken on what tasks in the dashboard view, complete with goals that you can set to keep yourself focused and motivated throughtout the search. 

## Demo

Coming Soon

## Installation

Clone this repo via:

```
git clone git@github.com:danschoch/seeker-app.git
```

## Usage

Run the following at the root directory (seeker-app):

```
bundle install
rake db:migrate
```

Change into the ```/client``` directory and run:

```
npm install
rake start
```

This will spin up two servers, one for the Ruby API at port '3001' and one for the React front end at '3000'. The app should load itself in a new tab in your web browser, but if not, copy and paste `http://localhost:3000` into your web browser.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/danschoch/seeker-app.

## License

The repo is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).