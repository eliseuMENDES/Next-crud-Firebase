import firebase from "firebase/app";
import 'firebase/firestore';

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "DADOS",
        authDomain: "next-crud-DADOS",
        projectId: "next-crud-DADOS",
    })
}

export default firebase