require('dotenv').config()
const { initializeApp } = require('firebase/app');

const firebaseConfig = {
    projectId: process.env.FIREBASE_PROJ_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET
};

// Initialize Firebase
module.exports = initializeApp(firebaseConfig);