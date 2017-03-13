javascript:(function() {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://cdn.rawgit.com/chriscoyier/linting-html-with-css/master/lint.css";
  document.getElementsByTagName("head")[0].appendChild(link);
})();
