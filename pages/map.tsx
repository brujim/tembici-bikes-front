import Head from 'next/head'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import GoogleMapReact from 'google-map-react'
import { getStations } from '../services/services'
import { SearchInput } from '../src/components/SearchInput'
import { BottomTabs } from '../src/components/BottomTabs'
import { FilterModal } from '../src/components/FilterModal'

const MapPage: NextPage = () => {
  const router = useRouter()
  const [loadMap, setLoadMap] = useState(false)
  const [stations, setStations] = useState<any[]>()
  const [openFilters, setOpenFilters] = useState(false)
  const [city, setCity] = useState(null)
  const [type, setType] = useState(null)
  const [plan, setPlan] = useState(null)
  const [periodicity, setPeriodicity] = useState(null)
  const [day, setDay] = useState(null)

  const filterObject = {
    setters: [setCity, setType, setPlan, setPeriodicity, setDay],
    states: [city, type, plan, periodicity, day]
  }

  function clearFilters() {
    filterObject.setters.map((setter) => {
      setter(null)
    })
  }

  function handleFilters() {
    //CHAMADA API COM FILTROS
  }

  function verifyFilters() {
    if (city && type && plan && periodicity && day) {
      return true
    }
    return false
  }

  useEffect(() => {
    const firstAccess =
      localStorage.getItem('onboarding') === 'first' ? true : false
    if (firstAccess) {
      console.log('abre filter modal')
    } else {
      if (localStorage.getItem('onboarding') === 'done') {
        console.log('acesso normal')
      } else {
        router.push('/')
      }
    }
  }, [])

  useEffect(() => {
    getStations()
      .then((res) => {
        setStations(res)
        setLoadMap(true)
      })
      .catch((err) => console.log(err))
  }, [])

  const test = (map: any, maps: any, places: any) => {
    const markers: any = []
    const infowindows: any = []
    places.forEach((place: any) => {
      const marker = new maps.Marker({
        position: {
          lat: parseFloat(place.lat),
          lng: parseFloat(place.lng)
        },
        map,
        icon: {
          url: `/images/tariff/${place.tariff}.svg`, // Substitua 'URL_DA_SUA_IMAGEM' pela URL da imagem desejada
          scaledSize: new maps.Size(50, 50) // Tamanho da imagem (opcional)
        }
      })
      markers.push(marker)
    })

    //   // infowindows.push(
    //   //   new maps.InfoWindow({
    //   //     content: getInfoWindowString(place)
    //   //   })
    //   // )
    // })

    // markers.forEach((marker: any, i: number) => {
    //   marker.addListener('click', () => {
    //     infowindows[i].open(map, marker)
    //   })
    // })
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
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <div className="relative">
          {openFilters && (
            <div className="absolute top-0 z-30">
              <FilterModal
                closeFilter={() => setOpenFilters(false)}
                setters={filterObject.setters}
                states={filterObject.states}
                clearFilters={clearFilters}
              />
            </div>
          )}
          <div className="absolute top-10 z-20 w-[90%] left-5">
            <SearchInput openFilters={() => setOpenFilters(true)} />
          </div>
          {loadMap && (
            <div className="h-[100vh] w-[100vw]">
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: 'AIzaSyCInglOulrm7ViPoBXW5N6E_lNKNIgVPS4'
                }}
                defaultCenter={{
                  lat: -23.556831106,
                  lng: -46.653830718
                }}
                defaultZoom={15}
                yesIWantToUseGoogleMapApiInternals
                // key={filterSetted}
                onGoogleApiLoaded={({ map, maps }) => {
                  const verify = verifyFilters()
                  if (verify) {
                    test(map, maps, stations)
                  }
                }}
              ></GoogleMapReact>
            </div>
          )}
          <div className="absolute z-20 bottom-0 w-[100vw]">
            <BottomTabs />
          </div>
        </div>
      </main>
    </>
  )
}

export default MapPage
