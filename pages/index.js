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
            <UserImage />
          </Profile>

        </Header>
        {/* ActionButtons */}
        {/* InputButton */}
      
      
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
flex flex-col bg-black-700 h-screen
`


const ActionItems = tw.div`
flex-1
`

const Header = tw.div``

const PiedmontLogo = tw.img`
  h-28
`