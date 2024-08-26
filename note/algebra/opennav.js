function openNav() {
    var width = window.innerWidth > 768 ? "250px" : "200px";
    document.getElementById("mySidenav").style.width = width;
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}