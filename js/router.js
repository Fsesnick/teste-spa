export class Router {
  routes = {} 

  add(routeName, page) {
    this.routes[routeName] = page
  }
  
  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    this.handle()
    this.background()
  }

  handle() {
    const { pathname }  = window.location
    const route = this.routes[pathname] || this.routes[404]
    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html
    })
  }
  
  background(){
    const body = document.body;
    const currentPath = window.location.pathname;

    // Check the current route and update the background color accordingly
    if (currentPath === '/') {
      body.style.backgroundImage = "url('mountains-universe-1.png')";
  } else if (currentPath === '/universo') {
      body.style.backgroundImage = "url('mountains-universe-2.png')";
  } else if (currentPath === '/exploracao') {
      body.style.backgroundImage = "url('mountains-universe-3.png')";
  }

}
}