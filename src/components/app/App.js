import { Routes, Route, useLocation } from 'react-router-dom';

import {Header, Footer, Main, ForYour, OurCoffee, AboutIt} from '../pages'

import './app.scss';

const App = () => {

  const location = useLocation();

    return (  
      <>
        <div className="app">
          <Header />
          <main>
            <Routes location={location} key={location.pathname}>
              <Route index element={<Main />}/>
              <Route path="/our-coffee"  element={<OurCoffee />}/>
                <Route path="/our-coffee/about-it"  element={<AboutIt />}/>
              <Route path="/for-your" element={<ForYour />}/>
            </Routes>
          </main>
          <Footer />
        </div>
      </>
   )
}

export default App;