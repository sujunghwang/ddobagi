import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Explore from "./pages/Explore"
import Landing from "./pages/Landing"
import Learning from "./pages/Learning"
import ParentPage from './pages/ParentPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Explore />}>
            <Route path = "/" element={<Landing />}/>
            {/* <Route path = "/categorylist" element={<Landing />}/>
            <Route path = "/culturelist" element={<Landing />}/>
            <Route path = "/cultureitem/:id" element={<Landing />}/>
            <Route path = "/mypage" element={<Landing />}/>
            <Route path = "/parentpage" element={<ParentPage />}>
              <Route path = "/parentpage" element={<Landing />}/>
              <Route path = "/parentpage/map" element={<Landing />}/>
              <Route path = "/parentpage/news" element={<Landing />}/>
              <Route path = "/parentpage/news/:categoryid" element={<Landing />}/>
            </Route> */}
          </Route>
          <Route path = "/learning" element={<Learning/>}>
            {/* <Route path = "/learning/conversation/:id" element={< />}/> */}
            {/* <Route path = "/learning/quiz/:id" element={< />}/> */}
          </Route>
          {/* <Route path = "/*" element={< />}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
