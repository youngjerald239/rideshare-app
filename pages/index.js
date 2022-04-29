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
          Image Profile
        </Header>
        {/* ActionButtons */}
        {/* InputButton */}
      
      
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
flex flex-col bg-red-300 h-screen
`


const ActionItems = tw.div`
flex-1
`

const Header = tw.div``