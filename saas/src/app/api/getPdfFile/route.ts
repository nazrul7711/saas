import { NextResponse } from "next/server";
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

const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export async function GET(req: Request) {
  const pathReference = ref(storage, "autoCV latest.pdf");
  let url =await new Promise((resolve,reject)=>{
    getDownloadURL(pathReference)
      .then((url) => {
        console.log(url);
        resolve(url)
      })
      .catch((error) => {
        reject(error)
      });

  })
  
   return NextResponse.json({ msg: url });
}
//https://cors-anywhere.herokuapp.com/