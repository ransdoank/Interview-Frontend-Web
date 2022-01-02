import Routes from "./router";
import { Provider } from "react-redux";
import store from "./redux/store";
import React from "react";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <div className="App" style={{height:'100%'}}>
      <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
