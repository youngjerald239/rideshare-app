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
          <ActionButtonImage src= "https://cdn-icons-png.flaticon.com/128/741/741407.png" />
            Get a Ride
          </ActionButton>
          <ActionButton>
          <ActionButtonImage src = "https://cdn-icons.flaticon.com/png/128/737/premium/737967.png?token=exp=1651250381~hmac=dce4036774523a841ac67115ef994c44" />
            Order Food
          </ActionButton>
          <ActionButton>
          <ActionButtonImage src = "https://cdn-icons-png.flaticon.com/128/1261/1261163.png" />
            Grocery Delivery
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
flex
`

const ActionButton = tw.div`
bg-blue-300 flex-1
`

const ActionButtonImage = tw.img``