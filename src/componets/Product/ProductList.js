import React from "react";
import { ProductCard } from "./ProductCard";
import dauTay from "../../assets/dau_tay.jpg";
import taoHong from "../../assets/tao_hong.jpg";
import camVang from "../../assets/cam_vang.jpg";

const products = [
  { id: 1, name: "Dâu tây", price: 25000, image: dauTay },
  { id: 2, name: "Táo hồng", price: 30000, image: taoHong },
  { id: 3, name: "Cam vàng", price: 20000, image: camVang },
];

export const ProductList = () => {
  return (
    <div style={{ display: "grid", padding: "40px", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", padding: "40px" }}>
      {/* <div style={{ display: "flex",flexWrap:"wrap", gap: "20px" }}> </div>}{/*flexWrap: "wrap"*/}
      {products.map((p) => (
        <ProductCard
          key={p.id}
          id={p.id}
          name={p.name}
          price={p.price}
          image={p.image}
        />
      ))}
    </div>
  );
};
