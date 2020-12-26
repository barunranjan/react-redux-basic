import { Provider } from "react-redux";
import "./App.css";
import BurgerContainer from "./components/BurgerContainer";
import CakeContainer from "./components/CakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import PastriesContainer from "./components/PastriesContainer";
import User from "./components/User";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer /> */}
        {/* <HookCakeContainer /> */}
        {/* <IceCreamContainer /> */}
        {/* <PastriesContainer /> */}
        {/* <BurgerContainer /> */}
        <User />
      </div>
    </Provider>
  );
}

export default App;
