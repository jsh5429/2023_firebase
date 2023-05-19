// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// 인증을 위한 getAuth가져오기
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYjbg1MaLQKH1PLvBmS_V1izrfSLiW8kM",
  authDomain: "ex-firebase-a4dac.firebaseapp.com",
  projectId: "ex-firebase-a4dac",
  storageBucket: "ex-firebase-a4dac.appspot.com",
  messagingSenderId: "385434794960",
  appId: "1:385434794960:web:8f187b804cfda5b8ea57d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//console.log(app);

// 사용하고자하는 서비스를 들고와서 사용
// 인증서비스에 관한 내용 들고와서 사용
export const auth = getAuth(app);
