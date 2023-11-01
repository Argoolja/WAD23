<template>
    <h1> A simple example of using Fetch API</h1>
    <div class="post-list" v-for="post in posts"   :key="post.index">  
    <div class="post">
    <h3>  Title:  {{post.title}} </h3>
    <p>  <b> Body: </b> {{post.body}} </p>
    </div>
    </div> 
</template>


<script>
export default {
    name: "getData",
    props: ["posts"]
}
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
    text-align: left;
}
</style>