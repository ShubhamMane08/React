import {useSearchParams,useLocation} from "react-router-dom";

export const ProductList = () => {
 
  // const [searchParams] = useSearchParams();
  const location = useLocation();
  // console.log(searchParams.length("keyword"));
  console.log(location);



  
  return (
    <main>
      <div className="component">ProductList </div>
    </main>
  )
}
