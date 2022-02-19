import React from 'react';
import NavbarHeader from '../../components/Navbar';
import logo from '../../assets/images/logo.svg';

const Home = () => {
  return (
    <div className="App">
      <NavbarHeader />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/Home/index.tsx</code> and save to reload...
        </p>
        <p>Env variable: {process.env.REACT_APP_ENV_TEST}</p>
      </header>
    </div>
  );
};

export default Home;
