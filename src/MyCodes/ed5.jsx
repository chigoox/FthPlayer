
import { collection, doc, setDoc, getDocs, getDoc, updateDoc, deleteField } from "firebase/firestore";
import { DATABASE } from '../../Firebase'
import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";



export function handleInput5(key, value, stateSetter) {
    //const key = target.name
    // const value = target.value


    try {
        stateSetter((old) => {
            return { ...old, [key]: value }
        })
    } catch {
        if (!stateSetter) {
            console.log('need stateSetter')
        }
    }

}




export async function addToDatabase(collection, Doc, field, data) {


    await setDoc(doc(DATABASE, collection, Doc), {
        [field]: data,
    }, { merge: true });

}







export const getRand = (max) => { return Math.floor(Math.random() * max) + 1; }





async function fetchDocument(collection, document, setterfunction) {
    const docRef = doc(DATABASE, collection, document);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        setterfunction(docSnap.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}


export { fetchDocument }