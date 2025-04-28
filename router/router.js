// DO NOT CHANGE ANYTHING IN THIS FILE

const routes = [
  {
    id: "home",
    html: "home/home.html",
  },
  {
    id: "project1",
    html: "project1/project1.html",
    js: "project1/project1.js",
  },
  {
    id: "project2",
    html: "project2/project2.html",
    js: "project2/project2.js",
  },
  {
    id: "project3",
    html: "project3/project3.html",
    js: "project3/project3.js",
  },
  {
    id: "project4",
    html: "project4/project4.html",
    js: "project4/project4.js",
  },
  {
    id: "rockpage",
    html: "project4/rockpage/rockpage.html",
    js: "project4/rockpage/rockpage.js",
  },
];

function loadRoute(route) {
  return new Promise((resolve, reject) => {
    fetch(route.html)
      .then((response) => response.text())
      .then((html) => {
        const routeDiv = document.createElement("div");
        routeDiv.id = `${route.id}-page`;
        if (route.id != "home") {
          routeDiv.style.display = "none";
        }
        routeDiv.innerHTML = html;
        routeDiv.classList.add("pages");

        document.body.appendChild(routeDiv);

        if (route.js) {
          const script = document.createElement("script");
          script.src = route.js;
          script.onload = resolve;
          script.onerror = reject;
          document.body.appendChild(script);
        } else {
          resolve();
        }
      })
      .catch(reject);
  });
}

Promise.all(routes.map((route) => loadRoute(route)))
  .then(() => {
    const script = document.createElement("script");
    script.src = "script.js";
    document.body.appendChild(script);
  })
  .catch((error) => {
    console.error(`Failed to load routes: ${error}`);
  });
