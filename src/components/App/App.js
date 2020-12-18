import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Layout from "../Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
