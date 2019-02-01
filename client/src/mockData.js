/*
import { Server, Faker, uid } from 'react-mock';

const activitySchema = {
    title: Faker.lorem.words(),
    notes: Faker.lorem.text(),
    contact: Faker.name.findName(),
    dueDate: Faker.date.future(1),
    type: Faker.random.arrayElement(["interview", "meeting", "event", "application", "correspondance"])
}

const fakeActivities = Array(5).fill(activitySchema)
*/

const randomDate = function (start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

const randomType = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};

// Activities Data Generator
let fakeActivities = [];

for (let i = 0; i < 5; i++) {
    let activity = {
        title: `Activity ${i}`,
        notes: `Lorem Ipsum Act ${i}`,
        contact: `Some person ${i}`,
        dueDate: randomDate(new Date(), new Date(2019, 6, 1)).toString(),
        type: randomType(["interview", "meeting", "event", "application", "correspondance"])
    }

    fakeActivities.push(activity)
}


//Contacts Data Generator
let fakeContacts = [];

for (let i = 0; i < 5; i++) {
    let contact = {
        name: `Some person ${i}`,
        title: `Position ${i}`,
        notes: `Lorem Ipsum Act ${i}`,
        lastContact: randomDate(new Date(), new Date(2019, 6, 1)).toString(),
        type: randomType(["recruiter", "hiring manager", "industry professional", "other"]),
        organization: `Some Org ${i}`
    }

    fakeContacts.push(contact)
}

export { fakeActivities, fakeContacts }; 

