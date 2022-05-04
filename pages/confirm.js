import {useEffect, useState} from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import Map from './components/Map'
import {useRouter} from 'next/router'
import RideSelector from './components/RideSelector'

const Confirm = () => {
    //save the location and destination entry
    const router = useRouter()
    const {pickup, dropoff} = router.query
    //console.log("Pickup", pickup)
    //console.log("Dropoff", dropoff)

    const [pickupCoordinates, setPickupCoordinates] = useState()
    const [dropoffCoordinates, setDropoffCoordinates] = useState()

    const getPickupCoordinates = (pickup) => {
        //fetch geocoding map api data
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
         new URLSearchParams({
             access_token: "pk.eyJ1IjoieW91bmdqZXJhbGQyMzkiLCJhIjoiY2t5Y2FtenBnMG5jczJwbXJ4c3QxbGFmeSJ9.8AsktT65tLtjWUniauoLqw",
             limit: 1
         })
        )
        .then(response => response.json())
        .then(data => {
          //console.log(data.features[0].center)
          setPickupCoordinates(data.features[0].center)
        })
        //access_token
    }

    const getDropoffCoordinates = (dropoff) => {
        //fetch geocoding map api data
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
         new URLSearchParams({
             access_token: "pk.eyJ1IjoieW91bmdqZXJhbGQyMzkiLCJhIjoiY2t5Y2FtenBnMG5jczJwbXJ4c3QxbGFmeSJ9.8AsktT65tLtjWUniauoLqw",
             limit: 1
         })
        )
        .then(response => response.json())
        .then(data => {
          //console.log("Dropoff")
          //console.log(data.features[0].center)
          setDropoffCoordinates(data.features[0].center)
        })
    }

    useEffect(() => {
        getPickupCoordinates(pickup)
        getDropoffCoordinates(dropoff)
       
    }, [pickup, dropoff])

  return (
    <Wrapper>
        <Map
           pickupCoordinates={pickupCoordinates}
           dropoffCoordinates={dropoffCoordinates}
         />
        <RideContainer>
        <RideSelector/>
   
        <BorderContainer>

        </BorderContainer>
        <ConfirmButtonContainer>
            <ConfirmButton src="https://cdn-icons-png.flaticon.com/512/7317/7317601.png"/>
                Confirm Ride
        </ConfirmButtonContainer>
        
        </RideContainer>
    </Wrapper>
  )
}

export default Confirm

const Wrapper = tw.div`
flex h-screen flex-col 
`
const RideContainer = tw.div`
flex flex-1 flex-col bg-gray-600 
`

const BorderContainer = tw.div`
border-t-2
`

const ConfirmButtonContainer = tw.div`
flex flex-col justify-center my-4 mx-4 items-center bg-black text-white rounded-lg cursor-pointer text-xl 
`

const ConfirmButton = tw.img`
h-10 w-10 
`