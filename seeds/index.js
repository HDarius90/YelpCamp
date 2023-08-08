const mongoose = require('mongoose');
const Campground = require('../models/campground')
const { descriptors, places } = require('./seedHelpers');
const cities = require('./cities');

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 200; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            // YOUR USER ID
            author: '64d1252467063ba34de63b40',
            location: cities[random1000].city,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            price,
            geometry: {
                type: "Point",
                coordinates: [ cities[random1000].longitude, cities[random1000].latitude ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/dbjksk7mf/image/upload/v1691427730/YelpCamp/cpwipl6gkuvpsmgotgw5.jpg',
                    filename: 'YelpCamp/cpwipl6gkuvpsmgotgw5'
                },
                {
                    url: 'https://res.cloudinary.com/dbjksk7mf/image/upload/v1691427731/YelpCamp/n8vxd7lgs2tb9uy8jxlp.jpg',
                    filename: 'YelpCamp/n8vxd7lgs2tb9uy8jxlp'
                }
            ]
        })
        await camp.save();
    }

}

seedDB().then(() => {
    mongoose.connection.close()
})