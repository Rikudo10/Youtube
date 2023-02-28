export default {
  productsList(state) {
    return state.products;
  },
  cartList(state) {
    return state.cart;
  },
  filteredPost(state, getters) {
    return getters.filterByCategoryId.filter((product) =>
      product.name.toLowerCase().includes(state.search.toLowerCase())
    );
  },
  carItemCount(state) {
    return state.cart.length;
  },
  getactiveProduct(state) {
    return state.activeProduct;
  },
  filterByCategoryId(state) {
    const id= state.categoryId
    return id !== 1
      ? state.products.filter(
          (product) => product.categoryId === id
        )
      : state.products;
  },
  getCategoryId(state) {
    return state.categoryId;
  },
};
