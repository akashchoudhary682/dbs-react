import React from 'react'
import Cart from './component/Cart'
import image from'./assets/image/cold drink.jpg'
import image2 from'./assets/image/kite.webp'
import image3 from'./assets/image/ice cream.jpg'
import image4 from'./assets/image/pen.jpg'



function App() {
  return (
    <div className='flex justify-center gap-2 items-center h-screen  from-purple-500 to-pink-500'>
      <Cart image={image}
        name="Cold Drink"
        price="80" 
        quantity="1"
      />
      <Cart image={image2}
        name="kite"
        price="20" 
        quantity="1"
      />
      <Cart image={image3}
        name="ice cream.jpg"
        price="180" 
        quantity="1"
      />
<Cart image={image4}
        name="pen"
        price="20" 
        quantity="1"
      />


    </div>
  )
}

export default App
