import React from 'react'
import Nav from './components/nav'
import Footer from './components/footer';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Books from './pages/Books.jsx';
import {books} from './data';
import BookInfo from './pages/BookInfo.jsx';
import Cart from './pages/Cart.jsx';






function App (){
  return (
    <Router>
    <div className="App">
      <Nav/>
  <Routes>
     <Route path="/" exact element= {<Home />} />
    <Route path ="/books" exact element={<Books books={books}/>}/>
    <Route path ="/books/:id" exact element={<BookInfo books={books}/>}/>
    <Route path ="/cart" exact element={<Cart books={books}/>}/>
    </Routes>
     <Footer />
     </div>
    </Router>
   
  );
}
export default App