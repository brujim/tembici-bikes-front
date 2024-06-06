import api from "./api"
import schema from './schema'

type StationRequest = {
  city?: string
  type: string
  plan: string
  periodicity: string
  day: string
  tariff: string
}

type StationKeyword = {
  searchParam: string
}


export async function getStations({ city, type, plan, periodicity, day, tariff }: StationRequest) {

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


function mountURL({ city, type, plan, periodicity, day, tariff }: StationRequest) {

  let uri = 'stations/1g_uXx2sEpwnhwWBtuD_KAfeqe3fhgwHXtOg5muG7mXM/'
  if (city) {
    uri = uri + city + '?tariff=' + tariff + '&type=' + type + '&plan=' + plan + '&time=' + periodicity + '&dayOfWeek=' + day
  } else {
    uri = uri + 'São Paulo' + '?tariff=' + tariff + '&type=' + type + '&plan=' + plan + '&time=' + periodicity + '&dayOfWeek=' + day
  }
  return uri
}


export async function getStationByKeyword({ searchParam }: StationKeyword) {
  const method = schema.GET.method
  const url = `stations/1g_uXx2sEpwnhwWBtuD_KAfeqe3fhgwHXtOg5muG7mXM/Testing/search/${searchParam}`
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
