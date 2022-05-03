import {useEffect, useState} from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import Map from './components/Map'

const Confirm = () => {

    const [pickupCoordinates, setPickupCoordinates] = useState()
    const [dropoffCoordinates, setDropoffCoordinates] = useState()

    const getPickupCoordinates = () => {
        const pickup = "Santa Monica"
        //fetch geocoding map api data
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
         new URLSearchParams({
             access_token: "pk.eyJ1IjoieW91bmdqZXJhbGQyMzkiLCJhIjoiY2t5Y2FtenBnMG5jczJwbXJ4c3QxbGFmeSJ9.8AsktT65tLtjWUniauoLqw",
             limit: 1
         })
        )
        .then(response => response.json())
        .then(data => {
          console.log(data.features[0].center)
        })
        //access_token
    }

    const getDropoffCoordinates = () => {
        const dropoff = "Los Angeles"
        //fetch geocoding map api data
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
         new URLSearchParams({
             access_token: "pk.eyJ1IjoieW91bmdqZXJhbGQyMzkiLCJhIjoiY2t5Y2FtenBnMG5jczJwbXJ4c3QxbGFmeSJ9.8AsktT65tLtjWUniauoLqw",
             limit: 1
         })
        )
        .then(response => response.json())
        .then(data => {
            console.log("Dropoff")
          console.log(data.features[0].center)
        })
    }

    useEffect(() => {
        getPickupCoordinates();
        getDropoffCoordinates()
    }, [])

  return (
    <Wrapper>
        <Map />
        <RideContainer>
        Ride Selector
        Confirm Button

        </RideContainer>
    </Wrapper>
  )
}

export default Confirm

const Wrapper = tw.div`
flex h-screen flex-col
`
const RideContainer = tw.div`
flex-1 
`