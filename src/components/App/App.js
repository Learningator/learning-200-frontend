import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import ComingSoon from "../../pages/ComingSoon/ComingSoon";
import Layout from "../Layout/Layout";
import "./App.scss";
import InputPage from "../../pages/InputPage/InputPage";
import LearningPath from "../../pages/LearningPath/LearningPath";
import LayoutExam from "../../pages/LayoutExam/LayoutExam";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <main className="Main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/soon" component={ComingSoon} />
            <Route exact path="/input" component={InputPage} />
            <Route exact path="/exam" component={LayoutExam} />
            <Route exact path="/lp" component={LearningPath} />
          </Switch>
        </main>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
