import { useNavigate } from "react-router-dom"
export const ProductList = () => {
  const navigate = useNavigate();
  const handleSubmit = () =>{
    console.log("---");
    navigate("/");

  }

  return (
    <>
    <div className="component">ProductList</div>
    <button onClick={handleSubmit}></button>
    </>
  )
}
