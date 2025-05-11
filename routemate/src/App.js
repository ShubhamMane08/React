import './App.css';
import {Routes,Route} from "react-router-dom"
import { ProductList } from './components/ProductList';
import { ProductDetails } from './components/ProductDetails';
function App() {
  return (
  
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}>
        <Route path="products" element={<ProductList/>}>
        <Route path="products/1" element={<ProductDetails/>}>

        </Route>

      </Routes>
      
    </div>
  );
}
export default App;
