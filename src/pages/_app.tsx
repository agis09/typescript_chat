import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { initializeFirebaseApp } from '@src/lib/firebase/firebase'
import { getApp } from 'firebase/app'
import { AuthProvider } from '@src/feature/auth/provider/AuthProvider'
import { Header } from '@src/component/Header/Header'
import { Footer } from '@src/component/Footer/Footer'

initializeFirebaseApp()
function Chat({ Component, pageProps }: AppProps) {
  console.log(getApp())
  return (
    <ChakraProvider>
      <AuthProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AuthProvider>
    </ChakraProvider>
  )
}

export default Chat
