import firebase from "firebase"
import FirebaseConfig from "./FirebaseConfig.json";
import { Alert } from "react-native";

class Firebase {
  constructor() {
    this.init()
    this.checkAuth()
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp(FirebaseConfig);
    }
  }

  checkAuth = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
    })
  }

  send = order => {
    firebase.database().ref("orders/"+order.customerName).push(order);
  }


}

export default new Firebase();
