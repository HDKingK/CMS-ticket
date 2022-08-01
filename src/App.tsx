import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from "./Components/Layouts/Main";
import Home from "./Pages/Homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main></Main>}>
        <Route index element={<Home></Home>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
