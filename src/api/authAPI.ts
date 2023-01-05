import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth, db} from '../firebase'
import {DataProps} from '../components/AuthForm/AuthForm'
import {doc, setDoc} from "firebase/firestore";


export const signUp = (data: DataProps) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
        .then(({user}) => {
            setDoc(doc(db, "users", user.uid), {questionnaires:[]});
        })
}
export const signIn = (data: DataProps) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
}
export const logOut = () => {
    signOut(auth)
}