import barat from '../../assets/images/made-in-bharat.png';
import commit from '../../assets/images/commitment.png';
import Authenticity from '../../assets/images/authenticity.png';
import Modern from '../../assets/images/modern.png';

const styles = {
  footer: {
    backgroundColor: 'whitesmoke',
    padding: '20px',
  },
  followUs: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  features: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#146321',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
  },
  input: {
    padding: '10px',
    marginRight: '10px',
  },
  socialMedia: {
    display: 'flex',
    gap: '10px',
  },
  copyright: {
    textAlign: 'center',
    marginTop: '20px',
  }
};


const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent} className='py-3'>
        <div>
          <h3 className='welcome-font fs-3 fw-bold'>Links</h3>
          <ul className='list-unstyled'>
            <li><a href="#" className='text-decoration-none  p-font' style={{color: "green"}}><u>Home</u></a></li>
            <li><a href="#" className='text-decoration-none  p-font' style={{color: "green"}}><u>Products</u></a></li>
            <li><a href="#" className='text-decoration-none  p-font' style={{color: "green"}}><u>Our Story</u></a></li>
            <li><a href="#" className='text-decoration-none  p-font' style={{color: "green"}}><u>Contact Us</u></a></li>
          </ul>
        </div>
        
        <div>
          <h3 className='welcome-font fs-3 fw-bold'>Useful Links</h3>
          <ul className='list-unstyled'>
            <li><a href="#" className='text-decoration-none  p-font' style={{color: "green"}}><u>Login</u></a></li>
            <li><a href="#" className='text-decoration-none  p-font' style={{color: "green"}}><u>Register</u></a></li>
            <li><a href="#" className='text-decoration-none  p-font' style={{color: "green"}}><u>My Orders</u></a></li>
            <li><a href="#" className='text-decoration-none  p-font' style={{color: "green"}}><u>Track Order</u></a></li>
            <li><a href="#" className='text-decoration-none  p-font' style={{color: "green"}}><u>Return Order</u></a></li>
          </ul>
        </div>
        
        <div>
          <h3 className='welcome-font fs-3 fw-bold '>Privacy</h3>
          <ul className='list-unstyled'>
            <li><a href="#" className='text-decoration-none  p-font' style={{color: "green"}}><u>Privacy Policy</u></a></li>
            <li><a href="#" className='text-decoration-none  p-font' style={{color: "green"}}><u>Terms & Conditions</u></a></li>
            <li><a href="#" className='text-decoration-none  p-font' style={{color: "green"}}><u>Return / Refund Policy</u></a></li>
            <li><a href="#" className='text-decoration-none  p-font' style={{color: "green"}}><u>Shipping Policy</u></a></li>
          </ul>
        </div>
        
        <div>
          <h3 className='welcome-font fs-3 fw-bold '>Subscribe to our newsletter</h3>
          <form>
            <input type="email" placeholder="Enter your e-mail" style={styles.input} className='rounded-2'/>
            <button type="submit" style={styles.button} className='rounded-2 welcome-font fs-6'>Subscribe now</button>
          </form>
        </div>
      </div>
      
      <div style={styles.copyright} className='py-0'>
        <p className='p-font'>&copy; 2024 Maria Fashion. All Rights Reserved. Powered by @mariafashion.</p>
      </div>
    </footer>
  );
};



export default Footer;
