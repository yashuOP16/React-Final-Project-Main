
import { doc, collection, getDocs, updateDoc, setDoc, deleteDoc } from "firebase/firestore";
import generateUniqueId from "generate-unique-id";

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../../firebase";


const addProducts = (addData) => {
    return {
        type: 'ADDPRODUCTS',
        payload: addData
    };
};

const editData = (edit) => {
    return {
        type: 'EDITPRODUCT',
        payload: edit
    };
};

const updateProduct = () => {
    return {
        type: 'UPDATEPRODUCT',
    };
};


export const addProductAsync = (pro) => {
    console.log("data", pro);
    return async (dispatch) => {
        try {
            pro.id = generateUniqueId({
                length: 4,
                useLetters: false,
            });
            await setDoc(doc(db, 'products', `${pro.id}`), pro);
            dispatch(getProductsAsync());
        }
        catch (err) {
            console.log("Error adding document: ", err);
        }
    };
};


export const getProductsAsync = () => {
    return async (dispatch) => {
        try {
            const querySnapshot = await getDocs(collection(db, 'products'));
            let proData = [];

            querySnapshot.forEach((doc) => {
                proData = [...proData, doc.data()];
            });

            dispatch(addProducts(proData));
        } catch (err) {
            console.log("Error fetching documents: ", err);
        }
    };
};


export const editProductsAsync = (editdata) => {
    return async (dispatch) => {
        try {
            dispatch(editData(editdata));
        } catch (err) {
            console.log("Failed to update document:", err);
        }
    };
};


export const updateDataAsync = (update) => {
    console.log("update ", update);
    
    return async (dispatch) => {
        try {
            const productRef = doc(db, 'products', `${update.id}`);
            await updateDoc(productRef, update); 
            dispatch(updateProduct());
            dispatch(getProductsAsync());
        } catch (err) {
            console.log("Error updating document: ", err);
        }
    };
};

export const deleteproAsync =(deletePro)=>{
    return async (dispatch)=>{
        try{
            
            await deleteDoc(doc(db ,'products',deletePro));
            dispatch(getProductsAsync());
        }catch (err){
            console.log("Error deleting document: ", err);
        }
    }
}

export const    uploadImages = (file) => {
    return (dispatch) => {
    
        const storageRef = ref(storage, `productsimg/${file.name}`);

        return uploadBytes(storageRef, file)
            .then((snapshot) => {
                return getDownloadURL(snapshot.ref);
            })
            .then((url) => {
                console.log('Uploaded file and got URL!', url);
                return url;
            })
            .catch(err => {
                console.error("Error uploading file: ", err);
                throw err;
            });
    };
};



export const updateImg = (file) => {
    return (dispatch) => {
    
        const storageRef = ref(storage, `productsimg/${file.name}`);

        return uploadBytes(storageRef, file)
            .then((snapshot) => {
                return getDownloadURL(snapshot.ref);
            })
            .then((url) => {
                console.log('Uploaded file and got URL!', url);
                return url;
            })
            .catch(err => {
                console.error("Error uploading file: ", err);
                throw err;
            });
    };
};

