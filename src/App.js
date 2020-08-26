import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import PostsScreen from "./screens/PostsScreen";
import UsersScreen from "./screens/UsersScreen";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header/Header";
import { store } from "./store/store";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/posts" component={PostsScreen} />
          <Route path="/users" component={UsersScreen} />
          <Route path="/" component={HomeScreen} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
export default ReduxApp;
