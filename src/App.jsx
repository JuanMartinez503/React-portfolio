import  { useState, useEffect } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import BackToTopBtn from './components/BackToTopBtn';
import { Suspense } from 'react';

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate a delay of 3000 milliseconds (3 seconds)
    const timeoutId = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []); // Run the effect only once on component mount

  return (
    <>
      <NavBar />
      <main>
        <div className="px-3">
          <Suspense fallback={<LoadingFallback />}>
            {showContent && <Outlet />}
          </Suspense>
          <BackToTopBtn />
        </div>
      </main>
      <Footer />
    </>
  );
}

const LoadingFallback = () => (
  <h1 className="loading-ani">
    <div className="loadingio-spinner-bean-eater-de1oa476p74"><div className="ldio-5xo4mkmi3hi">
<div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div>
</div></div>
  </h1>
);

export default App;
