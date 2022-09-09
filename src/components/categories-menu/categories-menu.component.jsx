import CategoryItem from '../category-item/category-item.component';
import './categories-menu.styles.scss'


const CategoriesMenu = ({categories}) => {

    // Using map() we are able to loop through the 
    // array above to build the different cards while
    // only having to type the syntax once
    return (
        <div className="categories-container">
        {categories.map((category) => (
        <CategoryItem key = {category.id} category={category} />
        ))};
    </div>
    );
}

export default CategoriesMenu
