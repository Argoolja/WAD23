<template>
  <div class="fetch">
    <h1>This is FetchAPI page</h1>
    <get-data :posts="posts"/>
  </div>

</template>


<script>
// @ is an alias to /src
import getData from "@/components/getData.vue";   

export default {
  name: "FetchView",
  components: {
    getData
  },
  data: function() {
    return {
    
    posts:[    
    /*
    {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    }  
    */
    ]
    }
    },
    mounted() {
        fetch('https://jsonplaceholder.typicode.com/posts')
       // fetch('http://localhost:3000/Posts') //using the local Json server
        .then((response) => response.json())
        .then(data => this.posts = data)
        .catch(err => console.log(err.message))
    }
};
</script>

