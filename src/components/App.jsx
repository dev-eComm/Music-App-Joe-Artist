import React from "react";
import Card from "./Card";
import Banner from "./Banner";
import DanceMusic from "./Music";
import products from "../products";

function createCard(product) {
  return (
    <Card
      key={product.id}
      name={product.name}
      img={product.imgURL}
      title={product.title}
      price={product.price}
    />
  );
}

function App() {
  return (
    <div>
      <Banner img="https://images.pexels.com/photos/40815/youth-active-jump-happy-40815.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      <h1 className="heading">Music</h1>
      <DanceMusic />
      <h1 className="heading">Merch</h1>
      {products.map(createCard)}
    </div>
  );
}

export default App;
