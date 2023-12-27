import React,{useState} from 'react'
import Card from './assets/Components/Card'
import Header from './assets/Components/Header'
import Navbar from './assets/Components/Navbar'
import Footer from './assets/Components/Footer'


function App() {
  let data = [
{
  Product:"Fancy product",
  Price:"40.00-$80.00"
},
{
  Product:"special Item",
  Price:"40.00-$80.00"
},
{
  Product:"Sale Item",
  Price:"40.00-$80.00"
},
{
  Product:"Popular item",
  Price:"40.00"
},
{
  Product:"Sale Item",
  Price:"40.00-$80.00"
},
{
  Product:"Fancy product",
  Price:"40.00-$80.00"
},
{
  Product:"Special Item",
  Price:"40.00-$80.00"
},
{
  Product:"Popular Item",
  Price:"40.00-$80.00"
},
 ]
  let [cart, setCart] = useState(0)
  return <>
 <Navbar cart={cart} setCart={setCart}/>
 <Header cart={cart} setCart={setCart}/>
 
 <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                   {
                    data.map((ele,i)=>{
                      return <Card data={ele} cart={cart} setCart={setCart} key={i}/>
                    })
                   }
             </div>
            </div>
        </section>
        <Footer/> 

  </>
 
}

export default App