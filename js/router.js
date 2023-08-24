export class Router {
  routes = {}

  add(routeName, path) {
    this.routes[routeName] = path
  }

  route(event) {
    event = event || window.event;
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    this.handle()
  }

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]

    fetch(route)
      .then(page => page.text())
      .then(htmlText => {
        document.querySelector('#app').innerHTML = htmlText
      })
  }
  
}