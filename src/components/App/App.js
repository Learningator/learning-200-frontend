import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import ComingSoon from "../../pages/ComingSoon/ComingSoon";
import Layout from "../Layout/Layout";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <main className="Main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/soon" component={ComingSoon} />
          </Switch>
        </main>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
