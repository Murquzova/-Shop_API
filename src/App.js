import "./App.css";
import React, { useState, useEffect } from "react";
import Product from "./components/Product";
import Header from "./components/Header";
function App() {
  const [products, setProducts] = useState([]);
  const [money, setMoney] = useState([1000]);
  const [korzina, setKorzina] = useState([]);
  const [total, setTotal] = useState(0);

  // console.log(products);
  useEffect(() => {
    const getDataFromApi = async () => {
      let data = await fetch("https://fakestoreapi.com/products").then((a) =>
        a.json()
      );
      setProducts(data);
    };
    getDataFromApi();
  }, []);

  const addKorzina = (id) => {
    let find = korzina.find((item) => item.id === id);
    if (find) {
      find.count += 1;
      setKorzina([...korzina.filter((a) => a.id !== id), find]);
    } else {
      setKorzina([...korzina, { id: id, count: 1 }]);
    }
  };
  useEffect(() => {
    setTotal(
      korzina.reduce(
        (acc, item) =>
          acc +
          Math.floor(products.find((t) => t.id === item.id).price) * item.count,
        0
      )
    );
  }, [korzina]);
  // console.log(korzina);
  return (
    <div className="app">
      <Header money={money - total} />
      <br />
      <div className="products">
        {products.map((item) => (
          <Product
            olan={korzina.filter((a) => a.id === item.id)}
            key={item.id}
            onBuy={() => addKorzina(item.id)}
            id={item.id}
            category={item.category}
            price={item.price}
            image={item.image}
            name={item.title}
            total={total}
            money={money}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
