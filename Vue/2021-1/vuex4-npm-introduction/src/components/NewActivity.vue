<template>
  <div>
    <h1 class="title">Crea un actividad {{user.name}}</h1>
    <h2 class="subtitle">Evento creado por: {{user.userId}}</h2>
    <form @submit.prevent="saveActivity">
      <input v-model="editedActivity.title" class="input" type="text" placeholder="Text input">
      <input  v-model="editedActivity.description"  class="input" type="text" placeholder="Text input">
      <input  v-model="editedActivity.date"  class="input" type="text" placeholder="Text input">
      <input v-model="editedActivity.time" class="input" type="text" placeholder="Text input">

      <button class="button is-primary" type="submit">Guardar</button>
    </form>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: "NewActivity",
  computed: {
    ...mapState('auth',['user']),
    ...mapState(['categories'])
  },
  props:{
    activity:{
      type: Object,
      default: ()=>({
          title: 'titulo por defecto',
          description:'defecto',
          date: '',
          time: '',
          categories:[]
      })
    }
  },
  data:()=>({
    defaultActivity:{
      title:'',
      description:'',
      date: '',
      time: '',
      categories:[]
    },
    editedActivity:{
      title:'',
      description:'',
      date: '',
      time: '',
      categories:[]
    },
  }),
  methods:{
    saveActivity(){
      this.$emit("save",this.editedActivity)
    }
  },
  watch:{
    activity(newValue){
      this.editedActivity = Object.assign({},newValue)
    }
  }
}
</script>

<style scoped>

</style>