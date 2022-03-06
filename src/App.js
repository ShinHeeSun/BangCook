import React from "react";
import Header from "./Components/Header"
import Coth from "./Components/Coth"
import Coth1 from "./Components/Coth1"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
function App() {

 
    return(
      
         <Router>
           <h1></h1>
      <div className="App">
      <Header />
  <div className="zkxprhfl">
      <ul className="KategorieMenu">
         <li><Link to="/coth">채소</Link></li> 

         <li><Link to="/rhkdlf">과일</Link></li> 
        
         <li><Link to="/rusrhkfb">견과류</Link></li> 
         <li><Link to="/rPwjfrhkdlf">계절 과일</Link></li> 
         <li><Link to="/dufeorhkdlf">열대 과일</Link></li> 
       </ul>
      
       </div>
       <Route path="/coth"><Coth /></Route>
       <Route path="/rhkdlf"><Coth1 /></Route>
      </div>
      </Router>
     
  
 
    );
}
export default App;