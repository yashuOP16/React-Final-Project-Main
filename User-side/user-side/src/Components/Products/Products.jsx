import product1 from '../../assets/images/buynewtrend-solid-navy-rayon-half-sleeve-women-formal-shirt-product-images-rvag2mtrld-0-202303221125.webp';
import product2 from '../../assets/images/cute-young-woman-looking-her-side-white-wall.jpg';
import product3 from '../../assets/images/expressive-young-woman-posing.jpg';
import product4 from '../../assets/images/Fuchsia-2-570x760.jpg';
import product5 from '../../assets/images/young-stylish-woman-dressed-checkered-shirt-jeans-poses-isolated-wall-with-charming-smile-happy-emotions.jpg';
import product6 from '../../assets/images/young-lady-designed-t-shirt-posing-with-long-hair-white.jpg';



const products = [
  {
    id: 1,
    name: 'Blue Formal Shirt',
    price: '₹999.00',
    imageUrl: product1, 
  },
  {
    id: 2,
    name: 'Brown with White Checks Shirt',
    price: '₹1049.00',
    imageUrl: product2,
  },
  {
    id: 3,
    name: 'Blue denim shirt',
    price: '₹849.00',
    imageUrl: product3,
  },
  {
    id: 4,
    name: 'Stylish pink shirt',
    price: '₹1999.00',
    imageUrl: product4,
  },
  {
    id: 5,
    name: 'Red and black checks shirt',
    price: '₹699.00',
    imageUrl: product5,
  },
  {
    id: 6,
    name: 'Design printed shirt',
    price: '₹949.00',
    imageUrl: product6,
  }
];

function Products() {
  return (
    <div className="product-grid container col-12">
      {products.map((product) => (
        <div key={product.id} className="product-card col-3">
          <img src={product.imageUrl} alt={product.name} className="product-image" style={{height: "360px", width: "100%"}} />
          <h2 className="product-name p-font">{product.name}</h2>
          <p className="product-price">{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
