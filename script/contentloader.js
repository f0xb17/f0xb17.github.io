document.addEventListener('DOMContentLoaded', async () => {
  const config = await loadConfig()

  function createHeader() {
    const header = document.getElementById(config.Header.id)
    if (config.Logo.visible) {
      header.innerHTML += "<img width='" + config.Logo.width + "' height='" + config.Logo.height + "' src='" + config.Logo.src + "'>"
    }
    if (config.Title.visible) {
      header.innerHTML += config.Title.text
    }
  }

  async function fetchContentFromFile(page) {
    const content = document.getElementById(config.Content.id)
    try {
      const response = await fetch(page)
      if (response.ok) {
        const text = await response.text()
        console.log(text)
        content.innerHTML = text
      } else {
        throw new Error("Error: " + response.status)
      }
    } catch (e) {
      console.log("Error: " + e)
    }
  }

  function createFooter() {
    const footer = document.getElementById(config.Footer.id)
    if (config.Footer.CopyrightNotice.visible) {
      footer.innerHTML += config.Footer.CopyrightNotice.text
    }
    if (config.Footer.PowerByNotice.visible) {
      footer.innerHTML += config.Footer.PowerByNotice.text
    }
  }

  createHeader()
  fetchContentFromFile("./pages/about")
  if (config.Footer.visible) {
    createFooter()
  }
})
