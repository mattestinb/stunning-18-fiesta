// Mongoose Module Import
const mongoose = require("mongoose");
const ReactionSubSchema = require("./Reaction"); // Importing the Reaction sub-schema

// Defining the schema for a Thought
const ThoughtSchema = new mongoose.Schema(
    {
        textOfThought: {
            type: String,
            required: true,
            maxlength: 280, // Maximum length for a thought
            minlength: 1, // Minimum length for a thought
        },
        dateOfCreation: {
            type: Date,
            default: Date.now, // Sets the current date and time by default
        },
        user: {
            type: String,
            required: true, // Username is mandatory
        },
        listOfReactions: [ReactionSubSchema], // An array of Reaction sub-documents
    },
    {
        toJSON: {
            virtuals: true, // Enable virtuals for JSON conversion
        },
        id: false, // Prevents creation of an 'id' virtual field
    }
);

// Virtual property to count the number of reactions on a Thought
ThoughtSchema.virtual("countOfReactions").get(function () {
    return this.listOfReactions.length; // Returns the number of reactions
});

// Compiling the Thought model using the ThoughtSchema
const ThoughtModel = mongoose.model("Thought", ThoughtSchema);

// Exporting the Thought model
module.exports = ThoughtModel;
