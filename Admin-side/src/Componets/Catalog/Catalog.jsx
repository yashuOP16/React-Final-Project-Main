import React, { useState } from 'react'
import '../Catalog/Catalog.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import { addProductAsync, uploadImages } from '../Service/Action/action';

function Catalog() {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [addProducts, setAddProducts] = useState({
    id: '',
    productName: '',
    category: '',
    price: '',
    quantity: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddProducts({ ...addProducts, [name]: value });
  };

  const handleImages = async (e) => {
    const file = e.target.files[0];

    try {
      const url = await dispatch(uploadImages(file));
      setAddProducts({ ...addProducts, image: url });
    } catch (error) {
      console.error('Error uploading image:', error);
    }

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(addProducts);

    dispatch(addProductAsync(addProducts));
    setAddProducts({
      id: '',
      productName: '',
      category: '',
      price: '',
      quantity: '',
      image: ''
    });
    navigate('/inventory')
  };


  return (
    <div id="main" className='pt-5 d-flex justify-content-center '>
      <div class="form-container">
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="image">Upload Image</label>
            <input type="file" id="image" name="image" accept="image/*" onChange={handleImages}  required />
          </div>
          <div class="form-group">
            <label for="productName">Product Name</label>
            <input type="text" id="productName" name="productName" onChange={handleChange} value={addProducts.productName} required />
          </div>
          <div class="form-group">
            <label for="category">Category</label>
            <input type="text" id="category" name="category" onChange={handleChange} value={addProducts.category} required />
          </div>
          <div class="form-group">
            <label for="price">Price</label>
            <input type="text" id="price" name="price" min="0" onChange={handleChange} value={addProducts.price} required />
          </div>
          <div class="form-group">
            <label for="quantity">Quantity</label>
            <input type="number" id="quantity" name="quantity" min="1" onChange={handleChange} value={addProducts.quantity} required />
          </div>
          <div class="form-group mt-5">
            <button type="submit">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Catalog
