import {collection,getDocs,addDoc,doc} from 'firebase/firestore'
import { firestore } from './firebase'

export const addPost = async()=>{
    const result = addDoc(collection(firestore,'posts'),doc)
}
export const getAllPosts = async()=>{
    const respone = await getDocs(collection(firestore,'posts'))
    const arr = respone.docs.map(e=>e.data())
    return arr
}