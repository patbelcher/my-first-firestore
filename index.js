//import tools we need from Firebase-admin library
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

//import out credentials from secrets.js
import { creds } from "./secrets.js";

//connect to our Firebase project - need credentials
initializeApp({
    credential: cert(creds),
});

//connect to Firestore database - just ask
const db = getFirestore();

//CRUD
/*CREATE
const pants = {
    brand: 'Levis',
    style: 'Jeans',
    color:'black',
    size: 'XL',
    price: 79.99
}
*/


/*lets add a shirt to our clothing collection
db.collection('clothing').add(pants)
    .then(doc=> {
        console.log('Clothing added: ' + doc.id);
    })
    .catch(console.error);
    */

    //now we have data so lets read, or get the data
    //db.collection('clothing').get()
    /*
    .then(collection => {
        const clothing = collection.docs.map(doc => {
            let item = doc.data()
            item.id = doc.id
            return item
        })
        console.table(clothing)

    })
    */
   //same as what is commented out above ising spread operator
   //lets read now that we have data
   db.collection('clothing').get() 
   .then (collection => {
        const clothing = collection.docs.map(doc=>({id:doc.id, ...doc.data()}))
        console.table(clothing);
    })

    .catch(console.error);