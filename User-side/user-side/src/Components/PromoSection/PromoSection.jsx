import image1 from '../../assets/images/beautiful-young-woman-choosing-what-wear-looking-front.jpg';
import image2 from '../../assets/images/cute-young-woman-looking-her-side-white-wall.jpg';
import image3 from '../../assets/images/Fuchsia-2-570x760.jpg'

function PromoSection() {
    return (
        <>
            <div className='promo-section-color py-5'>
                <div className="promo-section  container col-12 d-flex">

                    <div className="promo-text col-6 py-5">

                        <p className='p-font' style={{fontSize: "30px", color: "black", marginTop: "20px"}}>
                            The latest trends in fashion and elevate your style with our exclusive collection. Shop now to find your perfect look!
                        </p>
                        <button className="shop-button p-font fs-5">Shop Collection</button>
                    </div>
                    <div className="promo-images col-6 px-5">
                        <div className='col-12 d-flex '>

                            <img src={image1} alt="" className="promo-image main-image col-4 w-12" style={{borderRadius: "20px"}}/>
                            <img src={image2} alt="" className="promo-image main-image col-4 w-12" style={{borderRadius: "20px"}}/>
                            <img src={image3} alt="" className="promo-image main-image col-4 w-12" style={{borderRadius: "20px"}} />

                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default PromoSection;
