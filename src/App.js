import './categories.styles.scss'

const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Tech'
    },
    {
      id: 2,
      title: 'Outdoors'
    },
    {
      id: 3,
      title: 'Compact'
    },
    {
      id: 4,
      title: 'Overnight'
    },
    {
      id: 5,
      title: 'Everyday'
    }
  ];

  return (
    <div className="categories-container">
      {categories.map(({title, id}) => (
        <div key={id} className="category-container">
          <div className="background-image" />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))};
    </div>
  );
}

export default App;
