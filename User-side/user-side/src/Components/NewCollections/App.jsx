import image1 from '../../assets/images/download.jpeg';
import image2 from '../../assets/images/products1.jpg';
import image3 from '../../assets/images/women-shirts.jpg';


function App() {

    return (
        <>
            <div className="container py-5">
                <div className="app-container">
                    

                    <div className="content m-auto">
                        <div >
                            <h2 className="new-collection-title text-center welcome-font fs-3 py-2"><b>Latest Collection</b></h2>
                            <div className="collection-items">
                                <div className="item">
                                    <img src={image1} alt="" className="item-image" />
                                    <div className="item-description p-font">White full slive shirt</div>
                                </div>
                                <div className="item">
                                    <img src={image2} alt="" className="item-image" />
                                    <p className="item-description p-font">Relaxing Party shirt</p>
                                </div>
                                <div className="item">
                                    <img src={image3} alt="" className="item-image" />
                                    <p className="item-description p-font">Red stylish shirt</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center'>
                            <button className="shop-button welcome-font fs-5">Shop Now</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
