<template>
  <div>
    <h1 class="title">Crea un evento {{user.name}}</h1>
    <h2 class="subtitle">Evento creado por: {{user.userId}}</h2>
    <p>{{lenCategories}}</p>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: "NewActivity",
  computed: {
     lenCategories(){
       return this.$store.state.categories.length
     },
    ...mapState(['user','categories'])
  }
}
</script>

<style scoped>

</style>