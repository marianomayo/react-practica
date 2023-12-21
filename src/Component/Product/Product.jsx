import React from "react";
import Card from "../Card/Card"; // Asegúrate de ajustar la ruta de importación según la ubicación real del componente Card
import '../Product/Product.css';

const Product = ({ src }) => {
  return (
    <Card className="product-container" orientation="vertical" size="grande">
      <h1>Lorem Ipsum</h1>
      <img className="product-img" src={src || "https://picsum.photos/300/300"} alt="Panda" />
      <p className="product-description">
        Este es un ejemplo de un texto explicativo Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dasjkdjasldjsajdaskl
      </p>
      <button className="product-button">Comprar</button>
    </Card>
  );
}

export default Product;
