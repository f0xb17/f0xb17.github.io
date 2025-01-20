const config = "./config/config.json";

async function loadConfig() {
  try {
    const response = await fetch(config)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      return data
    } else {
      throw new Error("Error: " + response.status)
    }
  } catch (e) {
    console.log("Error: " + e)
  }
}
