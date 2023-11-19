const mongoose = require('mongoose');

// Create a schema for User
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true, // Ensures username is unique
        required: true, // Makes this field required
        trim: true // Trims whitespace from the username
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address'] // Validates email format
    },
    thoughts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Thought' // Reference to the Thought model
    }],
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // Self-reference to the User model
    }]
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
