import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component'


// This is the base for the home page of the website
const App = () => {

  return (
    <Routes>
      <Route path='/home' element = {<Home />} />
    </Routes>
  );
};

export default App;
