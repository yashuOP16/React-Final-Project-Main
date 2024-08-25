import React from 'react';
import MainBannerimage from '../../assets/images/banner1.jpeg';
import Products from '../Products/Products';
import PromoSection from '../PromoSection/PromoSection';
import App from '../NewCollections/App';


function MainBanner() {
  return (
    <>
      <div className='main-banner-image w-100 overflow-hidden'>
        <img src={MainBannerimage} alt="banner" className='mainbannner-iamges' />
      </div>

      {/* welcome part */}

      <div className='welcome-part text-center py-5'>

        <div className='fs-1 py-3'>
          <div className='welcome-font'>Welcome to <b style={{fontFamily: "initial"}}>Maria Fashion</b></div>
        </div>
        <div className='container py-2 p-font'>
          <p className='' style={{fontSize: "25px", color: "green"}}>"Welcome to our store! We’re thrilled to have you here. Explore our wide range of products and enjoy a seamless shopping experience."</p>
        </div>

      </div>

      {/* slider card carousel part */}

      <Products/>
      <PromoSection />
      <App/>
       
    </>
  )
}

export default MainBanner