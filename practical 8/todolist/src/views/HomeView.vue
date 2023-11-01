<template>
  <div class="home">
    <img alt="TODO logo" src="../assets/to-do-list.png">
    <ToDoList msg="My to do list!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ToDoList from '@/components/ToDoList.vue'

export default {
  name: 'HomeView',
  components: {
    ToDoList
  }
}
</script>
