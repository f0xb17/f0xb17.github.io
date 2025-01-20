const navigate = url => {
  history.pushState(null, null, url)
  router()
}

const router = async () => {
  const routes = [
    { path: '/', view: './pages/home' },
    { path: '/about', view: './pages/about' },
    { path: '/contact', view: './pages/contact' },
  ]
  const currentRoute = routes.find(route => window.location.pathname === route.path)
  if (currentRoute) {
    const view = await fetchContentFromFile(currentRoute.view)
    const content = document.getElementById(config.Content.id)
    content.innerHTML = view
  }
}
