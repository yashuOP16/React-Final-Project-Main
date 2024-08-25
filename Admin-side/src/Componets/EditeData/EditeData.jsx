import React, { useEffect, useState } from 'react';
import '../EditeData/EditeData.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import { addProductAsync, updateDataAsync, updateImg, uploadImages } from '../Service/Action/action';

function EditeData() {

   const { product} = useSelector(state => state.reducer);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [editData, setEditData] = useState({
    id: '',
    productName: '',
    category: '',
    price: '',
    quantity: '',
    image: ''
   });

   useEffect(() => {
       if (product) {
           setEditData(product);
       }
   }, [product]);

   const handleChange = (e) => {
       const { name, value } = e.target;
       setEditData({ ...editData, [name]: value });
   };

   const handleUpdate = async (e) => {
       e.preventDefault(); 
       await dispatch(updateDataAsync(editData));
       navigate('/inventory');
   };

   const handleUpadetimg = async(e)=>{
       const file = e.target.files[0];
       try {
           const url = await dispatch(updateImg(file));
           setEditData({ ...editData, image: url });
       } catch (error) {
           console.error('Error uploading image:', error);
       }
   }


    return (
        <div id="main" className='pt-5 d-flex justify-content-center '>
            <div class="form-container">
                <h2>Edit Product</h2>
                <form onSubmit={handleUpdate}>
                    <div class="form-group">
                        <label for="image">Upload Image</label>
                        <input type="file" id="image" name="image" accept="image/*" onChange={handleUpadetimg} required />
                    </div>
                    <div class="form-group">
                        <label for="productName">Product Name</label>
                        <input type="text" id="productName" name="productName" onChange={handleChange} value={editData.productName} required />
                    </div>
                    <div class="form-group">
                        <label for="category">Category</label>
                        <input type="text" id="category" name="category" onChange={handleChange} value={editData.category} required />
                    </div>
                    <div class="form-group">
                        <label for="price">Price</label>
                        <input type="text" id="price" name="price" min="0" onChange={handleChange} value={editData.price} required />
                    </div>
                    <div class="form-group">
                        <label for="quantity">Quantity</label>
                        <input type="number" id="quantity" name="quantity" min="1" onChange={handleChange} value={editData.quantity} required />
                    </div>
                    <div class="form-group mt-5">
                        <button type="submit">Update Product</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditeData
