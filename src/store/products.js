

export default {
    namespaced: true,
    state: {
        favouriteProducts: [],
        cart: [],
    },
    getters: {
        favourites(state) {
            return state.favouriteProducts
        },
        cart(state) {
            return state.cart
        }
    },
    mutations: {
        setFavourites(state, newState) {
            state.favouriteProducts.push(newState)
        },
        setMyOrders(state, orders) {
            state.cart.push(orders)
        }
    },
    actions: {
        async setFavouriteProducts(context, product) {
            context.commit('setFavourites', product)
        },
        async setOrderedProducts(context, orders) {
            context.commit('setMyOrders', orders)
        }
    }
}