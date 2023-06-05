import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  return (
    <div>
        <ShoppingCartIcon sx={{color: "red"}}/>
        <p>5</p>
    </div>
  )
}

export default CartWidget