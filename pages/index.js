import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import tw from 'tailwind-styled-components/dist/tailwind'
import Map from './components/Map'



export default function Home() {

  
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        {/* Header */}
        <Header>
          {/* self closing tag */}
          <PiedmontLogo src= "https://res.cloudinary.com/dbgpqig0z/image/upload/v1642268523/Screenshot_153_vjsmta.png" />
          <Profile>
            <Name>Jerald Young</Name>
            <UserImage 
              src = "https://scontent-ort2-2.xx.fbcdn.net/v/t1.6435-9/105337597_3183482085064983_2756361960060597087_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lXCizf4mKFwAX8e3FpH&_nc_ht=scontent-ort2-2.xx&oh=00_AT8aEg9YngTditG0tQOHFf-q1SeXhh-6yxA_kNgR10dUkA&oe=6292428D"
            />
          </Profile>

        </Header>
        {/* ActionButtons */}
        <ActionButtons>
          <ActionButton>
            Get a Ride
          </ActionButton>
          <ActionButton>
            Order Food
          </ActionButton>
          <ActionButton>
            Get Groceries
          </ActionButton>
        </ActionButtons>
        {/* InputButton */}
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
flex flex-col bg-gray-600 h-screen
`


const ActionItems = tw.div`
flex-1 p-4
`

const Header = tw.div`
flex justify-between items-center
`

const PiedmontLogo = tw.img`
  h-28
`

const Profile = tw.div`
flex items-center
`

const Name = tw.div`
mr-4 w-20 text-sm
`

const UserImage = tw.img`
h-12 w-12 rounded-full border border-blue-300 p-px
`

const ActionButtons = tw.div`

`

const ActionButton = tw.div`

`