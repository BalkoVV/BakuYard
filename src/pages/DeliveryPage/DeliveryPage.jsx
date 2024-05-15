// DeliveryPage.jsx

import React from "react";
import Basket from "components/Basket/Basket";
import { CartProvider } from "components/CartProvider/CartProvider";

export const DeliveryPage = () => {
  
   return (
       <div className={StyleSheet.deliveryPage}>
         <CartProvider>
           <Basket/>
         </CartProvider>
       </div>
      )
}


export default DeliveryPage;