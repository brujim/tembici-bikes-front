import api from "./api"

export async function getStations() {

  const method = 'GET'
  const url = '/stations/1g_uXx2sEpwnhwWBtuD_KAfeqe3fhgwHXtOg5muG7mXM/Testing'
  const headers = {
    'Content-Type': 'application/json',
  }
  const options = {
    method,
    url,
    headers
  }

  const response = await api.request(options)
  return response.data
}
