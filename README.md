<html data-n-head-ssr lang="en" data-n-head="%7B%22lang%22:%7B%22ssr%22:%22en%22%7D%7D">
<head>
<link rel="preconnect" href="https://fonts.googleapis.com"> <!--link for the font-->
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <!--link for the font-->
<link href="https://fonts.googleapis.com/css2?family=Spectral:wght@200&display=swap" rel="stylesheet"> <!--link for the font-->

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" /> <!--link for the icon-->

<meta charset="UTF-8/">
	
<title> siteHan </title> 
<style>

.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48}
body {
background-color: #ededed ;
margin: 0 15%; 
font-family:  'Spectral', serif; }
h1 {
text-align: right; 
font-family: 'Spectral', serif;
font-weight: bold; 
%text-transform: uppercase;
border-bottom: 1px solid #646060;
margin-top: 50px; }
h2 {
font-family: 'Spectral', serif;
color: #565656;
font-size: 1.5em; 
margin-bottom: 30px;}
h3 {
font-family: 'Spectral', serif;
color: #565656;
font-size: 1em; }
h4 {
font-family:  'Spectral', serif;
text-align: right;
color: #565656;
font-size: 0.9em; }

img {
float: left; 
margin-right: 30px}

p {
font-family: 'Spectral', serif;
color: #565656;
font-size: 1.2em;}

a:link {
  color: #929292;
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

.cool-button {
  background-color: #F3CFC6; /* Pink background */
  border: none; /* Remove border */
  color: black; /* White text color */
  padding: 15px 26px; /* Padding */
  text-align: center; /* Center text */
  text-decoration: none; /* Remove underline */
  display: inline-block; /* Make the button an inline element */
  font-family: 'Spectral', serif;
  font-size: 13px; /* Increase font size */
  margin: 4px 2px; /* Add some margin */
  cursor: pointer; /* Add a pointer cursor on hover */
  transition: background-color 0.3s ease; /* Add a transition effect on hover */
}

/* Change the background color on hover */
.cool-button:hover {
  background-color: #F89880;
}

/* Add a hover effect on the text */
.cool-button span {
  display: inline-block; /* Make the text an inline element */
  transition: transform 0.3s ease; /* Add a transition effect on hover */
}

/* Scale up the text on hover */
.cool-button:hover span {
  transform: scale(1.2);
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
Hanzhang Yin
</h1>


<button class="cool-button" onclick="myFunction1()">
  <span>About Me!</span>
</button>


<div id="myDIV1">

<p>
<img src="avatar2.png" alt="me" width="125" height="150.5"> 
</p>

<p>
  I am pursuing a Bachelor degree at the <a href="https://uconn.edu/"> University of Connecticut</a>. I realized my interest in mathematics in my sophomore year and have taken several advanced math classes such as abstract algebra, real analysis, and topology. My research interests include, <a href="https://en.wikipedia.org/wiki/Algebraic_combinatorics"> Algebraic Combinatorics</a>, and <a href="https://en.wikipedia.org/wiki/Graph_theory"> Graph Theory</a>. In my junior year, I worked on two reading projects about combinatorics, which discussed counting walks and young tableaux. It is exciting for me to look for patterns and use multiple aspects of mathematics to solve problems. For example, I am using dominos to construct Fibonacci numbers. My research projects are usually focusing on dominating sets of graphs. My passion drives me to be a tutor assisting non-math degree students in learning calculus and differential equations. After graduation, I plan to continue my research in graduate school and keep discovering the connections between different areas of mathematics.
</p>

</div>

<button class="cool-button" onclick="myFunction2()">
  <span>Research & Interests</span>
</button>

<div id="myDIV2">
<h3>
<a href="Combinatorics.html">Combinatorics </a>
</h3>

<h3>
<a href="REU.html">Domination of Cartesian Product of Complete Graphs (Research Experience for Undergraduate Students)</a>
</h3>
		  
<h3>
<a href="toggling_on_dominating_sets_of_path_graphs.html">Toggling on Path Graphs </a>
</h3>
</div>

<button class="cool-button" onclick="myFunction3()">
  <span>Elseworlds</span>
</button>

<div id="myDIV3">
<h3>
<a href="elseworlds/fine_tune.html">Fine Tune GPT</a>
</h3>

<h3>
<a href="elseworlds/group_ring.html">Group Algebra in SageMath</a>
</h3>

<h3>
<a href="elseworlds/add_exsisting_directory_to_github.html">Add Exsisting Directory to Github</a>
</h3>

<h3>
<a href="elseworlds/smithnormalform.html">Smith Normal Form </a>
</h3>

<h3>
<a href="elseworlds/pandoc.html">Pandoc </a>
</h3>

<h3>
<a href="elseworlds/path.html">Path Variables </a>
</h3>

<h3>
<a href="elseworlds/brew.html">Homebrew </a>
</h3>

<h3>
<a href="elseworlds/R.html">R (Data)</a>
</h3>

</div>
		  

<h4>
<a href="cv_hanzhang_yin.pdf">Curriculum vitae (C.V.)</a>
</h4>
			     
<h4>
Visit my <a href="https://github.com/HanzhangYin">GitHub</a>
</h4>

<h4>
Email me: <a href="mailto:hanzhang.yin@uconn.edu">hanzhang.yin@uconn.edu</a>
</h4>
<h4>
Call me: <a href="tel:+19599295263">(959) 929-5263</a>
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

<script>
function myFunction3() {
  var x = document.getElementById("myDIV3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
</script>

</html>
