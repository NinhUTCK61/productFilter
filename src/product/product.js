import { useState } from "react"
import clsx from 'clsx'
import style from './Product.module.scss'
import {product} from '../Data/productData'
function Product()
{
    const [item, setItem] = useState('')
    return(
        <div className = {style.container}>
            <h1 className = {clsx(style.heading)}>Live Product</h1>
            <input className = {style.containerSearch}
            onChange={(e)=> setItem(e.target.value)} 
            placeholder = '...Tim san pham'
            />
            <div className={style.boxItem}>
              <ul>
              {
                  product.map((product, index)=>{
                  if(product.nameProduct.toLowerCase().indexOf(item.trim().toLowerCase(),0) !== -1)
                  {
                      return(
                      <li key={index} className='containerItem'>
                          <img width={60} src={product.img}/>
                          <span>{product.nameProduct}</span>
                      </li>
                      )
                  }
                  })
              }
              </ul>
            </div>
        </div>
    )
}

export default Product;