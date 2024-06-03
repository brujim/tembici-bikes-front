import React, { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'

const Mapa = ({ stations }) => {
  // Estado para armazenar as marcações
  const [marcacoes, setMarcacoes] = useState([])

  // Função para criar as marcações no mapa
  const criarMarcacoes = (map, maps, places) => {
    const markers = []
    places.forEach((place) => {
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
      markers.push(marker)
    })
    // Atualiza o estado das marcações
    setMarcacoes(markers)
  }

  // Efeito para observar as alterações no estado das estações
  useEffect(() => {
    // Chama a função para criar as marcações sempre que o estado das estações mudar
    if (stations.length > 0) {
      const { map, maps } = mapsRef.current
      criarMarcacoes(map, maps, stations)
    }
  }, [stations])

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'sua-chave-aqui'
        }}
        defaultCenter={{
          lat: -23.556831106,
          lng: -46.653830718
        }}
        defaultZoom={15}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => {
          // Salva a referência do mapa e das API do Google Maps
          mapsRef.current = { map, maps }
          // Cria as marcações no mapa inicialmente
          criarMarcacoes(map, maps, stations)
        }}
      ></GoogleMapReact>
    </div>
  )
}

export default Mapa
