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


// Activities Data Generator
let fakeActivities = [];
let randomDate = function (start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
let randomType = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};
  

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

export default fakeActivities


//Contacts Data Generator