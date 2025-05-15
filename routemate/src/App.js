import './App.css';
import {Routes,Route} from "react-router-dom"
import { ProductList } from './components/ProductList';
import { ProductDetails } from './components/ProductDetails';
import {Home} from "./components/Home";
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="App">

      <header>HEADER</header>
      <Routes>

        <Route path="/" element={<Home/>}> </Route>
        <Route path="products" element={<ProductList/>}> </Route>
        <Route path="products/1" element={<ProductDetails/>}> </Route>
        <Route path="contact" element={<Contact/>}> </Route>

      </Routes>
      <footer>FOOTER</footer>
      
    </div>
  );
}
export default App;
