import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import Signup from "./components/pages/Signup";
import Recipes from "./components/pages/Recipes";
import Footer from "./components/Footer";
import Video from "./components/pages/Video";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/products" exact component={Products} />
          <Route path="/sign-up" exact component={Signup} />
          <Route path="/recipes" exact component={Recipes} />
          <Route path="/video/trailer" exact component={Video} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
