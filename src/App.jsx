import React from 'react';
import NavbarLogado from './components/NavbarLogado/NavbarLogado';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';
import SearchBar from './components/SearchBar/SearchBar';
import BadageFilter from './components/badageFilter/BadageFilter';

function App() {
  return (
    <>
      <NavbarLogado />

      <div>
       <SearchBar />
      </div>

      <div  className='flex'>
        <BadageFilter />
      </div>

      <div className="flex">
          <Cards />
      </div>

      <Footer />
    </>
  );
}

export default App;