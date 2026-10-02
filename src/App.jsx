import Header from "./Header";
import Product from "./Product";

function App() {
  return (
    <div>
      <Header />

      <h2>Products</h2>

      <Product name="Laptop" price="50,000" />
      <Product name="Phone" price="25,000" />
      <Product name="Mouse" price="1,500" />
    </div>
  );
}

export default App;