

<html data-n-head-ssr lang="en" data-n-head="%7B%22lang%22:%7B%22ssr%22:%22en%22%7D%7D">
<head>

<meta charset="UTF-8/">
	
<title> siteHan </title> 
<style>
body {
background-color: #ededed ;
margin: 0 15%; 
font-family: Courier; }
h1 {
text-align: right; 
font-family: Courier; 
font-weight: bold; 
%text-transform: uppercase;
border-bottom: 1px solid #646060;
margin-top: 50px; }
h2 {
font-family: Courier;
color: #565656;
font-size: 1.5em; 
margin-bottom: 30px;}
h3 {
font-family: Courier;
color: #565656;
font-size: 1em; }
h4 {
font-family: Bradley Hand;
text-align: right;
color: #565656;
font-size: 0.9em; }

img {
float: left; 
margin-right: 30px}

p {
font-family: Comic Sans MS;
color: #565656;
font-size: 1.2em;}

a:link {
  color: blue;
  background-color: transparent;
  text-decoration: none;
}

a:visited {
  color: blue;
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  color: pink;
  background-color: transparent;
  text-decoration: none;
}

button {
  font-family: Courier;
  border: none;
  color: #565656;
  background-color: #ededed;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  vertical-align: left;
  font-size: 1.5em;}

button:hover {
  background-color: #ededed;
  color: pink;
}

#myDIV1 {
  width: 100%;
  padding: 20px 0;
  text-align: left;
  %background-color: lightblue;
  margin-top: 10px;
}

#myDIV2 {
  width: 100%;
  padding: 50px 0;
  text-align: left;
  %background-color: lightblue;
  margin-top: 20px;
}


</style>
</head>

<h1>
Han(zhang) Yin
</h1>

<button onclick="myFunction1()">About Me</button>

<div id="myDIV1">

<p>
<img src="avatar2.png" alt="me" width="133" height=187.5"> 
</p>

<p>
I am currently pursuing a Bachelor degree of Mathematics at  <a href="https://uconn.edu/"> University of Connecticut</a>. I was a statistics and political science major student and realized my interests in mathematics in my sophomore year. I have taken several advanced math classes such as abstract algebra, real analysis, and topology. My research interests include, <a href="https://en.wikipedia.org/wiki/Algebraic_combinatorics"> Algebraic Combinatorics</a>, <a href="https://en.wikipedia.org/wiki/Graph_theory"> Graph Theory</a>, and <a href="https://en.wikipedia.org/wiki/Number_theory"> Number Theory</a>. I worked on two reading projects about combinatorics in my junior year, which discussed counting walks and young tableaux respectively. It is exciting for me to look for patterns and use multiple aspects of mathematics to solve problems. For example, using dominos to construct fibonacci numbers. My passion drives me to be a tutor assisting non-math degree students to learn calculus and differential equations. After graduation, I hope to continue my research in graduate school and keep discovering the connections between different areas of mathematics. 
</p>

</div>

<button onclick="myFunction2()">My Research</button>

<div id="myDIV2">
<h3>
<a href="Combinatorics.html">Combinatorics </a>
</h3>

<h3>
<a href="REU.html">REU (Research Experience for Undergraduate Students)</a>
</h3>
</div>


<h4>
Email me: <a href="mailto:hanzhang.yin@uconn.edu">hanzhang.yin@uconn.edu</a>
</h4>
<h4>
Call me:<a href="tel:+19599295263">(959) 929-5263</a>
</h4>
<h4>
Connect me: <a href="https://www.linkedin.com/in/hanzhang-yin/" class="social-icon si-rounded si-small si-linkedin">
    <i class="icon-linkedin"></i>
    <i class="icon-linkedin"></i>
	linkedin
 </a>
</h4>

<script>
function myFunction1() {
  var x = document.getElementById("myDIV1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
</script>

<script>
function myFunction2() {
  var x = document.getElementById("myDIV2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
</script>

</html>
