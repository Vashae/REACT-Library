import React from 'react'
import Nav from './components/nav'
import Landing from './components/Landing'
import Highlights from './components/Highlights';
import Featured from './components/Featured';
import Discounted from './components/Discounted';
import Explore from './components/Explore';
import Footer from './components/footer';


function App (){
  return (
    
    <div className="App">
      <Nav/>
      <Landing/>
      <Highlights/>
      <Featured />
      <Discounted />
      <Explore />
      <Footer />
    </div>
  );
}
export default App