//IMPORTING YOUR DEPENDENCIES
//IMPORTING YOUR COMPONENTS
import Hello from "./components/Hello"
import Form from "./components/Form"
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <fieldset>
      <legend>App.jsx</legend>
      <PersonCard firstName="Randall" lastName="Bustamante" age={43} hair= "Brown" />
      <PersonCard firstName="Steve" lastName="ThePirate" age={52} hair= "Brown" />
      <PersonCard firstName="Alotta" lastName="Fargeenuh" age={25} hair= "Brown" />
      <PersonCard firstName="Ivana" lastName="Humpalot" age={27} hair= "Blond" />

    </fieldset>
  );
}

export default App;
