import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Data from './data/data.json';
import Profile from './Profile';
import {BrowserRouter, Route, Link} from 'react-router-dom';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



function App(){
  var info=Data.profiles;
  return(
    <section>
      
       <BrowserRouter>
       <header className="header">
      {info.map((k,l)=>(
        <Link to={{pathname:"/profile",data:{id:l}}} key={l}> {"Profile"+(l+1)} </Link>
      ))}
    
    </header> <br/> <br/> 
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/react" component={Home} />

       
      </BrowserRouter>
    
     
      </section>
  )
}

let Home=()=>{
  var info=Data.profiles;
return(
<section className="parent">
{info.map((i,index)=>(
        <div className="card" key={index}>
          <div className="card-top">
          <h2> {i.basicInformation.name} </h2> <br />
      <h5> <em> {i.basicInformation.role}</em></h5>
      </div>

      <div className="card-bottom">
        <a href={"mailto:"+i.basicInformation.email}> {i.basicInformation.email}  </a> <br />

        <a href={"tel:"+i.basicInformation.mobile}> {i.basicInformation.mobile}</a> <br />
        <Link to={{pathname:"/profile",data:{id:index}}}> View Resume </Link>
      </div>
        </div>
      ))}
</section>
)
}


export default App;
