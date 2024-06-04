import api from "./api"
import schema from './schema'

type StatioRequest = {
  city?: string
  type: string
  plan: string
  periodicity: string
  day: string
  tariff: string
}

export async function getStations({ city, type, plan, periodicity, day, tariff }: StatioRequest) {

  const filterParams = city ? {
    city,
    type,
    plan,
    periodicity,
    day,
    tariff
  } : {
    type,
    plan,
    periodicity,
    day,
    tariff
  }
  console.log(filterParams)
  const method = schema.GET.method
  const url = mountURL({ ...filterParams })
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


function mountURL({ city, type, plan, periodicity, day, tariff }: StatioRequest) {

  let uri = 'stations/1g_uXx2sEpwnhwWBtuD_KAfeqe3fhgwHXtOg5muG7mXM/'
  if (city) {
    uri = uri + city + '?tariff=' + tariff + '&type=' + type + '&plan=' + plan + '&time=' + periodicity + '&dayOfWeek=' + day
  } else {
    uri = uri + 'São Paulo' + '?tariff=' + tariff + '&type=' + type + '&plan=' + plan + '&time=' + periodicity + '&dayOfWeek=' + day
  }
  return uri
}

