import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import tw from 'tailwind-styled-components/dist/tailwind'
import Map from './components/Map'
import Link from 'next/link'
import {auth} from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import {useRouter} from 'next/router'



export default function Home() {
   const [user, setUser] = useState(null)
   const router = useRouter()

   useEffect(()=>{
    return onAuthStateChanged(auth, user => {
      if (user){
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL
        })
      } else {
        setUser(null)
        router.push('/login')
      }
    })
   }, [])
  
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        {/* Header */}
        <Header>
          {/* self closing tag */}
          <PiedmontLogo src= "https://res.cloudinary.com/dbgpqig0z/image/upload/v1642268523/Screenshot_153_vjsmta.png" />
          <Profile>
            <Name>{user && user.name}</Name>
            <UserImage 
              src = {user && user.photoUrl} onClick={()=> signOut(auth)}/>
          </Profile>

        </Header>
        {/* ActionButtons */}
        <ActionButtons>
          <Link href ="/search">
          <ActionButton>
          <ActionButtonImage src= "https://cdn-icons.flaticon.com/png/128/1048/premium/1048316.png?token=exp=1651285586~hmac=0bb15a7b9994385049be73440878a890" />
            Get a Ride
          </ActionButton>
          </Link>
          <ActionButton>
          <ActionButtonImage src = "https://cdn-icons.flaticon.com/png/128/737/premium/737967.png?token=exp=1651250381~hmac=dce4036774523a841ac67115ef994c44" />
            Order Food
          </ActionButton>
          <ActionButton>
          <ActionButtonImage src = "https://cdn-icons-png.flaticon.com/128/3082/3082031.png" />
            Grocery Delivery
          </ActionButton>
        </ActionButtons>
        {/* InputButton */}
        <InputButton>
          Enter Destination
        </InputButton>
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
flex flex-col bg-gray-600 h-screen 
`


const ActionItems = tw.div`
flex-1 p-4 items-center
`

const Header = tw.div`
flex justify-between items-center
`

const PiedmontLogo = tw.img`
  h-10 rounded-lg
`

const Profile = tw.div`
flex items-center 
`

const Name = tw.div`
mr-4 w-20 text-sm
`

const UserImage = tw.img`
h-12 w-12 rounded-full border border-green-300 p-px cursor-pointer transform hover:scale-105 transition
`

const ActionButtons = tw.div`
flex w-3/5 items-center justify-center
`

const ActionButton = tw.div`
bg-green-300 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-lg
`

const ActionButtonImage = tw.img`
h-3/5 p-2
`

 const InputButton = tw.div`
 h-20 bg-gray-300 text-2xl p-4 flex items-center mt-8
 `