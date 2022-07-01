import app from "./firebaseconfig";
import { getDatabase, ref, onValue } from "firebase/database";

const database = getDatabase(app);

let getDataFromFirebase = (nodeName, uid) => {
  const refrense = ref(database, `${nodeName}/${uid}`);
  return new Promise((resolve, reject) => {
    onValue(refrense, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        resolve(data);
      } else {
        reject("no data");
      }
    });
  });
};
export { getDataFromFirebase };
