import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component.jsx'
import Navigation from './routes/navigation/navigation.component.jsx'

// This is the base for the home page of the website
const App = () => {

  // Wrapping Routes to allow you to dictate the URL for the page
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element = {<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
