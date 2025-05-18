import {Routes,Route} from "react-router-dom"
import {Home,Admin,PageNotFound,ProductList,ProductDetails,Contact,ContactIn,ContactEu,ContactUs} from "../pages";


export const AllRoutes = () => {
    const user=true;
  return (
    <>

      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="products" element={<ProductList/>}/> 
        <Route path="products/:id" element={<ProductDetails/>}/> 
        <Route path="contact" element={<Contact/>}>
          <Route path="in" element={<ContactIn/>} />
          <Route path="eu" element={<ContactEu/>} />
          <Route path="us" element={<ContactUs/>} />
        </Route>
      
        <Route path="admin" element={user?<Admin/>:<PageNotFound/>}/>
        <Route path="*" element={<PageNotFound/>}/> 
      </Routes>
    
    </>
  )
}
