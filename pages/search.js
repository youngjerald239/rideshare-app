import React from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'

const search = () => {
  return (
   <Wrapper>
      {/* Button Container */}
      <ButtonContainer>
          <BackButton src = "https://cdn-icons.flaticon.com/png/128/2099/premium/2099238.png?token=exp=1651270466~hmac=9cda45a5f7578e4fcc0cd9c093476a3a" />
      </ButtonContainer>
      {/* Input container */}
      {/* Saved Places */}
      {/* Confirm Location */}

   </Wrapper>
  )
}

export default search

const Wrapper = tw.div`
bg-gray-600 h-screen
`

const ButtonContainer = tw.div`
px-4 bg-green-300
`

const BackButton = tw.img`
h-12 p-2
`