import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/Layout";

import { ConvexProviderWithAuth0 } from "convex/react-auth0"
import convexConfig from "../convex.json"
import { ConvexProvider, ConvexReactClient } from 'convex/react'
import clientConfig from '../convex/_generated/clientConfig'

import { Login } from "../lib/account-auth"

const convex = new ConvexReactClient(clientConfig)
const authInfo = convexConfig.authInfo[0];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConvexProviderWithAuth0 client={convex} authInfo={authInfo} loggedOut={<Login />}>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </ConvexProviderWithAuth0>
  )
}

export default MyApp
