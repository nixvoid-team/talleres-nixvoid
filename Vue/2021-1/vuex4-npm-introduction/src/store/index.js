import { createStore } from 'vuex'
import auth from './modules/auth'

export default createStore({
  state: ()=>({
    categories:['Taller', 'Fiesta', 'Salida', 'Ponencia'],
    activities:[{
      title: 'Mi primera actividad',
      description:'Esta es mi primera actividad',
      date: '25/08/2021',
      time: '14:00',
      categories:[]
    }]
  }),
  mutations: {
    ADD_ACTIVITY(state, activity){
      state.activities.push(Object.assign({},activity))
    },
    UPDATE_ACTIVITY_BY_INDEX(state, {activity, index}){
      state.activities[index] = activity
    },
    DELETE_ACTIVITY(state, index){
      state.activities.splice(index, 1)
    }
  },
  modules: {
    auth: auth,
    authAdmin: auth,
  }
})
