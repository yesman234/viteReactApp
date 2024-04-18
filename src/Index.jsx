import './App.css'

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Header(){
   const style = {};
  return <header className='header'>
    <h1 style={style}>
    Fast React Pizza Co.</h1>
    </header>
}
function Menu(){
  const pizzas = pizzaData;
  const numOfpizzas = pizzas.length;
  return (
  <main className='menu'>
    <h2>Our Menu</h2>
    {numOfpizzas > 0 && (
    <ul className='pizzas'>
    {pizzas.map((pizza)=>(
    <Pizza pizzaObj={pizza} key={pizza.name}/>
    ))}
    </ul>
)}
  </main>)

}

function Pizza({pizzaObj}){
  console.log(pizzaObj)
  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
     <img src={pizzaObj.photoName} alt={pizzaObj.name} />
  <div>
    <h3>{pizzaObj.name}</h3>
      <h4>{pizzaObj.ingredients}</h4>
      {/* <strong><p>{pizzaObj.price + 3}</p></strong> */}
      <span>{pizzaObj.soldOut ?<center><caption>sold out</caption></center>:
      pizzaObj.price}</span>
      <strong><button type="button">Checkout/paypal</button></strong>
    </div>
    </li>
  )
}


function Footer(){
  const hour = new Date().getHours();
  const openHour =12;
  const closeHour =22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen)
  
  // if(!isOpen){
  // return(<h2>Closed</h2>)
  // }
  return (
  <footer className='footer'>
    { isOpen ? (
      <Order closeHour={closeHour} openHour={openHour}/>
    ):(
      <p>
        We're happy to serve between {openHour}:00 a.m. & {closeHour}:00 p.m. daily. 
      </p>
    )}
  </footer>
  )
}

function Order({closeHour, openHour}){
    console.log({openHour})
 return (
    <div className='order'>
      <p>
        We're open from {openHour} & We close @ {closeHour}, last orders for takeout must be made by {closeHour - 1} p.m.
      </p>
      <button className='btn'>order</button>
    </div>
  )
}

   
function App() {
  return (
    <>
      <div className="container">
      <Header/>
      <Menu/>
      <Footer/>
       </div>
    </>
  )
}

export default App
