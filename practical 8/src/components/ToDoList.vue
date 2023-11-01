<template>

<div class="main">

<h1>This is a to do list page</h1>
  <form>
    <input type="text" placeholder="Enter a task to be done" v-model="taskDesc"/>
    <!-- ".prevent" is used to prevent reloading the page when the button is clicked-->
    <!-- :disabled="!taskDesc" to disable the "Add Task" button if there is no text entered -->
    <button class="add-task" @click.prevent="addTask" :disabled="!taskDesc">Add task</button>
    <!-- :v-if="tasks.length > 1" is used to control the visibility of this button, i.e., it will appear when there is more than one task -->
    <button class="delete-all-tasks" v-if="tasks.length > 1" @click.prevent="deleteAll">Delete all</button>
  </form>
  
    <!-- 
    The v-for directive requires a special syntax in the form of "item" in "items", 
    where "items" is the source data array and "item" is an alias for the array element being iterated on.
    You do not need to define the item (e.g., "task" in our case), JS/Vue will know it is a single array element being iterated on.
    To reuse and reorder existing elements, you need to provide "a unique key attribute" for each item (e.g., :key="index").

    However, using the following "v-for", will not work as expected for us, try to figure out why
    
    <div class="tasks-list" v-for="task in tasks" :key="task.desc">  
    -->

    <!-- Try to remove ":key="index"", and check what kind of error you will get -->
    <div class="tasks-list" v-for="(task, index) in tasks" :key="index"> 
  
    <!-- 
    "task.done = !task.done"" to toggle between these two states"
    
    ":style="{'..." - If task.done is "true", the class "clicked" will apply, which will change the text style  to line-through. 
    Otherwise, it will the class "clicked", which will remove the text-decoration 
    This is a ternary operator, you should remember how it works" 
    -->
    <div class="task-box" @click="task.done = !task.done" :class="task.done? 'clicked' : ''">{{ task.desc }}</div>
    <div class="delete" @click="deleteTask(index)">Delete</div>
    </div> 
    
</div>

</template>

<script>

export default {
name: "ToDoList",

data: function() {
return {
    tasks: [ 
      {desc: "Register my team in Moodle", done: true},
      {desc: "Finish the homework", done: false},
      {desc: "Submit the homework though Moodle" , done: false},
      {desc: "Discuss the homework in Lab" , done: false},
        ],
    taskDesc: "",
  }},

methods: {
    addTask: function() {
    /*   We are just adding a new entery to the list (array), each object has two data (lierals) 
      desc (text description) and done (true or false). When pressing on the "Add task button", 
      the text within the input filed will be assigned to the desc of the new object to be added, 
      and its done value will be set to false because it is not logical to add a task, which we have already done
    */  
      this.tasks.push({desc: this.taskDesc, done: false });
    /* to empty the input after adding the task in the input filed to the list (array) of the to do list */
      this.taskDesc = "";
    },
    /* You sould know what array.splice(index, 1) do */
    deleteTask: function(index) {
      this.tasks.splice(index, 1);
    },
    /* Empty the list (array) of the to do list  */
    deleteAll: function() {
      this.tasks = [];
    }
  }  

}; 

</script>

<style scoped>



* {
  box-sizing: border-box;
}
h1{
  color: #21b813;
}

.clicked{
  text-decoration: line-through;
  color: #135ab8;
}
.main {
  text-align: center;
}
.main form {
  margin: 20px auto 10px;
  width: 500px;
  overflow: hidden;

}
.main form input {
  background-color: #f7f7f7;
  border: 1px solid #eee;
  margin-bottom: 15px;
  width: calc(100% - 210px);
  height: 46px;
  padding: 10px;
  float: left;
}
.main form input:focus {
  outline: none;
}
.main form button {
  width: 90px;
  height: 46px;
  padding: 10px;
  background-color: #2196f3;
  color: #fff;
  border-color: transparent;
  cursor: pointer;
  float: left;
  margin-left: 5px;
  font-size: 16px;
  border-radius: 20px;
}
.main form button:disabled {
  opacity: 0.4;
  cursor: no-drop;
}
.main form button:focus {
  outline: none;
}
.main form button.delete-all-tasks {
  width: 110px;
  background-color: #cc372c;
  color: #fff;
  border-color: transparent;
  font-size: 16px;
  cursor: pointer;
  height: 48px;
  border-radius: 20px;
}

.main form button.delete-all-tasks:hover {
    background-color: #6e1812;
}
.main .tasks-list {
  width: 500px;
  margin: 0 auto;
}
.main .tasks-list .task-box {
  background-color: rgba(139, 195, 74, 0.25);
  padding: 15px;
  text-align: left;
  margin-bottom: 15px;
  margin-right: 5px;
  width: calc(100% - 86px);
  cursor: pointer;
  float: left;
}
.main .tasks-list .delete {
  float: right;
  width: 80px;
  background-color: #cc372c;
  color: #fff;
  border-color: transparent;
  padding: 1px 10px;
  cursor: pointer;
  height: 48px;
  line-height: 51px;
  border-radius: 20px;
}

.main .tasks-list .delete:hover {
    background-color: #6e1812;
}


</style>

