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
        const tag = state.tag;
        return tag !== "ყველა"
            ? state.products.filter(
                (product) => product.tags.includes(tag)
            )
            : state.products;
    },
    getCategoryId(state) {
        return state.tag;
    },
    getCategories(state) {
        const tags = ["ყველა"];

        for (const video of state.products) {
            for (const tag of video.tags) {
                if (!tags.includes(tag)) {
                    tags.push(tag);
                }
            }
        }

        return tags;
    }
};
