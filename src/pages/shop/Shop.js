import React, { useContext, useEffect, useState } from 'react'
import get from 'axios'
import './shop.css'
import { ShopContext } from './Shop-context';
import App from '../../App';


export function Shop(props) {
//   const [productData,setProductData]=useState([]);
  const {addItemToCart,cartItems,itemAdded}=useContext(ShopContext);
  

    // useEffect(function(){
    //     get("https://fakestoreapi.com/products")
    //     .then((response)=>setProductData(response.data))
    //     .catch((error)=>console.log(error))
    // })

    
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>Online Shopify</h1>
        </div>
        <div className='productsmain'>
        {
            props.productData.map((i)=>{
                const cartItemAmount= cartItems[i.id]
                return(
                    <div className='products'>
                        <div className='eachproduct'>
                            <img src={i.image}/>
                            <h2>{i.title}</h2>
                            <h4>INR: Rs.{i.price *81} </h4>
                            <button className='addToCart' onClick={()=> addItemToCart(i.id)}>Add to Cart
                            {cartItemAmount > 0 && <>({cartItemAmount})</> }
                            </button>
                            
                        </div>
                    </div>
                )
            })
        }
        </div>
        
        
    </div>
  )
}

export default Shop