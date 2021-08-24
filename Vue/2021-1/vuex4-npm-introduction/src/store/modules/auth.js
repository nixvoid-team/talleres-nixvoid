export default {
    namespaced: true,
    state: ()=>({
        user:{userId: '123', name: 'nixvoid'},
    }),
    mutations: {
        SET_USER(state,user){
            state.user = user
          },
          SET_USER_ID(state,userId){
            state.user.userId = userId
          },
          SET_USERNAME(state,username){
            state.user.name = username
          },
    },
    getters:{
        username(state){
          return state.user.name
        }
    },
    actions: {
        async fetchUser({commit}){
          const response = await fetch('https://my-json-server.typicode.com/typicode/demo/profile')
          const {name} = await response.json()
          commit("SET_USERNAME",name)
        }
    }
}