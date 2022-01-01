import React from "react";
import Header from "./Header";
import Product from "./Product"
import "./Home.css"




function Home() {
    return (

        <div className="homepagee">
            <Header />
            <div className="banner">
                <img className="bannerimage" src="https://previews.123rf.com/images/houbacze/houbacze1705/houbacze170500026/78081655-red-easy-vector-illustration-isolated-circle-tag-banner-happy-shopping-this-element-is-well-adapted-.jpg" alt="banner" />
            </div>
            <div className="home__row">
                <Product
                    id="12345678"
                    title=" Kids Dresses Flower Girls Wedding Gown Formal Wear "
                    price={22}
                    image="https://img.joomcdn.net/9acfbdbfead8a088da6c1e6ae0c8e6a582cdfd1e_original.jpeg"
                />
                <Product
                    id="12345679"
                    title="Designer Girls Western Dress for 5-6 years child"
                    price={15}
                    image="https://www.pinkblueindia.com/pub/media/catalog/product/cache/47a3cfe8f4593ee1ee94d41355672b93/d/e/designer-girls-birthday-gowns.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="12345670"
                    title="Baby Girl Princess Gown - Barbie style"
                    price={20}
                    image="https://i.etsystatic.com/7230689/r/il/cd7dcc/2188483074/il_340x270.2188483074_5rrp.jpg"
                />
                <Product
                    id="12345671"
                    title="Vgiee Princess Dress Girls Girl DressFlower DressesKids"
                    price={16}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzpXbMQRRjfjGxcBflYitmOryTeVySVpN30Q&usqp=CAU"
                />
               
            </div>
            <div className="home__row">
            <Product
                    id="12345672"
                    title="Royal Blue Lace Ball Gown Format Pegeant Dresses"
                    price={32}
                    image="https://prod-cdn-02.storenvy.com/product_photos/81621121/file_634c25ef10_original.jpg"
                />
                <Product
                    id="12345673"
                    title="Beautiful Birthday Party Dresses for Girls - Baby Couture India"
                    price={15}
                    image="http://www.babycouture.in/blog/wp-content/uploads/2015/12/pearly_maroon_silk_stylish_back_autumn_dress4.jpg"
                />
            </div>
        </div>

    )
}

export default Home;