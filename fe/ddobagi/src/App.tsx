import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import ScrollToTop from "./components/ScrollToTop";
import Explore from "./pages/Explore";
import Landing from "./pages/Landing";
import Learning from "./pages/Learning";
import CategoryList from "./pages/CategoryList";
import CultureList from "./pages/CultureList";
import ParentPage1 from "./pages/ParentPage";
import ParentPage2 from "./pages/ParentPage2";
import ParentPage3 from "./pages/ParentPage3";
import ParentPage4 from "./pages/ParentPage4";
import MyPage from "./pages/MyPage";
import ConversationStudy from "./components/learning/ConversationStudy";
import WordStudy from "./components/learning/WordStudy";
import CultureDetail from "./components/Culture/CultureDetail";
import ReviewStudy from "./components/learning/ReviewStudy";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Explore />}>
            <Route path="/" element={<Landing />} />
            <Route path="/categorylist" element={<CategoryList />} />
            <Route path="/culturelist" element={<CultureList />} />
            <Route path="/cultureitem/:id" element={<CultureDetail />} />
            {/* <Route path = "/cultureitem/:id" element={<Landing />}/> */}
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/parentpage/record" element={<ParentPage1 />} />
            <Route path="/parentpage/map" element={<ParentPage2 />} />
            <Route path="/parentpage/news" element={<ParentPage3 />} />
            <Route path="/parentpage/support" element={<ParentPage4 />} />
            {/* <Route path = "/parentpage" element={<Landing />}/>
              <Route path = "/parentpage/map" element={<Landing />}/>
              <Route path = "/parentpage/news" element={<Landing />}/>
              <Route path = "/parentpage/news/:categoryid" element={<Landing />}/> */}
          </Route>
          <Route path="/learning" element={<Learning />}>
            <Route
              path="/learning/conversation/:id"
              element={<ConversationStudy />}
            />
            <Route path="/learning/quiz/*" element={<WordStudy />} />
            <Route path="/learning/review/*" element={<ReviewStudy />} />
          </Route>
          {/* <Route path = "/*" element={< />}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
