import React from 'react';
import Header from './Components/Header';
import Coth from './Components/Coth';
import Coth1 from './Components/Coth1';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <div className="zkxprhfl">
          <ul className="KategorieMenu">
            <li>
              <Link to="/coth">채소</Link>
            </li>

            <li>
              <Link to="/rhkdlf">과일</Link>
            </li>

            <li>
              <Link to="/rusrhkfb">견과류</Link>
            </li>
            <li>
              <Link to="/rPwjfrhkdlf">계절 과일</Link>
            </li>
            <li>
              <Link to="/dufeorhkdlf">열대 과일</Link>
            </li>
            <li>
              <Link to="/dufeorhkdlf">과자</Link>
            </li>
            <li>
              <Link to="/dufeorhkdlf">아이스크림</Link>
            </li>
            <li>
              <Link to="/dufeorhkdlf">음료수</Link>
            </li>
            <li>
              <Link to="/dufeorhkdlf">소주</Link>
            </li>
            <li>
              <Link to="/dufeorhkdlf">멕주</Link>
            </li>
            <li>
              <Link to="/dufeorhkdlf">막걸리</Link>
            </li>
            <li>
              <Link to="/dufeorhkdlf">사케</Link>
            </li>
          </ul>
        </div>
        <Route path="/coth">
          <Coth />
        </Route>
        <Route path="/rhkdlf">
          <Coth1 />
        </Route>
      </div>
    </Router>
  );
}
export default App;
