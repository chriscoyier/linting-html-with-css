javascript:(function() {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://cdn.jsdelivr.net/gh/chriscoyier/linting-html-with-css/lint.css";
  document.getElementsByTagName("head")[0].appendChild(link);
})();
