import { useCallback, useEffect, useState } from "react"
import "./ProductList.css";
export const ProductList = () => {
  const [products, setProducts]=useState([]);
  const [url, setUrl]=useState("http://localhost:8000/products");

  console.log(products);
 
  const fetchProducts= useCallback( async () =>{
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data);
  },[url]) 
 
  useEffect(() => {
    fetchProducts();
  },[fetchProducts]
);
return (
      <section>
        <div className="filter">
          <button onClick={()=>setUrl("http://localhost:8000/products")}>All</button>
          <button onClick={()=>setUrl("http://localhost:8000/products?in_stock=true")}>In Stock Only</button>
        </div>
          {products.map((product)=>(
            <div className="card" key={product.id}>
              <p className="id">{product.id}</p>
              <p className="name">{product.name}</p>
              <p>
                <span className="info">
                  ${product.price}
                  </span>
                  <span className={product.in_stock? "instock":"unavailable"}>
                    {product.in_stock? "In stock":"Out of Stock"}
                  </span>
              </p>
            </div>
          ))}
      </section>    
  )
}
