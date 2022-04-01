import React from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import routes from '../../data/routes';

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => (
  <header className='w-full'>
    <div className='flex flex-wrap px-4 lg:px-20 mx-auto my-2 flex-row justify-between'>
      <h1 className='w-2/5 my-3 text-2xl'>
        {routes.filter((l) => l.homepage).map((l) => (
          <Link key={l.label} to={l.path}>{l.label}</Link>
        ))}
      </h1>
      <nav className='w-2/5 sm:my-3 justify-end flex'>
        <ul className='sm:flex items-center hidden'>
          {routes.filter((l) => l.navigation).map((l) => (
            <li key={l.label} className='px-2 py-1 hover:text-blue-600'>
              <Link to={l.path}>{l.label}</Link>
            </li>
          ))}
          {routes.filter((l) => l.login).map((l) => (
            <li key={l.label} className='mr-2 px-2 py-1 text-yellow-500 hover:text-blue-600'>
              <Link to={l.path}>{l.label}</Link>
            </li>
          ))}
          {routes.filter((l) => l.signup).map((l) => (
            <li key={l.label} className='px-2 py-1 text-white bg-yellow-500 hover:bg-yellow-300'>
              <Link to={l.path}>{l.label}</Link>
            </li>
          ))}
        </ul>
        <Hamburger className='flex justify-end sm:hidden' />
      </nav>
    </div>
  </header>
);

export default Navigation;