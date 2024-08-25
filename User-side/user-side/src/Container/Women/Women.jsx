import React, { useState } from 'react';
import product1 from '../../assets/images/beautiful-young-woman-choosing-what-wear-looking-front.jpg';
import product2 from '../../assets/images/buynewtrend-solid-navy-rayon-half-sleeve-women-formal-shirt-product-images-rvag2mtrld-0-202303221125.webp';
import product3 from '../../assets/images/cute-young-woman-looking-her-side-white-wall.jpg';
import product4 from '../../assets/images/download.jpeg';
import product5 from '../../assets/images/expressive-young-woman-posing.jpg';
import product6 from '../../assets/images/front-view-smiley-girl-posing.jpg';
import product7 from '../../assets/images/Fuchsia-2-570x760.jpg';
import product8 from '../../assets/images/products1.jpg';
import product9 from '../../assets/images/products2.jpg';
import product10 from '../../assets/images/women cord-sets.jpg';
import product11 from '../../assets/images/young-stylish-woman-dressed-checkered-shirt-jeans-poses-isolated-wall-with-charming-smile-happy-emotions.jpg';
import product12 from '../../assets/images/young-lady-designed-t-shirt-posing-with-long-hair-white.jpg';
import product13 from '../../assets/images/young-indian-woman-wearing-sari.jpg';
import product14 from '../../assets/images/portrait-young-woman-wearing-traditional-sari-garment.jpg';
import product15 from '../../assets/images/saree3.jpg';


const Women = () => {
  const [filters, setFilters] = useState({
    priceRange: [0, 2000],
    productType: [],
    size: [],
  });

  const products = [
  
    { id: 1, name: 'Red and Blue checks Shirt', price: 999, image:product1, type: 'Shirt', size: ['S', 'M'] },
    { id: 2, name: 'Blue Formal Shirt', price: 999, image:product2, type: 'Co-Ord Sets', size: ['M', 'L'] },
    { id: 3, name: 'Brown with White Checks Shirt', price: 1049, image:product3, type: 'Shirt', size: ['S', 'M'] },
    { id: 4, name: 'White full slive shirt', price: 1049, image:product4, type: 'Co-Ord Sets', size: ['S', 'M','L'] },
    { id: 5, name: 'Blue denim shirt', price: 849, image:product5, type: 'Shirt', size: ['S', 'M','L'] },
    { id: 6, name: 'white dots shirt', price: 999, image:product6, type: 'Co-Ord Sets', size: [ 'M'] },
    { id: 7, name: 'Stylish pink shirt', price: 1999, image:product7, type: 'Co-Ord Sets', size: ['S', 'M','L'] },
    { id: 8, name: 'Relaxing Party shirt', price: 1159, image:product8, type: 'Co-Ord Sets', size: ['S', 'M','L'] },
    { id: 9, name: 'Printed Party shirt', price: 999, image:product9, type: 'Shirt', size: ['M','L'] },
    { id: 10, name: 'Full shirt set', price: 599, image:product10, type: 'Shirt', size: ['S', 'M'] },
    { id: 11, name: 'Red and black checks shirt', price: 699, image:product11, type: 'Shirt', size: ['S', 'M','L'] },
    { id: 12, name: 'Design printed shirt', price: 949, image:product12, type: 'Co-Ord Sets', size: ['M'] },
    { id: 13, name: 'Woman maroon saree', price: 1049, image:product13, type: 'Sarees', size: [] },
    { id: 14, name: 'Woman Stylish green sarre', price: 1549, image:product14, type: 'Sarees', size: [] },


   
  ];

  const handleFilterChange = (type, value) => {
    setFilters(prev => {
      return {
        ...prev,
        [type]: value
      };
    });
  };

  const filteredProducts = products.filter(product => {
    const isWithinPriceRange = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
    const matchesProductType = filters.productType.length === 0 || filters.productType.includes(product.type);
    const matchesSize = filters.size.length === 0 || filters.size.some(size => product.size.includes(size));
    return isWithinPriceRange && matchesProductType && matchesSize;
  });

  return (
    <>
    

    <div className="product-listing container">
      <div className="filters pt-5">
        <h4 className='py-3 welcome-font fw-bold'>Filter</h4>
        <div className="filter-section py-2">
          <h5 className='welcome-font fw-bold fs-3'>Price</h5>
          <input 
            type="range" 
            min="0" 
            max="2000" 
            value={filters.priceRange[1]} 
            onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], e.target.value])} 
          />
          <div>₹ {filters.priceRange[0]} To ₹ {filters.priceRange[1]}</div>
        </div>

        <div className="filter-section py-5">
          <h5 className='welcome-font fw-bold fs-3'>Product Type</h5>
           <div><label  className='welcome-font fs-4'></label></div>       
           <div><label  className='welcome-font fs-4'><input type="checkbox" value="Sarees" onChange={(e) => handleFilterChange('productType', e.target.checked ? [...filters.productType, e.target.value] : filters.productType.filter(type => type !== e.target.value))} /> Sarees</label></div>   
           <div><label  className='welcome-font fs-4'><input type="checkbox" value="Shirts" onChange={(e) => handleFilterChange('productType', e.target.checked ? [...filters.productType, e.target.value] : filters.productType.filter(type => type !== e.target.value))} /> Shirts</label></div>
        </div>

        <div className="filter-section">
          <h5  className='welcome-font fw-bold fs-3'>Size</h5>
          <div><label  className='welcome-font  fs-4'><input type="checkbox" value="S" onChange={(e) => handleFilterChange('size', e.target.checked ? [...filters.size, e.target.value] : filters.size.filter(size => size !== e.target.value))} /> S</label></div>
          <div><label  className='welcome-font  fs-4'><input type="checkbox" value="M" onChange={(e) => handleFilterChange('size', e.target.checked ? [...filters.size, e.target.value] : filters.size.filter(size => size !== e.target.value))} /> M</label></div>
          <div><label  className='welcome-font  fs-4'><input type="checkbox" value="L" onChange={(e) => handleFilterChange('size', e.target.checked ? [...filters.size, e.target.value] : filters.size.filter(size => size !== e.target.value))} /> L</label></div>
        </div>
      </div>

      <div className="product-grid justify-content-center">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card col-3 pb-3 ">
            <img src={product.image} alt={product.name}  className='w-100' style={{height: "300px"}}/>
            <h5  className='welcome-font fw-bold fs-5 pt-2'>{product.name}</h5>
            <p  className='welcome-font fs-6'>₹{product.price}</p>
            <button className='py-1 px-2 border-0 rounded-2 text-white women-addto-cart-btn p-font'>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Women;
