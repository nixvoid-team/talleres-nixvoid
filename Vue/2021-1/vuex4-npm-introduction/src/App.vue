<template>
  <div class="container is-fluid pt-4">
    <div class="notification is-primary">
      Vuex: code
    </div>
    <section class="hero">
      <div class="hero-body">
        <p class="title">
          Getters
        </p>
        <p class="subtitle">
          App agenda
        </p>
        <div>
        <input v-model="username" class="input is-link" type="text" placeholder="Nombre del usuario">
        </div>
      </div>

      <div class="container pt-4">
        <table-activities/>
      </div>
    </section>
  </div>
</template>

<script>
import tableActivities from '../src/components/TableActivities.vue'
import { mapMutations, mapState} from 'vuex'
export default {
  name: 'App',
  components: {
    tableActivities: tableActivities
  },
  async created(){
    await this.$store.dispatch("auth/fetchUser")
  },
  computed:{
    ...mapState('auth',['user']),
    username: {
      // getter
      get() {
        return this.$store.getters["auth/username"]
      },
      // setter
      set(newValue) {
        this.setUsername(newValue)
      }
    },
  },
  methods:{
    ...mapMutations('auth',{
      setUsername:'SET_USERNAME'
    })
  }
}
</script>

<style lang="scss">
@import "~bulma/css/bulma.css";
</style>
