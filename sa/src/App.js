import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import BusinessView from "./components/business-view.component";
import BusinessAdd from "./components/business-add.component";
import BusinessEdit from "./components/business-edit.component";
import BusinessLogin from "./components/business-login.component";
import Home from "./components/business-home.component";
import ImageUpload from "./components/image-upload.component";


function App() {
  return (
    <Router>
    <div className="container-fluid">
      <Route path="/view/:pageId" component= {BusinessView} />
      <Route path="/add" component= {BusinessAdd} />
      <Route path="/edit/:pageId" component= {BusinessEdit} />
      <Route path="/login" component= {BusinessLogin} />
      <Route path="/home" component= {Home} />
      <Route path="/image" component= {ImageUpload} />
    </div>
    </Router>
  );
}

export default App;
