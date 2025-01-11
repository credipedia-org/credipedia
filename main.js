const params = new URLSearchParams(document.location.search);
if (params.has("path")) {
  let path = params.get("path");
  // Get HTML and metadata for article on English Wikipedia
  let base = "https://api.wikimedia.org/core/v1/wikipedia/en/page/";
  let url = base + "/" + path + "/with_html";
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      res.html
        .replaceAll("/n", "<br>")
        .replaceAll("en.wikipedia.org", "credipedia.org");
      document.getElementById("content").innerHTML = res.html;
      document.getElementById("title").innerHTML = res.title;
      console.log(res);
    })
    .catch(console.error);
}
