import logo from "./logo.svg";
import "./App.css";
import AccordionList from "./components/AccordionList";

function App() {
  return (
    <div className="w-full">
      <h1 className="text-3xl text-center py-8">Accordion Component</h1>
      <AccordionList />
    </div>
  );
}

export default App;
