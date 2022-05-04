import React, {useEffect, useState} from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import { carList } from '../data/carList'

const RideSelector = ({pickupCoordinates, dropoffCoordinates}) => {
    const [rideDuration, setRideDuration]=useState(0)


    //get ride duration from Mapbox api
    //pickupCoordinates
    //fropoffCoordinates
    //template literal
    useEffect(()=>{
        fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoieW91bmdqZXJhbGQyMzkiLCJhIjoiY2t5Y2FtenBnMG5jczJwbXJ4c3QxbGFmeSJ9.8AsktT65tLtjWUniauoLqw`
        ).then((res)=>res.json())
        .then(data=>{
          setRideDuration(data.routes[0].duration/100)  //sets amount of routes available
        })
    }, [pickupCoordinates, dropoffCoordinates])//show update of changes for duration
  return (
    <Wrapper>
        <Title>Choose a ride, or swipe up for more</Title>
        <CarList>
        {carList.map((car, index)=>(
          <Car key={index}>
             <CarImage src={car.imgUrl} />
                <CarDetails>
                    <Service>{car.service}</Service>
                    <Time>5 min away</Time>
                </CarDetails>
                   <Price>{'$' + (rideDuration * car.multiplier).toFixed(2)}</Price>
            </Car>
        ))}
            
        </CarList>
    </Wrapper>
  )
}

export default RideSelector

const Price = tw.div`
text-sm
`

const Time = tw.div`
text-xs text-green-300
`

const Service = tw.div`
font-medium
`

const CarDetails = tw.div`
flex-1
`

const CarList = tw.div`
overflow-y-scroll
`

const Car = tw.div`
flex p-4 items-center
`

const CarImage = tw.img`
h-16 mr-4
`

const Title = tw.div`
text-green-300 text-center text-xs py-2 border-b
`

const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`