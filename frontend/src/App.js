import data from "./data";
import Product from "./components/Product"

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            MINIMARKETred
          </a>
        </div>
        <div>
          <a href="/cart">cart</a>
          <a href="/signin">sign in</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {data.products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </main>
      <footer className="row center">all rights reserved</footer>
    </div>
  );
}

export default App;
