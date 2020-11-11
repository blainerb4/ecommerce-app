import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBpuwIo7AnDbCFF6lKWc6ekre65aUymTa8",
    authDomain: "ecommerce-app-2dccc.firebaseapp.com",
    databaseURL: "https://ecommerce-app-2dccc.firebaseio.com",
    projectId: "ecommerce-app-2dccc",
    storageBucket: "ecommerce-app-2dccc.appspot.com",
    messagingSenderId: "923428263736",
    appId: "1:923428263736:web:2e589e67624eb892fa53cd",
    measurementId: "G-0M744NHC2R"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName, 
                email,
                createdAt,
                ...additionalData
            });
        } catch(error){
            console.log('error creating user', error.message)
        }
    }
    return userRef;
  };
//, objectsToAdd
  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
      const collectionRef = firestore.collection(collectionKey);

      const batch = firestore.batch();
      objectsToAdd.forEach(obj =>{
          const newDocRef = collectionRef.doc();
          batch.set(newDocRef, obj)
      });
      return await batch.commit()
  };

  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    return transformedCollection.reduce((accumulator, collection) =>{
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})
  };
  //batch=group calls together into one big request
  //foreach doesnt return us a  new array we just want to call the function
  // if the snapshot does not exist, create data in place if there isnt create new user 
  // 
  //this function allows us to take user auth object we got from authentication library and store it in the database
  //asynchronous action because we are making an api request, 
  //userauth object we got from auth library & additional data we might need
  //function has to make sure we get back valid object. bang = ! (true/false) if the userauth object does not exist exit
  
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

 // provider.setCustomerParameters({ prompt: 'select_account' })
  //means we always want to trigger google popup whenever we use 
  //google auth provider for authentication and sign in

 // export const signInWithGoogle = () => auth.signInWithPopup()
 //takes provider class and takes it with many dif types of popups
 //theres facebook, twitter but wre are using google
 //import signinwithgoogle to signin.jsx