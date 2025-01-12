const params = new URLSearchParams(document.location.search);
if (params.has("path")) {
  let path = params.get("path");
  let lang;
  if (params.has("lang")) {
    lang = params.get("lang");
  } else {
    lang = "en";
  }
  // Get HTML and metadata for article on English Wikipedia
  let base = "https://api.wikimedia.org/core/v1/wikipedia/";
  let url = base + lang + "/page/" + path + "/with_html";
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      html = res.html
        .replaceAll("/n", "<br>")
        .replaceAll("wikipedia.org", "credipedia.org");
      document.getElementById("content").innerHTML = res.html;
      document.getElementById("title").innerText = res.title;
      console.log(res);
      document.querySelectorAll('[href*="wikipedia.org"]').forEach((link) => {
        link.href = link.href.replace("wikipedia.org", "credipedia.org");
      });
    })
    .catch(console.error);
}
