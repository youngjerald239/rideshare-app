import {useEffect} from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import Map from './components/Map'

const Confirm = () => {

    const getCoordinates = () => {
        const location = "Santa Monica"
        //fetch geocoding map api data
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?` +
         new URLSearchParams({
             access_token: "pk.eyJ1IjoieW91bmdqZXJhbGQyMzkiLCJhIjoiY2t5Y2FtenBnMG5jczJwbXJ4c3QxbGFmeSJ9.8AsktT65tLtjWUniauoLqw",
             limit: 1
         })
        )
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        //access_token
    }

    useEffect(() => {
        getCoordinates()
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