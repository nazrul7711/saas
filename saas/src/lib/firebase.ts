import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBfnZINF9_VO5sM59N2v9uIQs8woS1Bf_I",
  authDomain: "e-commerce-400807.firebaseapp.com",
  projectId: "e-commerce-400807",
  storageBucket: "e-commerce-400807.appspot.com",
  messagingSenderId: "505760981286",
  appId: "1:505760981286:web:fb49c3e804f4a1576aa1e7",
};


export const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
// const storage = getStorage(app);
// const pathReference = ref(storage, "Accessories");
// getDownloadURL(pathReference)
//   .then((url) => {
//     console.log(url);
//     console.log("heloooooo");
//   })
//   .catch((error) => {
//     // A full list of error codes is available at
//     // https://firebase.google.com/docs/storage/web/handle-errors
//     switch (error.code) {
//       case "storage/object-not-found":
//         // File doesn't exist
//         break;
//       case "storage/unauthorized":
//         // User doesn't have permission to access the object
//         break;
//       case "storage/canceled":
//         // User canceled the upload
//         break;

//       // ...

//       case "storage/unknown":
//         // Unknown error occurred, inspect the server response
//         break;
//     }
//   });






