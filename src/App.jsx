import React from 'react';
import Card from './Component/Card/Card';
import Product from './Component/Product/Product';

function App() {
  return (
    <>
      <h1>Hola mundo ! </h1>   
      <Card className="estilo-card" orientation="vertical" size="grande">
        <Product src="https://picsum.photos/300/300" />
      </Card>
    </>
  );
}

export default App;
