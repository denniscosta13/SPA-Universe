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
    
    this.handleBackgroundImage(pathname)
  }

  handleBackgroundImage(bgPath) {
    if(bgPath == '/universo') {
      document.body.style.backgroundImage = "url('../assets/universe-bg.png')";
      console.log('universo')
    } else if(bgPath == '/exploracao') {
      document.body.style.backgroundImage = "url('../assets/exploration-bg.png')";
      console.log('explora')
    } else {
      document.body.style.backgroundImage = "url('../assets/home-bg.png')";
      console.log('home')

    }
  }
  
}