import React from "react";
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Videos from './Videos';
import { BrowserRouter as Router , Switch, Route} from "react-router-dom";
import SearchPage from './SearchPage';



function App() {
  return (
    <div className="app">
     
      <Router>
        <Header />

      <Switch>
        <Route path="/search/:searchTerm">
        <div className="app__page">
          <Sidebar />
          <SearchPage />
        </div>
        </Route>

        <Route path="/" exact component={App} > 
        
        <div className="app__page">
          <Sidebar />
          <Videos />
        </div>
        </Route>
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
