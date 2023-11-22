// Module Imports
const { UserModel, ThoughtModel, ReactionModel } = require("../models");
const mongooseLib = require("mongoose");

const dbConnection = require("../config/connection");

// Sample Data for Users
const sampleUsers = [
    {
        userHandle: "Alex_01",
        userEmail: "alex01@example.com",
        thoughtsList: [],
    },
    {
        userHandle: "Bella_2023",
        userEmail: "bella2023@example.net",
        thoughtsList: [],
    },
    {
        userHandle: "CharlieSun",
        userEmail: "charliesun@example.org",
        thoughtsList: [],
    },
    {
        userHandle: "Dana_Blue",
        userEmail: "dana.blue@example.co",
        thoughtsList: [],
    },
    {
        userHandle: "Evan_Star",
        userEmail: "evan.star@example.me",
        thoughtsList: [],
    },
    {
        userHandle: "Fiona_Grace",
        userEmail: "fiona.grace@example.biz",
        thoughtsList: [],
    },
    {
        userHandle: "George_2023",
        userEmail: "george2023@example.io",
        thoughtsList: [],
    },
    {
        userHandle: "HannahSky",
        userEmail: "hannah.sky@example.tv",
        thoughtsList: [],
    },
    {
        userHandle: "IvanPeak",
        userEmail: "ivan.peak@example.web",
        thoughtsList: [],
    },
];

console.log(dbConnection);

// Establishing Database Connection
dbConnection.once("open", async () => {
    console.log("Database connected");

    // Remove existing Users
    await UserModel.deleteMany({});

    // Inserting Sample Data into the Database
    await UserModel.collection.insertMany(sampleUsers);

    console.table(sampleUsers);
    console.info("Data seeding complete! 🌱");
    process.exit(0);
});
