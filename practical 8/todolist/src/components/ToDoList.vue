<template>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <form>
        <input type="text" v-model="newTodo" placeholder="Add new task..."/>
        <button type="button" class="add-task" @click="addTodo">Add Task</button>
        <button type="button" class="delete-all" @click="deleteAll">Delete all</button>
      </form>
        <!-- {{ todos }} visual debuging -->
      <div class="todos-container">
        <div class="todo-items" v-for="todo in todos" :key="todo">{{ todo }}</div>
      </div>
      <h3>Essential Links</h3>
      <ul>
        <li><a href="https://moodle.ut.ee/" target="_blank" rel="noopener">Moodle</a></li>
        <li><a href="https://ois2.ut.ee/" target="_blank" rel="noopener">Õis</a></li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ToDoList',
    props: {
      msg: String
    },
    methods: {
        addTodo: function(){
            // add new task
            this.todos.push(this.newTodo)
            console.log(this.newTodo)
            console.log(this.todos)
        },
        deleteAll: function(){
            // delete all tasks
            this.todos = []
        }
    },
    data: () => {
        return{
            newTodo: "",
            todos: []
        }
    }
  }
  </script>
  


  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>