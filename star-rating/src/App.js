import "./App.css";
import StarRating from "./components/StarRating";

function App() {
  return (
    <div className="w-full">
      <StarRating maxRating={10} color="yellow" />
      <StarRating
        maxRating={5}
        color="red"
        messages={["Bad", "Okay", "Good", "Excellent", "Outstanding"]}
      />
      <StarRating maxRating={5} color="orangered" />
    </div>
  );
}

export default App;
