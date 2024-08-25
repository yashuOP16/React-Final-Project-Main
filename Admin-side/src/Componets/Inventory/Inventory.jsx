import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { deleteproAsync, editProductsAsync, getProductsAsync } from '../Service/Action/action';

function Inventory() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { allproducts} = useSelector(state => state.reducer);
  console.log("Products", allproducts);

  const handleEdit = (id) => {
    console.log("Edit", id);
    dispatch(editProductsAsync(id));
    navigate('/editeData');
  };

  const handledelete = (id) => {
    dispatch(deleteproAsync(id))
  }

  useEffect(() => {
    dispatch(getProductsAsync());
  }, [dispatch]);


  return (
    <div id="main" className='pt-3'>
      <div className='d-flex'>
        {
          allproducts.map((pro) => {
            return (
              <div class="card ms-2 col-4" style={{ width: '18rem'}}>
                <div className='p-2' >
                  <img src={pro.image} class="card-img-top" style={{height:'200px'}}/>
                </div>
                <div class="card-body" style={{boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"}}>
                  <p class="card-text"><span className='fs-5 fw-bold'>Product Name: </span>{pro.productName}</p>
                  <p class="card-text"><span className='fs-5 fw-bold'>category: </span>{pro.category}</p>
                  <p class="card-text"><span className='fs-5 fw-bold'>price: </span>{pro.price}</p>
                  <p class="card-text"><span className='fs-5 fw-bold'>quantity: </span>{pro.quantity}</p>
                  <a href="#" class="btn btn-info" onClick={() => handleEdit(pro.id)}>Edit</a>
                  <a href="#" class="btn btn-danger ms-3" onClick={() => handledelete(pro.id)}>Delete</a>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Inventory
