import Head from 'next/head'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import GoogleMapReact from 'google-map-react'
import { getStationByKeyword, getStations } from '../services/services'
import { SearchInput } from '../src/components/SearchInput'
import { BottomTabs } from '../src/components/BottomTabs'
import { FilterModal } from '../src/components/FilterModal'
import { Loading } from '../src/components/Loading'
import usePosition from '../src/stores/usePosition'
import { BikesStationModal } from '../src/components/BikesStationModal/BikesStationModal'
import { SearchModal } from '../src/components/SearchModal'

const MapPage: NextPage = () => {
  const router = useRouter()
  const [loadMap, setLoadMap] = useState(false)
  const [firstMapLoad, setFirstMapLoad] = useState(true)
  const [redoLoad, setRedoLoad] = useState(false)
  const [stations, setStations] = useState<any[]>()
  const [openFilters, setOpenFilters] = useState(false)
  const [city, setCity] = useState(null)
  const [type, setType] = useState(null)
  const [plan, setPlan] = useState(null)
  const [periodicity, setPeriodicity] = useState(null)
  const [day, setDay] = useState(null)
  const [filtersSelected, setFiltersSelected] = useState(false)
  const [geoMode, setGeoMode] = useState(false)
  const [tariff, setTariff] = useState('none')
  const [infoModal, setInfoModal] = useState(false)
  const [dataInfoModal, setDataInfoModal] = useState<any>()
  const { latitude, longitude, setPosition } = usePosition()
  const [searchParam, setSearchParam] = useState('')
  const [openSearchModal, setOpenSearchModal] = useState(true)
  const [waitingSearchResponse, setWaitingSearchResponse] = useState(false)
  const [searchResponse, setSearchResponse] = useState<any[]>([])

  const filterObjectWithCity = {
    setters: [setCity, setType, setPlan, setPeriodicity, setDay],
    states: [city, type, plan, periodicity, day]
  }

  const filterObjectWithoutCity = {
    setters: [setType, setPlan, setPeriodicity, setDay],
    states: [type, plan, periodicity, day]
  }

  const reloadOptions = {
    setRedoLoad,
    setFiltersSelected
  }

  function clearFilters() {
    filterObjectWithCity.setters.map((setter) => {
      setter(null)
    })
  }

  const onSearch = () => {
    setOpenSearchModal(true)
    setWaitingSearchResponse(true)
    getStationByKeyword({ searchParam: searchParam })
      .then((res) => {
        setWaitingSearchResponse(false)
        setSearchResponse(res)
      })
      .catch((err) => console.log(err))
  }

  const onSelectStation = (station: any) => {
    setDataInfoModal(station)
    setInfoModal(true)
  }

  function verifyFilters() {
    if (geoMode === false) {
      if (city && type && plan && periodicity && day) {
        switch (city) {
          case 'Rio de Janeiro':
            setPosition({
              latitude: -22.908333,
              longitude: -43.196388
            })
            break
          case 'São Paulo':
            setPosition({
              latitude: -23.550164466,
              longitude: -46.633664132
            })
            break
          case 'Curitiba':
            setPosition({
              latitude: -25.441105,
              longitude: -49.276855
            })
            break
          case 'Salvador':
            setPosition({
              latitude: -12.974722,
              longitude: -38.476665
            })
            break
          default:
            break
        }
        return true
      }
      return false
    }
    if (geoMode === true) {
      if (type && plan && periodicity && day) {
        return true
      }
      return false
    }
  }

  useEffect(() => {
    if (firstMapLoad) {
      setLoadMap(true)
      navigator.geolocation.getCurrentPosition((data) =>
        setPosition({
          latitude: data.coords.latitude,
          longitude: data.coords.longitude
        })
      )
      setTimeout(() => {
        setLoadMap(false)
        setFirstMapLoad(false)
      }, 2000)
    }
  }, [])

  useEffect(() => {
    const handleFilters = verifyFilters()
  }, [city, type, plan, periodicity, day])

  useEffect(() => {
    const firstAccess =
      localStorage.getItem('onboarding') === 'first' ? true : false
    const regularAccess = localStorage.getItem('onboarding') === 'done'
    if (firstAccess) {
      setOpenFilters(true)
    } else {
      if (regularAccess) {
        return
      } else {
        router.push('/')
      }
    }
  }, [])

  useEffect(() => {
    if (filtersSelected && redoLoad) {
      setLoadMap(true)
      const filters = {
        tariff: tariff,
        city: city ?? '',
        type: type ?? '',
        plan: plan ?? '',
        periodicity: periodicity ?? '',
        day: day ?? ''
      }
      getStations({ ...filters })
        .then((res) => {
          setStations(res)
          setLoadMap(false)
          setRedoLoad(false)
        })
        .catch((err) => {
          setLoadMap(false)
          setRedoLoad(false)
          console.log(err)
        })
    }
  }, [filtersSelected, tariff, redoLoad])

  const markers = (map: any, maps: any, places: any) => {
    console.log(maps)
    const markers: any = []
    const infowindows: any = []
    places.forEach((place: any, i: number) => {
      const marker = new maps.Marker({
        position: {
          lat: parseFloat(place.lat),
          lng: parseFloat(place.lng)
        },
        map,
        icon: {
          url: `/images/tariff/${place.tariff}.svg`,
          scaledSize: new maps.Size(50, 50)
        }
      })

      marker.addListener('click', () => {
        setInfoModal(true)
        setDataInfoModal(place)
      })

      markers.push(marker)
    })
  }

  if (loadMap) {
    return <Loading />
  }

  return (
    <>
      <Head>
        <title>Tembici</title>
        <meta
          property="og:description"
          content="Localize bicicletas de aluguel com simplicidade!"
        />
        <meta property="og:site_name" content="Tembici" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tembici - Onboarding" />
        <meta
          name="description"
          content="Localize bicicletas de aluguel com simplicidade!"
        />
        <link rel="icon" type="image/x-icon" href="/fav.ico" />
      </Head>
      <main>
        <div className="relative">
          {openFilters && (
            <div className="absolute top-0 z-30 font-normal">
              <FilterModal
                closeFilter={() => setOpenFilters(false)}
                settersWithCity={filterObjectWithCity.setters}
                statesWithCity={filterObjectWithCity.states}
                settersWithoutCity={filterObjectWithoutCity.setters}
                statesWithoutCity={filterObjectWithoutCity.states}
                clearFilters={clearFilters}
                sendFilters={setFiltersSelected}
                controller={setRedoLoad}
              />
            </div>
          )}
          <div className="absolute top-10 z-20 w-[90%] left-5">
            <SearchInput
              openFilters={() => setOpenFilters(true)}
              searchParam={searchParam}
              setter={setSearchParam}
              searchFunction={onSearch}
            />
            {/* <button onClick={() => console.log(cordinates)}>CONSOLE</button> */}
          </div>
          {openSearchModal && (
            <SearchModal
              stations={searchResponse}
              closeAction={() => setOpenSearchModal(false)}
              waitingAction={waitingSearchResponse}
              onSelectStation={onSelectStation}
            />
          )}
          <div className="h-[100vh] w-[100vw]">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: 'AIzaSyCInglOulrm7ViPoBXW5N6E_lNKNIgVPS4'
              }}
              defaultCenter={{
                lat: latitude ?? 0,
                lng: longitude ?? 0
              }}
              defaultZoom={16}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map, maps }) => {
                if (filtersSelected && !loadMap && stations) {
                  markers(map, maps, stations)
                  setFiltersSelected(false)
                }
              }}
            />
          </div>
          {infoModal && (
            <div className="absolute bottom-0 z-40">
              <BikesStationModal
                bikeStation={{
                  title: dataInfoModal.title,
                  address: dataInfoModal.address,
                  time: dataInfoModal.time,
                  type: dataInfoModal.type,
                  mech: parseFloat(dataInfoModal.mech),
                  electric: parseFloat(dataInfoModal.electric),
                  dayOfWeek: dataInfoModal.dayOfWeek,
                  tariff: dataInfoModal.tariff
                }}
                close={() => setInfoModal(false)}
              />
            </div>
          )}
          <div className="absolute z-20 bottom-0 w-[100vw]">
            <BottomTabs
              tariff={tariff}
              setter={setTariff}
              load={setRedoLoad}
              filtersUpdate={setFiltersSelected}
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default MapPage
