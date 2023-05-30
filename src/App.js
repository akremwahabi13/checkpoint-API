import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import ListUser from "./Components/ListUser/ListUser";

import imageInSrc from "./imageInSrc.png";
function App() {
  return (
    <div className="App">
      <h1>Users Information</h1>
      <ListUser />
      <h1>Created By Akrem Wahabi</h1>
    </div>
  );
}

export default App;
