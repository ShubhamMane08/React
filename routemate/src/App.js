import './App.css';
import {Routes,Route} from "react-router-dom"
import { ProductList } from './components/ProductList';
import { ProductDetails } from './components/ProductDetails';
import {Home} from "./components/Home";

function App() {
  return (
  
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="products" element={<ProductList/>}> </Route>
        <Route path="products/1" element={<ProductDetails/>}> </Route>


      </Routes>
      
    </div>
  );
}
export default App;
