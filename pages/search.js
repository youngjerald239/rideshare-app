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
            <Input placeholder= "Enter your location" />
            <Input placeholder= "Enter your Destination"/>
        </InputBoxes>
        <PlusIcon src="https://cdn-icons-png.flaticon.com/512/1665/1665731.png"/>

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
flex items-center
`

const FromToIcons = tw.div`
w-7 my-3 flex flex-col 
`

const Circle = tw.img``

const Line = tw.img``

const Square = tw.img``

const InputBoxes = tw.div`
flex flex-col flex-1 
`

const Input = tw.input`
h-10 bg-gray-300 my-2 rounded-2 p-2 outline-none border-none
`

const PlusIcon = tw.img`
w-10 h-10 ml-3
`

