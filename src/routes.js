
import { BrowserRouter as Router,
    Route 
    } from "react-router-dom";

import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';

 export default function MainRoutes() {
     return (
         <Router>
             <Route path="/" element={<Home />} />
             <Route path="/product" element={<Product />} />
             <Route path="/cart" element={<Cart />} />
         </Router>
     );
 }