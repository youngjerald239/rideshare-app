import React from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import { carList } from '../data/carList'

const RideSelector = () => {
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
                   <Price>$15.00</Price>
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

const CarList = tw.div``

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
flex-1 overflow-y-scroll
`