import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/login";
import AppRouter from "./config/router/approuter";
import { Provider } from "react-redux";
import store from "./config/redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
