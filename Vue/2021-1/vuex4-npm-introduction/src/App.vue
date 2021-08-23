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
      </div>
      <div class="container">
        <newActivity/>
      </div>
      <div class="container pt-4">
        <table-activities/>
      </div>
    </section>
  </div>
</template>

<script>
import newActivity from '../src/components/NewActivity.vue'
import tableActivities from '../src/components/TableActivities.vue'
export default {
  name: 'App',
  components: {
    newActivity: newActivity,
    tableActivities: tableActivities
  }
}
</script>

<style lang="scss">
@import "~bulma/css/bulma.css";
</style>
