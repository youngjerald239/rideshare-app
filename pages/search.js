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
      <InputContainer>
        <FromToIcons>
            <Circle src = "https://cdn-icons-png.flaticon.com/128/747/747509.png"/>
            <Line src = "https://cdn-icons.flaticon.com/png/512/5202/premium/5202846.png?token=exp=1651286802~hmac=deaba3ce619c2b713675ecb98bf499f4"/>
            <Square src = "https://cdn-icons-png.flaticon.com/128/747/747504.png"/>
        </FromToIcons>
        <InputBoxes>
            
        </InputBoxes>

      </InputContainer>
      
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

const InputContainer = tw.div`
bg-white
`

const FromToIcons = tw.div`
w-6 flex flex-col p-1
`

const Circle = tw.img``

const Line = tw.img``

const Square = tw.img``

