<template>
  <div class="home">
    <to-do-list/>
  </div>
</template>

<script>
// @ is an alias to /src
import ToDoList from "@/components/ToDoList.vue";   

export default {
  name: "HomeView",
  components: {
    ToDoList
  },
};
</script>

<style scoped>
body {
    position: relative;
}

.post {
    width: 80%;
    position: relative;
    padding: 10px;
    margin: 10px auto;
    border: 1px solid gray;
}
</style>