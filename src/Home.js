import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2021/Marketing/EvergreenQ1/Gateway/US-EN_AMF_EvergreenQ1_DMUX-3799_JZ_OnS_GW_Hero_D_1500x600_1X_CV4._CB411870756_.jpg'
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI &amp; VGA Port), Black"
            price={93.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81QpkIctqPL._AC_UL200_SR200,200_.jpg"
          />
          <Product
            id="49538094"
            title="Apple Watch Series 3 (GPS, 38mm) - Silver Aluminum Case with White Sport Band"
            price={169.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71vCuRn4CkL._AC_UL200_SR200,200_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Apple Magic Keyboard for iPad Air (4th Generation) and iPad Pro 11-inch (2nd Generation) - US English"
            price={199.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71fYV0JMoYL._AC_UL200_SR200,200_.jpg"
          />
          <Product
            id="23445930"
            title="Numark NV II | Four Deck DJ Controller for Serato DJ (Included) With Dual High Resolution Displays, 16 Performance Pads and 5-Inch Metal Platters"
            price={698.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/817ArAO-CSL._AC_UY654_FMwebp_QL65_.jpg"
          />
          <Product
            id="3254354345"
            title="2020 Playstation 4 PS4 Slim 1TB Console Holiday Bundle with Hubxcel Charging Dock Bundle"
            price={499.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/416qzo-9sJL._AC_UY218_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="6732740"
            title="Ultra Game Men's Active Basic Jogger Fleece Pants"
            price={19.76}
            rating={5}
            image="https://m.media-amazon.com/images/I/81mGpGgI6PL._AC_UL800_FMwebp_QL65_.jpg"
          />
          <Product
            id="22336820"
            title="MSI GL65 Leopard 10SFK-062 15.6&quot; FHD 144Hz 3ms Thin Bezel Gaming Laptop Intel Core i7-10750H RTX2070 16GB 512GB NVMe SSD…"
            price={1308.42}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81ftUqDdYFL._AC_UL200_SR200,200_.jpg"
          />
          <Product
            id="3243243256"
            title="A Promised Land"
            price={23.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg"
          />
        </div>


        <div className="home__row">
          <Product
            id="90829332"
            title="SAMSUNG 65-inch Class QLED Q70T Series - 4K UHD Dual LED Quantum HDR Smart TV with Alexa Built-in (QN65Q70TAFXZA, 2020 Model)
            "
            price={1197.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41017CbN4PL.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
