import Head from 'next/head'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import GoogleMapReact from 'google-map-react'

const MapPage: NextPage = () => {
  const router = useRouter()

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

  const array = [
    {
      geometry: {
        location: {
          lat: -22.965183,
          lng: -43.180666
        }
      }
    }
  ]

  const test = (map: any, maps: any, places: any) => {
    const markers: any = []
    const infowindows: any = []
    const iconImage = document.createElement('img')
    iconImage.src = '/images/logo32.png'
    console.log(map)
    places.forEach((place: any) => {
      markers.push(
        new maps.Marker({
          position: {
            lat: place.geometry.location.lat,
            lng: place.geometry.location.lng
          },
          map
        })
      )

      // infowindows.push(
      //   new maps.InfoWindow({
      //     content: getInfoWindowString(place)
      //   })
      // )
    })

    markers.forEach((marker: any, i: number) => {
      marker.addListener('click', () => {
        infowindows[i].open(map, marker)
      })
      console.log(marker)
    })
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
        <div className="h-[100vh] w-[100vw]">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyCInglOulrm7ViPoBXW5N6E_lNKNIgVPS4'
            }}
            defaultCenter={{ lat: -22.970722, lng: -43.182365 }}
            defaultZoom={15}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => test(map, maps, array)}
          />
          {/* </GoogleMapReact> */}
        </div>
      </main>
    </>
  )
}

export default MapPage
