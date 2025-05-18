import { useParams } from "react-router-dom"
export const ProductDetails = () => {
  const params = useParams();
  
  return (
    <main>
      <div className="component">ProductDetails - {params.id}</div>
    </main>
    
  )
}
