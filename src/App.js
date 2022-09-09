import CategoryMenu from './components/categories-menu/categories-menu.component';


// This is the base for the home page of the website
const App = () => {

  // This array allows us to loop through the 
  // different info for each card with map()
  const categories = [
    {
      id: 1,
      title: 'Tech',
      imageUrl: 'https://i.ibb.co/TRdfRZS/tech.jpg'
    },
    {
      id: 2,
      title: 'Outdoors',
      imageUrl: 'https://i.ibb.co/kyW753T/outdoors.jpg'
    },
    {
      id: 3,
      title: 'Compact',
      imageUrl: 'https://i.ibb.co/9G0yD9F/compact.jpg'
    },
    {
      id: 4,
      title: 'Overnight',
      imageUrl: 'https://i.ibb.co/qs1N4vK/overnight.jpg'
    },
    {
      id: 5,
      title: 'Everyday',
      imageUrl: 'https://i.ibb.co/qMXKvxQ/everyday.jpg'
    }
  ];


  return (
    <CategoryMenu categories={ categories }/>
  );
}

export default App;
