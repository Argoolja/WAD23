<template>
<div>
    
  <form @submit.prevent ="validateForm">
  <h2>Create an account</h2>
  <label for="email">Email</label>
  <input type="email" required v-model="email">
  <label for="password">Password</label>
  <input type="password" required v-model="password">
  <div v-if="validatePassword" class="error"> {{validatePassword}}</div>

<label for="role">Role</label>
<select v-model="role">
<option value="admin"> Admin </option>
<option value="user"> User </option>
</select>

<div>

<input type="checkbox" required v-model="terms">
<label for="checkbox">Accept terms and condition</label>
</div>

<div class="submit">
    <button>Sign up </button>
</div>
</form>


</div>


</template>

<script>
export default {
name: "FormView", 

data: function() {
    return {
   email: '',
   password: '',
   role: '',
   terms: false,
   validatePassword:'',
  }},
  methods: {
   /* Validate password */
   validateForm(){
   console.log('signup is submitted');
   this.validatePassword = (this.password.length <8 || this.password> 15)? 'password must be between 8-15 chars':''
   console.log(this.validatePassword);
   let regex = /[a-z]+[A-Z]+[0-9]+_+/
   console.log(regex.test(this.password));
   console.log(this.password);
   this.validatePassword = regex.test(this.password)? '':'password must contain a combination of Uppercase characters (A-Z), Lowercase characters (a-z), Digits (0-9), and _'
   }
  }
}
</script>

<style scoped>
form {
  max-width: 420px;
  margin: 30px auto;
  background:  rgb(167, 154, 154);
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
    color: rgb(8, 110, 110);
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

input{
display: block;
padding: 10px 6px;
width: 100%;
box-sizing: border-box;
border: none;
border-bottom: 1px solid white;
color: blue;
}
input[type="checkbox"]{
    display: inline-block;
    width: 16px;
    margin:  0 10px 0 0;
    position: relative;
    top: 2px;
}
button{
background:  rgb(8, 110, 110);
border: 0;
padding: 10px 20px;
margin-top:  20px;
color: white;
border-radius: 20px;
}
h2, .submit{
    text-align: center;
}
.error{
    color: red;
    font-size: 0.8em;
    margin-top:  10px;
    text-align: center;
}
</style>