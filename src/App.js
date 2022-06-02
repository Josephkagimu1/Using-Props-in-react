import './App.css';
import Product from './Product/Product';

function App() {
  return (
    <div className="App">

      <h1 style={{color:'blue'}}><b>Goods with there prices</b></h1>

      <Product 
        name ="T-shirt"
        description ="Best modern shirt"
        price ="$50"
      />
      <hr/>

      <Product 
        name ="iphone"
        description ="Best phone"
        price ="$1200"
      />
      <hr/>

      <Product 
        name ="Macbook Pro"
        description ="Your favourite computer"
        price ="$2500"
      />
      <hr/>
    </div>
  );
}

export default App;
