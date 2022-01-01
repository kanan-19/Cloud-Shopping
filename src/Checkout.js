import React from "react";
import Header from "./Header";
import { useStateValue } from "./StateProvider";
import './Checkout.css'
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <Header />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Shopping Basket is Empty</h2>
                        <p>You have no items in your basket. To buy one or more items, click 'Add to Basket' next to the item....</p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title">Shopping Basket</h2>
                        {basket.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                            />
                        ))}
                    </div>
                )}</div>
            {basket.length > 0 && (
                <div className="checkout__right">

                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout;