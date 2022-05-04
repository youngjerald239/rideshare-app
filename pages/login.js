import React, { useEffect } from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import { useRouter } from 'next/router'
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import {auth, provider} from '../firebase'

const Login = () => {
    const router = useRouter()

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
        if (user){
          router.push('/')
        }
    })
 }, [])
  return (
    <Wrapper>
    <PiedmontLogo src= "https://res.cloudinary.com/dbgpqig0z/image/upload/v1642268523/Screenshot_153_vjsmta.png" />
        <Title>Log in to access your account</Title>
        <HeadImage src='https://cdn-icons-gif.flaticon.com/7308/7308525.gif'/>
        <SignInButton onClick={()=>signInWithPopup(auth, provider)}>
            Sign in with Google
        </SignInButton>
    </Wrapper>
  )
}

export default Login

const Wrapper = tw.div`
flex flex-col h-screen bg-gray-600 p-4
`

const SignInButton = tw.button`
bg-black text-green-300 text-center py-4 mt-8 self-center w-full
`

const PiedmontLogo = tw.img`
h-20 w-auto object-contain self-start rounded-lg
`

const Title = tw.div`
text-5xl pt-4 text-green-200
`

const HeadImage = tw.img`
object-contain w-full bg-black-900
`