const express = require('express');
const db = require('./config/connection.js');
const routes = require('./routes');
const app = express();

const PORT =  3001;
console.log(PORT);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});