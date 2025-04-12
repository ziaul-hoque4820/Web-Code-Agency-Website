import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDFE7pOuX58VQKAtUTassYV5z-0qapqgCA",
  authDomain: "webagency-projecrt.firebaseapp.com",
  projectId: "webagency-projecrt",
  storageBucket: "webagency-projecrt.firebasestorage.app",
  messagingSenderId: "353190539255",
  appId: "1:353190539255:web:1677daf8bfc984c8f3c8f2",
  measurementId: "G-GTLQK63MKN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;