import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BackToTopBtn from "./components/BackToTopBtn";
import { Suspense, useEffect } from "react";

function App() {
  
  

  return (
    <>
      <NavBar />
      <main>
        <div className="px-3">
          <Suspense
            fallback={
              <h1 className="loading-ani">
                {" "}
                <div className="loadingio-spinner-bean-eater-de1oa476p74">
                  <div className="ldio-5xo4mkmi3hi">
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>
                
              </h1>
            }
          >
            <div className="pb-5"
            >
            <Outlet />

            </div>
          </Suspense>
          <BackToTopBtn />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
