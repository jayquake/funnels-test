import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./cmps/layout/Header";
import Footer from "./cmps/layout/Footer";
import Home from "./cmps/pages/Home";
import Blog from "./cmps/pages/Blog";
import About from "./cmps/pages/About";
import Support from "./cmps/pages/Support";
import PageNotFound from "./cmps/pages/PageNotFound";
import "./css/styles.css";

export default function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Routes>
          <Route index element={<Home navigate={navigate} />} />
          <Route path="about" element={<About navigate={navigate} />} />
          <Route path="blog" element={<Blog navigate={navigate} />} />
          <Route path="support" element={<Support navigate={navigate} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

(function () {
  var s = document.createElement("script");
  var h = document.querySelector("head") || document.body;
  s.src = "https://acsbapp.com/apps/app/dist/js/app.js";
  s.async = true;
  s.onload = function () {
    acsbJS.init({
      statementLink: "",
      footerHtml: "",
      hideMobile: false,
      hideTrigger: false,
      disableBgProcess: false,
      language: "en",
      position: "right",
      leadColor: "#146FF8",
      triggerColor: "#146FF8",
      triggerRadius: "50%",
      triggerPositionX: "right",
      triggerPositionY: "bottom",
      triggerIcon: "people",
      triggerSize: "bottom",
      triggerOffsetX: 20,
      triggerOffsetY: 20,
      mobile: {
        triggerSize: "small",
        triggerPositionX: "right",
        triggerPositionY: "bottom",
        triggerOffsetX: 20,
        triggerOffsetY: 20,
        triggerRadius: "20",
      },
    });
  };
  h.appendChild(s);
})();
