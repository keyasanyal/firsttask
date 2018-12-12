<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <body>
  <main>

    <img src="img/logo2.png" class="logo">

    <h1 class="pageTitle">Calendar</h1>

    <h2> December 2018 </h2>

      <ul class="weekdays">
          <li>
            <abbr title="S">Sunday</abbr>
          </li>
          <li>
            <abbr title="M">Monday</abbr>
          </li>
          <li>
            <abbr title="T">Tuesday</abbr>
          </li>
          <li>
            <abbr title="W">Wednesday</abbr>
          </li>
          <li>
            <abbr title="T">Thursday</abbr>
          </li>
          <li>
            <abbr title="F">Friday</abbr>
          </li>
          <li>
            <abbr title="S">Saturday</abbr>
          </li>
      </ul>

        <ul>
          <a href="#" class="day"><li class="lastMonth">25</li></a>
          <a href="#" class="day"><li class="lastMonth">26</li></a>
          <a href="#" class="day"><li class="lastMonth">27</li></a>
          <a href="#" class="day"><li class="lastMonth">28</li></a>
          <a href="#" class="day"><li class="lastMonth">29</li></a>
          <a href="#" class="day"><li class="lastMonth">30</li></a>
            <a href="firsttasks.html" class="day"><li>1</li></a>
            <a href="firsttasks.html" class="day"><li>2</li></a>
            <a href="firsttasks.html" class="day"><li>3</li></a>
            <a href="firsttasks.html" class="day"><li>4</li></a>
            <a href="firsttasks.html" class="day"><li>5</li></a>
            <a href="firsttasks.html" class="day"><li>6</li></a>
            <a href="firsttasks.html" class="day"><li>7</li></a>
            <a href="firsttasks.html" class="day"><li>8</li></a>
            <a href="firsttasks.html" class="day"><li>9</li></a>
            <a href="firsttasks.html" class="day"><li>10</li></a>
            <a href="firsttasks.html" class="day"><li>11</li></a>
            <a href="firsttasks.html" class="day"><li>12</li></a>
            <a href="firsttasks.html" class="day"><li>13</li></a>
            <a href="firsttasks.html" class="day"><li>14</li></a>
            <a href="firsttasks.html" class="day"><li>15</li></a>
            <a href="firsttasks.html" class="day"><li>16</li></a>
            <a href="firsttasks.html" class="day"><li>17</li></a>
            <a href="firsttasks.html" class="day"><li>18</li></a>
            <a href="firsttasks.html" class="day"><li>19</li></a>
            <a href="firsttasks.html" class="day"><li>20</li></a>
            <a href="firsttasks.html" class="day"><li>21</li></a>
            <a href="firsttasks.html" class="day"><li>22</li></a>
            <a href="firsttasks.html" class="day"><li>23</li></a>
            <a href="firsttasks.html" class="day"><li>24</li></a>
            <a href="firsttasks.html" class="day"><li>25</li></a>
            <a href="firsttasks.html" class="day"><li>26</li></a>
            <a href="firsttasks.html" class="day"><li>27</li></a>
            <a href="firsttasks.html" class="day"><li>28</li></a>
            <a href="firsttasks.html" class="day"><li>29</li></a>
            <a href="firsttasks.html" class="day"><li>30</li></a>
            <a href="firsttasks.html" class="day"><li>31</li></a>
          <a href="#" class="day"><li class="lastMonth">1</li></a>
          <a href="#" class="day"><li class="lastMonth">2</li></a>
          <a href="#" class="day"><li class="lastMonth">3</li></a>
          <a href="#" class="day"><li class="lastMonth">4</li></a>
          <a href="#" class="day"><li class="lastMonth">5</li></a>
      </ul>

    <button class="addTsk">
      <a class="add" href="#">ADD TASK</a>
    </button>

  </main>

    <div class="calendarnav">
      <a  href="#workTasks"><button class="calendarbtn1"><i  class="fa fa-home"></i></button></a>
      <a  href="Mainscreen.html"><button class="calendarbtn2"><i  class="fa fa-calendar"></i></button></a>
      <a  href="Mainscreen.html"><button class="calendarbtn3"><i  class="fa fa-plus"></i></button></a>
      <a  href="Mainscreen.html"><button class="calendarbtn4"><i  class="fa fa-suitcase"></i></button></a>
      <a  href="Mainscreen.html" ><button class="calendarbtn5"><i  class="fa fa-pencil"></i></button></a>
    </div>

    <!-- </div> -->
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> -->
    <!-- <script src="js/main.js"></script> -->
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
body {
  margin:0;
  padding:0;
  font-family: 'Futura', arial, sans-serif;
  color: #222;
}


.pageTitle {
  background-color: #2f3d4a;
  color: white;
  padding: 1em;
  margin-top: 1em;
  margin-bottom: 2em;
  font-family: 'Futura', arial, sans-serif;
  font-size: 1em;
  font-weight: bold;
  text-align: center;

}

h2 {
  font-family: 'Futura', arial, sans-serif;
  font-size: 1.5em;
  text-align: center;
  font-weight: normal;
}

hr {
  width: 40%;
  border: solid black thin;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1.5em;
}


a {
  text-decoration: none;
  padding: 1em;
}


/* styles grid */
ul {
  font-family: 'Futura', arial, sans-serif;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  /* grid-gap: 1em; */
  margin: 0 auto;
  max-width: 90%;
  padding: 1em;
  background-color: white;

}

/* makes grid appear */
li {
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin-left: 0;
  /* border: thin solid; */
  padding: 1.5em;
  /* background-color: white; */
}

/* styling done for weekday text */
ul.weekdays abbr[title] {
  font-family: 'Futura', arial, sans-serif;
  border: none;
  /* font-weight: bold; */
  text-decoration: none;
  /* max-width: 60em; */
}

abbr {
  font-weight: bold;
  font-size: 1.2
}

.container {
  display: block;
  position: relative;
  width: 100%;
}

.logo{
  width: 30%;
  display: block;
  margin-top: 4em;
  margin-bottom: 2em;
  margin-left: auto;
  margin-right: auto;
}

.lastMonth {
  color: white;
}

.day{
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin-left: 0;
  border: thin solid;
  padding: 1.5em;
  background-color: transparent;
  font-family: 'Futura', arial, sans-serif;
  font-size: 1em;
}


/* Firsts Tasks CSS page */

a.day {
  color: black;
  text-decoration: none;
  /* padding: .5em; */
}

.add {
  color: white;
  font-weight: bold;
  text-decoration: none;
  style: none;
  margin-bottom: 1em;
}


.addTsk{
font-family: 'Futura', georgia, sans-serif;
font-size: 1.5em;
display: block;
/* margin-right: 1em; */
width: 100%;
padding: 1.5em;
background-color: #2f3d4a;
position: absolute;
margin-bottom: 500px;
color: white;
}


.task-list{
  list-style: none;
  margin-left: 2em;
  text-align: left;
  font-size: 1em;
  overflow: scroll;
  margin-bottom: .8em;
  font-family: 'Futura', georgia, sans-serif;

}
.main-heading {
  font-family: 'Ubuntu', impact, sans-serif;
  font-size: 1.25em;
  color: #fff;
  line-height: 2;
  text-align: center;
  text-shadow: 1px 1px 0px black;
}

.logo{
  width: 30%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
}

h2 {
  font-size: 16px;
  text-align: center;
text-decoration: underline;
}

h3 {
  font-size: 20px;
  text-align: center;
  background-color: #2f3d4a;
  padding: 1em;
  color: white;
}

.task-list{
  list-style: none;
  margin-left: 2em;
  text-align: left;
  font-size: 17px;

}

.fix1 {
  background-color: #9a81bb;
  padding: 0.5em;
  margin: 1em;
}

.fix2 {
  background-color: #52a580;
  padding: 0.5em;
  margin: 1em;
}

.fix3 {
  background-color: #84a0d2;
  padding: 0.5em;
  margin: 1em;
}

.checkbox {
  margin-bottom: 2em;
  text-align: right;
  height: 25px;
  width: 25px;
  background-color: blue;

}


.btns {
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.btns a {
  float: left;
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 40px;
}

.btn1 {
  width: 100%;
  border: none;
  bottom: 0;

}
/*edit tasks CSS*/
body{
  margin: 0;
  background-color: #E0E0E0;
}



.header{
  background-color: #2F3D4A;
  border: thin solid;
  font-family: 'Roboto', sans-serif;
  color: white;
  margin: 0 auto;
  text-align: center;
  font-size:30px;
  border:0px;
  height: 100px;
}
p{
  text-align: center;
  font-family: 'Roboto', sans-serif;
  color: white;
  font-size:30px;
  position: relative;
  bottom: 80px;
  margin: 0;

}
.button {
  background-color: #607D8B; /* Green */
  border: none;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  right:100px;
  position: fixed;
  top: 20px;
  right: 20px;

}

input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

div {
  border-radius: 5px;
  background-color: #f1f2f2;
  padding: 20px;
}
.date{
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.task_description{
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;width: 100%;
  display: inline-block;
}

</style>
