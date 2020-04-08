import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import BusinessView from "./components/business-view.component";
import BusinessAdd from "./components/business-add.component";
import BusinessEdit from "./components/business-edit.component";
import BusinessLogin from "./components/business-login.component";


function App() {
  return (
    <Router>
    <div className="container">
      <Route path="/view/:pageId" component= {BusinessView} />
      <Route path="/add" component= {BusinessAdd} />
      <Route path="/edit/:pageId" component= {BusinessEdit} />
      <Route path="/login" component= {BusinessLogin} />
    </div>
    </Router>
  );
}

export default App;
