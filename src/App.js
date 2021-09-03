import Auth from "./pages/auth/Auth";
import Home from "./pages/home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
