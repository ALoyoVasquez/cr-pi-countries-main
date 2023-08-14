import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Home, About, Landing, Form, Detail, ErrorView } from "./views";
import NavBar from "./components/NavBar/NavBar";
import { React } from "react";

function Ubicacion(props) {
  const location = useLocation();

  if (location.pathname !== "/") 
  return <NavBar />;
  //  <Nav onSearch={props.onSearch} logOut={props.logOut} />;
}



function App() {
  return (
    <div className="App">
      <Ubicacion />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/activities" element={<Form />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:idCountry" element={<Detail />} />
        <Route path="/error" element={<ErrorView />} />
        <Route path="*" element={<Navigate to="/error" replace />} />
      </Routes>
    </div>
  );
}

export default App;


