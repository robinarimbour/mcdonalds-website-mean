require('dotenv').config()
const { initializeApp } = require('firebase/app');

const firebaseConfig = {
    projectId: process.env.FIREBASE_PROJ_ID,
    storageBucket: 'gs://'+ process.env.FIREBASE_PROJ_ID +'.appspot.com/'
};

// Initialize Firebase
module.exports = initializeApp(firebaseConfig);