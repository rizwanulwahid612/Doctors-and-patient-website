import React, {useContext, useEffect, useState} from 'react';
import '../firebase';
import { getAuth,onAuthStateChanged,signInWithPopup,GoogleAuthProvider,
    createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword,signOut } from "firebase/auth";

const AuthContext=React.createContext();
export function useAuth(){
    return useContext(AuthContext);
}


const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true);
    const [user,setUser]=useState()

    useEffect(()=>{
        const auth = getAuth();
        const unsubscribe=onAuthStateChanged(auth,(user)=>{
            setUser(user);
            setLoading(false);
        })
        return unsubscribe;
    },[])
    //Sign Up

async function GoogleSignin(){

    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    await signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
        }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });
}
async function SignUp(email,password,username){
    const auth = getAuth();
   await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
   await updateProfile(auth.currentUser,{
       displayName:username
   })
    const user=auth.currentUser;
   setUser({...user})


}
async  function login(email,password){
    const auth = getAuth();

   return  await  signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

async function LogOut(){
    const auth = getAuth();
    await signOut(auth);
}
const value={
        user,
        SignUp,
        login,
        LogOut,
    GoogleSignin
};

    return (
     <AuthContext.Provider value={value}>
         {!loading && children}
     </AuthContext.Provider>

    );
};

export default AuthProvider;