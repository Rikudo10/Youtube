import categories from "../modules/categories";

const categoriesPlugin = (store) => {
    store.registerModule('categories',categories)
}
export default categoriesPlugin