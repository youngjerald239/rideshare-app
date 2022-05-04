import React from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'

const Login = () => {
  return (
    <Wrapper>
        <SignInButton>
            Sign in with Google
        </SignInButton>
    </Wrapper>
  )
}

export default Login

const Wrapper = tw.div``

const SignInButton = tw.button``