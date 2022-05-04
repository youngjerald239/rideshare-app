import {useEffect, useState} from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import Map from './components/Map'
import {useRouter} from 'next/router'
import RideSelector from './components/RideSelector'
import Link from 'next/link'

const Confirm = () => {
    //save the location and destination entry
    const router = useRouter()
    const {pickup, dropoff} = router.query
    //console.log("Pickup", pickup)
    //console.log("Dropoff", dropoff)

    const [pickupCoordinates, setPickupCoordinates] = useState([0, 0])
    const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0])

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
    //pass coordinates through map and rideselector
  return (
    <Wrapper>
    <ButtonContainer>
      <Link href="/search">
      <BackButton src = "https://cdn-icons.flaticon.com/png/128/2099/premium/2099238.png?token=exp=1651270466~hmac=9cda45a5f7578e4fcc0cd9c093476a3a" />
      </Link>  
    </ButtonContainer>
        <Map
           pickupCoordinates={pickupCoordinates}
           dropoffCoordinates={dropoffCoordinates}
         />
        <RideContainer>
        <RideSelector
            pickupCoordinates={pickupCoordinates}
           dropoffCoordinates={dropoffCoordinates}
        />
   
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

const ButtonContainer = tw.div`
rounded-full absolute top-4  left-4 z-10 bg-green-300 shadow-md cursor-pointer 
`

const BackButton = tw.img`
h-full object-contain h-8 w-8
`

const Wrapper = tw.div`
flex h-screen flex-col 
`
const RideContainer = tw.div`
flex flex-1 flex-col bg-gray-600 h-1/2
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