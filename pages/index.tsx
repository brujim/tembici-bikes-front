import React, { useCallback, useState } from 'react'
import Head from 'next/head'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import type { NextPage } from 'next'
import { Onboarding } from '../src/components/Onboarding'

const Home: NextPage = () => {
  const containerStyle = {
    width: '100vw',
    height: '100vh'
  }

  const center = {
    lat: -23.556831106,
    lng: -46.653830718
  }

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCInglOulrm7ViPoBXW5N6E_lNKNIgVPS4'
  })

  const [map, setMap] = useState(null)
  const [onBoarding, setOnboarding] = useState(true)

  const onLoad = React.useCallback(function callback(map:any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map:any) {
    setMap(null)
  }, [])
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
        <meta property="og:title" content="Tembici" />
        <meta
          name="description"
          content="Localize bicicletas de aluguel com simplicidade!"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        {onBoarding ? (
          <Onboarding />
        ) : (
          <div className="test">
            {isLoaded && (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                onLoad={onLoad}
                onUnmount={onUnmount}
                clickableIcons={false}
              ></GoogleMap>
            )}
          </div>
        )}
      </main>
    </>
  )
}

export default Home
