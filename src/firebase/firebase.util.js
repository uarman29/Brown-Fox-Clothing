import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBgXE8CuVp_Yik9Ht39VzN9I1MW2kNt-6s",
    authDomain: "brown-fox-clothing.firebaseapp.com",
    projectId: "brown-fox-clothing",
    storageBucket: "brown-fox-clothing.appspot.com",
    messagingSenderId: "379566046088",
    appId: "1:379566046088:web:22f78e85a442a6b521583d",
    measurementId: "G-9FXR03RE9E"
  };


export const createUserProfileDocument = async (userAuth, additionalData) =>
{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists)
    {
        const { displayName, email, uid } = userAuth;
        const createdAt = new Date();
        const cart = [];

        try
        {
            await userRef.set({
                uid,
                displayName,
                email,
                createdAt,
                cart,
                ...additionalData
            });
        }
        catch(error)
        {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

export const uploadShopData = async (shop_data) =>
{
    const collectionRef = firestore.collection("shop_data");
    Object.keys(shop_data).forEach(key =>
        {
            const newDocRef = collectionRef.doc(key);
            newDocRef.set(shop_data[key]);
        });
    return;
}

export const convertShopQuerySnapshotToObject = (querySnapshot) =>
{
    return querySnapshot.docs.reduce((accumulator, docSnapshot) => {
        accumulator[docSnapshot.id] = docSnapshot.data();
        return accumulator;
    }, {});
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;