import './App.css';
import PostsList from "./pages/postsList";
import { Switch, Route, Redirect } from "react-router-dom";
import PostPage from "./pages/postPage";

function App() {
  return (
      <>
          <div className="App">
              <Switch>
                  <Route path="/posts/:id">
                      <PostPage />
                  </Route>
                  <Route path="/posts">
                      <PostsList />
                  </Route>
                  <Route path="/" re>
                      <Redirect to="/posts" />
                  </Route>
              </Switch>
          </div>
      </>
  );
}

export default App;
