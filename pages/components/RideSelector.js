import React from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'

const RideSelector = () => {
  return (
    <Wrapper>
        <Title>Choose a ride, or swipe up for more</Title>
        <CarList>
            <Car>
                <CarImage src = "https://cdn-icons-png.flaticon.com/512/5965/5965376.png" />
            </Car>
        </CarList>
    </Wrapper>
  )
}

export default RideSelector

const CarList = tw.div``

const Car = tw.div``

const CarImage = tw.img``

const Title = tw.div`
text-green-300 text-center text-xs py-2 border-b
`

const Wrapper = tw.div`
flex-1 
`