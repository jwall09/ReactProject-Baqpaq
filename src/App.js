import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component.jsx'
import Navigation from './routes/navigation/navigation.component.jsx'
import SignIn from './routes/sign-in/sign-in.component.jsx';

// This is the base for the Shop Page
const Shop = () => {
  return <h1>This is the shop page for now, we're working on it</h1>;
};

// This is the base for the home page of the website
const App = () => {

  // Wrapping Routes to allow you to dictate the URL for the page
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element = {<Home />} />
        <Route path ='shop' element= {<Shop />} />
        <Route path ='sign-in' element= {<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
