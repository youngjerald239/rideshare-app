import React from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import mapboxgl from '!mapbox-gl'
import { useEffect } from 'react'

mapboxgl.accessToken = 
'pk.eyJ1IjoieW91bmdqZXJhbGQyMzkiLCJhIjoiY2t5Y2FtenBnMG5jczJwbXJ4c3QxbGFmeSJ9.8AsktT65tLtjWUniauoLqw'

const Map = () => {
    useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-99.29011, 39.39172],
      zoom: 3
    });
  })

  return (
   <Wrapper id = "map"></Wrapper>
  )
}

export default Map

const Wrapper = tw.div`
flex-1 flex-col bg-red-300 h-screen
`