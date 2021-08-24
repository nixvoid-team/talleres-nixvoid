<template>
  <div>
    <div class="container">
        <new-activity 
        :activity="currentActivity"
        @save="saveActivity"
        />
    </div>
    <p>Tabla de actividades</p>
    <p>{{lenCategories}}</p>
    <div>
      <activity-card v-for="(activity, index) in activities"
      :key="activity.id"
      :activity="activity"
      >
        <button @click="updateActivity(index,activity)" >E</button>
        <button @click="deleteActivity(index)" class="delete-action">x</button>
      </activity-card>
    </div>
  </div>
</template>

<script>
import ActivityCard from '@/components/ActivityCard.vue'
import NewActivity from './NewActivity.vue'
export default {
  components: { ActivityCard,NewActivity},
  name: "TableActivities",
  data:()=>({
    currentIndex: -1,
    currentActivity: {},
  }),
  computed: {
     lenCategories(){
       return this.$store.state.categories.length
     },
    activities(){
      return this.$store.state.activities
    }
  },
  methods:{
    deleteActivity(index){
      this.$store.commit("DELETE_ACTIVITY", index)
    },
    saveActivity(activity){
      if(this.currentIndex===-1){
          this.$store.commit("ADD_ACTIVITY",activity)
      }else{
         this.$store.commit("UPDATE_ACTIVITY_BY_INDEX",{
           index: this.currentIndex,
           activity: activity
         })
      }
      this.currentIndex=-1
      this.currentActivity = Object.assign({},this.defaultActivity)
    },
    updateActivity(index, activity){
      this.currentIndex = index
      this.currentActivity = Object.assign({},activity)
    },
  }
}
</script>

<style scoped>
  .delete-action{
    position: relative;
    left: 90%;
  }
</style>