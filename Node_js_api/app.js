// const express = require('express');
// const router = require('./routes');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const app = express();
// const port = process.env.PORT || 5000;

// app.use(express.json());
// app.use(cors());
// app.use('/api', router);

// const mongoUri = process.env.MONGODB_uri='mongodb+srv://Contas:nuouP4MyDhH0q3E4@cluster0.gkkofhc.mongodb.net/LoginData';

// if (!mongoUri) {
//     console.error('MONGODB_URI environment variable is not set.');
//     process.exit(1);
// }

// // Use the environment variable for the MongoDB connection string
// mongoose.connect(mongoUri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverSelectionTimeoutMS: 30000, // Set a higher timeout value (e.g., 30 seconds)
// }).then(() => {
//     console.log('Connected to MongoDB');
// }).catch(err => {
//     console.error('MongoDB connection error:', err);
//     process.exit(1);
// });

// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });

// module.exports = app;
const express = require('express');
const router = require('./routes');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 5000;
require('dotenv').config();

app.use(express.json());

app.use(cors());
app.use('/api', router);
mongoose.connect('mongodb+srv://root:root@cluster0.jwrqjyh.mongodb.net/Logindata', {
    useNewUrlParser: true,
    serverSelectionTimeoutMS: 30000, // Set a higher timeout value (e.g., 30 seconds) 
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
