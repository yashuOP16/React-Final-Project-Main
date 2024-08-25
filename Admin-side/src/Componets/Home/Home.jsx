import React from 'react'
import { LuListTodo } from 'react-icons/lu'
import Porder from '../../assets/imags/pending-orders-icon.svg'
import Dlabel from '../../assets/imags/download-labels-icon.svg'
import Ostock from '../../assets/imags/out-of-stock-icon.svg'
import Lstock from '../../assets/imags/low-stock-icon.svg'
import Ads from '../../assets/imags/grow_business_with_ads.png'
import { MdOutlineChevronRight } from 'react-icons/md'



function Home() {

  return (
    <div id="main">
      <div className='bg-dark p-2'>
        <div className='fs-5 fw-bold text-white'>Welcome back, Maria Store!</div>
        <div className='home-text pt-1 text-white'>Handle your account with Maria Store</div>
      </div>
      <div className='col-8'>
        <div className='bg-success mt-2 rounded p-3'>
          <div className='ps-3 pt-2'>
            <span className='todo-list'><LuListTodo className='fs-5' /></span>
            <span className='fw-bold ps-3 text-white'>List</span>
          </div>
          <div className='d-flex pt-3 p-3 gap-1'>
            <div className="col-3 border border-1 rounded d-flex p-3 align-items-center order-box-hover">
              <div>
                <img src={Porder} alt="order" />
              </div>
              <div className='ps-3'>
                <div className='todo-order'>
                  Pending Order
                </div>
                <div className='todo-o '>
                  0
                  <span className='aero-po'><MdOutlineChevronRight className='fs-5' /></span>
                </div>
              </div>
            </div>
            <div className="col-3 border border-1 rounded  d-flex p-3 align-items-center  order-box-hover">
              <div>
                <img src={Dlabel} alt="lable" />
              </div>
              <div className='ps-3'>
                <div className='todo-order'>
                  Download Labels
                </div>
                <div className='todo-o'>
                  0
                  <span className='aero-po'><MdOutlineChevronRight className='fs-5' /></span>


                </div>
              </div>
            </div>
            <div className="col-3 border border-1 rounded  d-flex p-3 align-items-center order-box-hover">
              <div>
                <img src={Ostock} alt="stock" />
              </div>
              <div className='ps-3'>
                <div className='todo-order'>
                  Out of Stock
                </div>
                <div className='todo-o'>
                  0
                  <span className='aero-po'><MdOutlineChevronRight className='fs-5' /></span>
                </div>
              </div>
            </div>
            <div className="col-3 border border-1 rounded  d-flex p-3 align-items-center order-box-hover">
              <div>
                <img src={Lstock} alt="lstock" />
              </div>
              <div className='ps-3'>
                <div className='todo-order'>
                  Low Stock
                </div>
                <div className='todo-o'>
                  0
                  <span className='aero-po'><MdOutlineChevronRight className='fs-5' /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Home
