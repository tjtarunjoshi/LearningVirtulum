import "./components/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import HeaderTop from "./components/header";
import TeachersClass from "./components/teacher/teachersClass";
import Footer from "./components/footer";
import Profile from "./components/profilepage";
import StudentsPage from "./components/student/studentsClass";
import StudentLogin from "./components/Auth/StudentLogin";
import StudentRegister from "./components/Auth/StudentRegister";

export default function App() {
  return (
    <div className="App">
      <Router>
        <HeaderTop />
        <Switch>
          <Route exact path="/app" component={App} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/slogin" component={StudentLogin} />
          <Route exact path="/sregister" component={StudentRegister} />
          <Route exact path="/" component={TeachersClass} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/student" component={StudentsPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
