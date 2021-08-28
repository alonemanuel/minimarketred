import data from "./data";
function App() {
  return (
    <div className="grid-container">

      <header className="row">
        <div>

          <a className="brand" href="index.html">MINIMARKETred</a>

        </div>
        <div>
          <a href="cart.html">cart</a>
          <a href="signin.html">sign in</a>

        </div>
      </header>
      <main>
        <div className="row center">
          {data.products.map(
            (product) => (
              <div className="card">
                <a href="product.html">
                  <img className="small" src={product.imageFilename} alt="product" />
                </a>
                <div className="card-body">
                  <a href="product.html">
                    <h2>{product.name}</h2>
                  </a>
                  <div className="price">
                    {product.price + ' NIS'}
                  </div>
                  <h3 className="creator">{product.creator}</h3>
                  <p className="description">{product.description}</p>
                </div>
              </div>
            )
          )}
        </div>

      </main>
      <footer className="row center">
        all rights reserved
      </footer>
    </div>
  );
}

export default App;
