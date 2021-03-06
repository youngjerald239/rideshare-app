import {useState} from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import Link from 'next/link'

const search = () => {
    const [pickup, setPickup] = useState("")
    const [dropoff, setDropoff] = useState("")

  return (
   <Wrapper>
      {/* Button Container */}
      <ButtonContainer>
        <Link href ="/">
          <BackButton src = "https://cdn-icons.flaticon.com/png/128/2099/premium/2099238.png?token=exp=1651270466~hmac=9cda45a5f7578e4fcc0cd9c093476a3a" />
          </Link>
      </ButtonContainer>
      {/* Input container */}
      <InputContainer>
        <FromToIcons>
            <Circle src = "https://cdn-icons-png.flaticon.com/128/747/747509.png"/>
            <Line src = "https://cdn-icons.flaticon.com/png/512/5202/premium/5202846.png?token=exp=1651286802~hmac=deaba3ce619c2b713675ecb98bf499f4"/>
            <Square src = "https://cdn-icons-png.flaticon.com/128/747/747504.png"/>
        </FromToIcons>
        <InputBoxes>
            {/* Add the onChange to enter text in the search field */}
            <Input 
            placeholder= 'Your pickup location?'
            value={pickup}
            onChange={(e)=> setPickup(e.target.value)}
             />

            <Input 
            placeholder= "Your destination?"
            value={dropoff}
            onChange={(e)=> setDropoff(e.target.value)}
            />

        </InputBoxes>
        <PlusIcon src="https://cdn-icons-png.flaticon.com/512/1665/1665731.png"/>

      </InputContainer>
      
      {/* Saved Places */}
      <SavedPlaces>
          <StarIcon src="https://cdn-icons-png.flaticon.com/512/7422/7422320.png"/>
          Saved Places
      </SavedPlaces>
      {/* Confirm Location */}
      <Link href={{
          pathname: "/confirm",
          query:{
              pickup: pickup,
              dropoff: dropoff
          }
      }}>
       <ConfirmIconButtonContainer>
          <ConfirmIcon src="https://cdn-icons-png.flaticon.com/512/7317/7317601.png"/>
          Confirm Destination
       </ConfirmIconButtonContainer>
     </Link>
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
h-12 p-2 transform hover:scale-110 transition cursor-pointer
`

const InputContainer = tw.div`
flex items-center px-4 mb-2
`

const FromToIcons = tw.div`
w-7 mr-2 mb-2 flex flex-col items-center
`

const Circle = tw.img`
h-5
`

const Line = tw.img`
h-8 mt-1 mb-1
`

const Square = tw.img`
h-5
`

const InputBoxes = tw.div`
flex flex-col flex-1 
`

const Input = tw.input`
h-10 bg-gray-300 my-2 rounded-2 p-2 outline-none border-none
`

const PlusIcon = tw.img`
w-10 h-10 ml-3
`

const SavedPlaces = tw.div`
flex items-center bg-gray-300 px-4 py-2
`

const StarIcon = tw.img`
bg-green-200 rounded-full w-10 h-10 p-2 mr-2
`

const ConfirmIconButtonContainer = tw.div`
flex flex-col justify-center mt-4 ml-4 mr-4 items-center bg-black text-white rounded-lg cursor-pointer 
`

const ConfirmIcon = tw.img`
h-10 w-10 
`

