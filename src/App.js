import { Link } from 'react-router-dom';
import Navbar from "./Navbar"
import Home from "./Home"
function App() {
  const title = "hello";
  const like = 50;   // does not matter data type bcoz react comvert everything to string before rendering
  const person = { name: 'yoshi', age: 30 };
  // boolean and object cant be rendered
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
