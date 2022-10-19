// Using Fragment allows you to not double call
// a HTML element. If you had a div instead,
// when it is called on the page, it would be
// nested inside a div already.
import { Fragment } from 'react';

// Outlet is what allows you to be able to nest a 
// child route inside a parent route and just call
// exact components instead of having to rerender 
// everything on the page that may stay

// Link allows you to use the browser router and acts
// as an anchor tag 
import { Outlet, Link } from 'react-router-dom';

// importing my logo svg
import { ReactComponent as BaqpaqLogo } from '../../assets/LRUx4h01.svg'
// imports the navigation style
import './navigation.styles.scss';


const Navigation = () => {
    return (

      <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <BaqpaqLogo />
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    Shop
                </Link>
            </div>
        </div>
        <Outlet />
      </Fragment>
    );
};

  export default Navigation;