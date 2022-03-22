
export default {
    namespaced: true,
    state: {
        favouriteProducts: [],
    },
    getters: {
        myFavourites(state) {
            return state.favouriteProducts
        }
    },
    mutations: {
        setMyFavourites(state, newState) {
            state.favouriteProducts.push(newState) 
        }
    }, 
    actions: {
        async getMyFavourites(context, product) {
            context.commit('setMyFavourites', product)
        }

    }
}