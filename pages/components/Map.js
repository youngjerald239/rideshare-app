import React from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import mapboxgl from '!mapbox-gl'
import { useEffect } from 'react'

mapboxgl.accessToken = 
'pk.eyJ1IjoieW91bmdqZXJhbGQyMzkiLCJhIjoiY2t5Y2FtenBnMG5jczJwbXJ4c3QxbGFmeSJ9.8AsktT65tLtjWUniauoLqw'

//The Map style will display
const Map = (props) => {
    console.log(props)

    useEffect(() => {
      const map = new mapboxgl.Map({
       container: "map",
       style: 'mapbox://styles/mapbox/streets-v11',
       center: [-99.29011, 39.39172],
       zoom: 3
     })
     //Props for pickup map marker locations to appear on map
    if(props.pickupCoordinates){
        addToMap(map, props.pickupCoordinates)
    }
    //Props for dropoff map marker locations to appear on map
    if(props.dropoffCoordinates){
        addToMap(map, props.dropoffCoordinates)
    }
    //Props to auto zoom between both coordinates' map markers
    if(props.pickupCoordinates && props.dropoffCoordinates){
      map.fitBounds([
          props.pickupCoordinates,
          props.dropoffCoordinates
      ], {
          padding: 60
      })  
    }
  }, [props.pickupCoordinates, props.dropoffCoordinates])

  //Adds the marker icon to the map
  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker()
    .setLngLat(coordinates)
    .addTo(map)
  }

  return (
   <Wrapper id = "map"></Wrapper>
  )
}

export default Map

const Wrapper = tw.div`
flex-1 h-1/2
`