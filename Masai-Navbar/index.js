function masainav() {
  document.getElementById("drpdn").classList.toggle("rj");
}
window.onclick = function (e) {
  if (!e.target.matches(".dropbtn")) {
    var res = document.getElementsByClassName("dropdown-other");
    var i;
    for (i = 0; i < res.length; i++) {
      var ans = res[i];
      if (ans.classList.contains("rj")) {
        ans.classList.remove("rj");
      }
    }
  }
};
