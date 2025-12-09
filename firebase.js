var firebase = require('firebase-admin');
var serviceAccount = require("./firebaseKey.json");
firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount)
});
module.exports = firebase;