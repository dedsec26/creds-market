const functions = require("firebase-functions");
// const { initalizeApp, applicationDefault } = require("firebase-admin/app");
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const ad = require("firebase-admin")
// const { db } = require("../src/firebase");
// const { getFirestore } = require("firebase/firestore");
// import { addDoc, collection } from "firebase/firestore";
const 
admin.initializeApp();
// initalizeApp()
const db = getFirestore()
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.helloworld = functions
  .runWith({
    memory: "128MB",
    timeoutSeconds: 30,
  })
  .https.onRequest((request, response) => {
    console.log("This is hello world");
    response.json({
      message: "Hello from Firebase!",
    });
  });

exports.scheduer = functions.pubsub
  .schedule("every 5 minutes")
  .onRun((context) => {
    console.log("This will be run every 5 minutes!");
    return null;
  });

// exports.addtokens = functions.https.onRequest(async (req, res) => {
//   let amount = parseInt(req.body.amount);
//   //   const availability = await Users.findById(req.body.id);
//   const availability = false;
//   if (!availability) {
//     res.json("Account does not exist.");
//   } else {
//     availability.tokens = availability.tokens + amount;
//     await availability.save();
//     res.json(`You succesfully added ${req.body.amount} tokens!!!`);
//   }
// });

exports.signup = functions.auth.user().onCreate((user) => {
  // const docRef = await addDoc(collection(db, "users"), {
  //   name: "name",
  //   email: user.email,
  //   credits: 3,
  // });
  // console.log(await user.email);
  const docRef = db.collection("users")
  const docs = await docRef.get()
  if (!docs.exists) {
    console.log('No such document!');
  } else {
    console.log('Document data:', docs.data());
  }
});


