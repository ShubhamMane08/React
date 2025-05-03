import { useEffect, useState } from "react"
import "./ProductList.css";
export const ProductList = () => {
  const [products, setProducts]=useState([]);

  console.log(products);
 
  useEffect(() => {

    fetch("http://localhost:8000/products")
    .then(response => response.json())
    .then(data => setProducts(data)); 
  },[]
);
return (
      <section>
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
