import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import ComingSoon from "../../pages/ComingSoon/ComingSoon";
import Layout from "../Layout/Layout";
import "./App.scss";
import InputPage from "../../pages/InputPage/InputPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <main className="Main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/soon" component={ComingSoon} />
            <Route exact path="/input" component={InputPage} />
          </Switch>
        </main>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
