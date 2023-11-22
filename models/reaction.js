// Required Modules
const mongoose = require("mongoose");

// Schema definition for the Reaction sub-document, to be used in the Thought model
const ReactionSubSchema = new mongoose.Schema({
    idOfReaction: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
    },
    bodyOfReaction: {
        type: String,
        required: true,
        maxlength: 280 // Maximum character limit
    },
    user: {
        type: String,
        required: true, // Username is mandatory
    },
    dateCreated: {
        type: Date,
        default: Date.now, // Automatically set to current date and time
    },
});

// Exporting the Reaction sub-document schema
module.exports = ReactionSubSchema;
