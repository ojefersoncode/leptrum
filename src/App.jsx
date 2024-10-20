import React from 'react';
import NavbarLogado from './components/NavbarLogado';
import Cards from './components/Cards';
import Footer from './components/Footer/Footer';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <>
      <NavbarLogado />

      <div>
       <SearchBar />
      </div>

      <div className='m-2'>
          <Cards />
      </div>

      <Footer />
    </>
  );
}

export default App;