const ProductMenuItem = ({ menu, onShow }) => {
    const { id, name, isClass, text, category } = menu;
    return (
        <li className={isClass ? 'on' : ''} onClick={() => onShow(category)}>
            <a href="#">{text}</a>
        </li>
    );
};

export default ProductMenuItem;
