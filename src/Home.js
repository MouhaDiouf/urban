import React from 'react';
import './Home.css';
import Product from './Product';
import lean from './lean_startup.jpg';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="15567398"
            title="The lean startup"
            price={29.99}
            image={lean}
            rating={5}
          />
          <Product
            id="9065511235"
            title="Kenwood Mix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            rating={4}
            image="https://m.media-amazon.com/images/I/71kj5nomj0L._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="33215609"
            title="Samsung LC35R 49' Curved LED Gaming Monitor "
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/91mL-OSb40L._AC_SL1500_.jpg"
          />
          <Product
            id="332155056"
            title="Echo Studio (Charcoal) with Amazon Smart Plug"
            image="https://images-na.ssl-images-amazon.com/images/I/612TnHGeiQL._AC_SL1000_.jpg"
            rating={5}
          />
          <Product
            id="33255690"
            title="Apple iPad (10.2-inch, Wi-Fi, 128GB) - Space Gray (Latest Model)"
            image="https://images-na.ssl-images-amazon.com/images/I/6162WMQWhVL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">{/* Product */}</div>
      </div>
    </div>
  );
}

export default Home;
