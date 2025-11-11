import React from "react";
import { useSelector } from "react-redux";
import { CartList } from "../components/Cart/CartList";
import { CartAction } from "../components/Cart/CartAction";
import { TiShoppingCart } from "react-icons/ti";
import { CheckOutForm } from "../components/CheckOut/CheckOutForm";


export const CartPage = () => {
  const items = useSelector((state) => state.cart.items);

  return (
      <div style={{ padding: "40px" }}>
       
            <h2 style={{ textAlign: "center", marginBottom: "20px", marginTop: "50px" }}> <TiShoppingCart style={{ marginTop: "auto" }} /> Giỏ hàng của bạn</h2>

            {items.length === 0 ? (
              <p style={{ textAlign: "center" }}>Giỏ hàng trống.</p>
            ) : (
              <>
                <CartList />
                <CartAction />
                <CheckOutForm/>
              </>
            )}
           
      </div>
  );
};
