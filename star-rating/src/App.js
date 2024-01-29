import logo from "./logo.svg";
import "./App.css";
import StarRating from "./components/StarRating";

function App() {
  return (
    <div className="w-full">
      <StarRating maxRating={10} color="yellow" />
      <StarRating maxRating={5} color="red" />
    </div>
  );
}

export default App;
