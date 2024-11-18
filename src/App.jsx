import React, {useEffect, useState} from 'react'
import Nav from './components/nav'
import Footer from './components/footer';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Books from './pages/Books.jsx';
import {books} from './data';
import BookInfo from './pages/BookInfo.jsx';
import Cart from './pages/Cart.jsx';






function App (){
  const [cart, setCart] = useState([]);
  function addToCart (book){
    setCart ([...cart, book])
  }
  useEffect(() => {
    console.log(cart);
  }, [cart])
  
  return (
    <Router>
    <div className="App">
      <Nav/>
  <Routes>
     <Route path="/" exact element= {<Home />} />
    <Route path ="/books" exact element={<Books books={books}/>}/>
    <Route path ="/books/:id" exact element={<BookInfo books={books} addToCart={addToCart}/>}/>
    <Route path ="/cart" exact element={<Cart books={books} cart={cart}/>}/>
    </Routes>
     <Footer />
     </div>
    </Router>
   
  );
}
export default App