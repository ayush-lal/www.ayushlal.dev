import React from 'react';
import NavbarHeader from '../../components/Navbar';
import logo from '../../assets/images/logo.svg';

const Page2 = () => {
  return (
    <>
      <NavbarHeader />
      <div className="page2">
        <div>
          <p>
            Edit <code>src/pages/Page2/index.tsx</code> and save to reload...
          </p>
          <p>Env variable: {process.env.REACT_APP_ENV_TEST}</p>
        </div>
      </div>
    </>
  );
};

export default Page2;
