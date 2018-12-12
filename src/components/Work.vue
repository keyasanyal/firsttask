<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     <body>

  <img src="img/logo2.png" class="logo">

  <h1 class="pageTitle">All Tasks</h1>



<h2>December 5th, 2018</h2>

<main class="task-list">


<label class="container fix2">Check stats again
  <input type="checkbox" checked="checked">
  <span class="checkmark"></span>
</label>

<label class="container fix2">Fax Lena the files
  <input type="checkbox" checked="checked">
  <span class="checkmark"></span>
  </label>


</main>

<div class="nav">
<a  href="firsttasks.html"><button class="btn1"><i  class="fa fa-home"></i></button></a>
<a  href="calendar.html"><button class="btn2"><i  class="fa fa-calendar"></i></button></a>
<a  href="addtasks.html"><button class="btn3"><i  class="fa fa-plus"></i></button></a>
<a  href="work.html"><button class="btn4"><i  class="fa fa-suitcase"></i></button></a>
<a  href="school.html" ><button class="btn5"><i  class="fa fa-pencil"></i></button></a>
</div>

<a name="workTasks"></a>

</body>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
