import authOptions from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";
import { initializeApp } from "firebase/app";
import prismaclient from "@/lib/prismaClient";

const firebaseConfig = {
  apiKey: "AIzaSyBfnZINF9_VO5sM59N2v9uIQs8woS1Bf_I",
  authDomain: "e-commerce-400807.firebaseapp.com",
  projectId: "e-commerce-400807",
  storageBucket: "e-commerce-400807.appspot.com",
  messagingSenderId: "505760981286",
  appId: "1:505760981286:web:fb49c3e804f4a1576aa1e7",
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export async function POST(req: Request) {
  let formData = await req.formData();
  let pdf = formData.get("pdfFile") as unknown as File;
  let user = await getServerSession(authOptions);

  const storageRef = ref(storage, pdf.name);

  if (!pdf) {
    return NextResponse.json({ msg: "pdf is not received at backend" });
  }

  let pdfFunction = async () => {
    const uploadTask = uploadBytesResumable(
      storageRef,
      await pdf.arrayBuffer()
    );
    return new Promise<string>(async (resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };
  let pdfUrl = await pdfFunction();
  let existingUser = await prismaclient.user.findUnique({
    where: {
      email: user?.user?.email!,
    },
  });
  if (!existingUser) {
    return NextResponse.json({ msg: "No user with email ID" });
  }

  let file = await prismaclient.file.create({
    data: {
      url: pdfUrl,
      name: pdf.name,
      userId: existingUser?.id,
    },
  });
  if (!file) {
    return NextResponse.json({ msg: "not able to create file" });
  }

  return NextResponse.json({ msg: file });
}
