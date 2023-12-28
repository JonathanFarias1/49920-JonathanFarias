import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ItemListContainer from "./components/ItemListConteiner/ItemListConteiner";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <NavBar />
          <Switch>
            <Route path="/" exact component={ItemListContainer} />
            <Route path="/category/:id" component={ItemListContainer} />
            <Route path="/item/:id" component={ItemDetailContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
