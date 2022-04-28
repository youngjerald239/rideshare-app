import Head from 'next/head'
import Image from 'next/image'
import tw from 'tailwind-styled-components/dist/tailwind'

export default function Home() {
  return (
    <Wrapper>
      <Map>Map</Map>
      <ActionItems>Start</ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
flex flex-col bg-red-300 h-screen
`

const Map = tw.div`
bg-red-500 flex-1
`

const ActionItems = tw.div`
flex-1
`