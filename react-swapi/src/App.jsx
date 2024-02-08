import { Route, Routes } from "react-router-dom"
import './App.css'
import NavBar from "./components/NavBar/NavBar"
import StarshipList from "./components/Starship/StarshipList"
import StarshipDetails from "./components/Starship/StarshipDetails"


const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<StarshipList />} />

        <Route
          path="/starship/:starshipId/"
          element={<StarshipDetails />}
        />
      </Routes>

    </>
  );
}

export default App;


