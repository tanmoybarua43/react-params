import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <div className="app">
        <h1>TV APPS</h1>
        <div className="app-icons">
          <Link to="/app/netflix"><img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg
" alt="Netflix" /></Link>
          <Link to="/app/hbomax"><img src="https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg
" alt="HBO Max" /></Link>
          <Link to="/app/hulu"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg" alt="Hulu" /></Link>
          <Link to="/app/primevideo"><img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png" alt="Prime Video" /></Link>
        </div>

        <Switch>
          <Route path="/app/:id" children={<Child />} />
        </Switch>
      </div>
    </Router>
  );
}

function Child() {
  // Use useParams to get the app id from the URL
  let { id } = useParams();

  return (
    <div>
      <h3>You Selected: <span>{id}</span></h3>
    </div>
  );
}
