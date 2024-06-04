import Head from 'next/head'
import type { NextPage } from 'next'
import { ErrorAlert } from '../src/components/ErrorAlert/ErrorAlert'

const ErrorPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tembici - Error</title>
        <meta
          property="og:description"
          content="Localize bicicletas de aluguel com simplicidade!"
        />
        <meta property="og:site_name" content="Tembici" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tembici - Onboarding" />
        <meta
          name="description"
          content="Localize bicicletas de aluguel com simplicidade!"
        />
        <link rel="icon" type="image/x-icon" href="/fav.ico" />
      </Head>
      <main>
        <ErrorAlert
          setter={function (): void {
            console.log(' ERROR ALERT Function not implemented.')
          }}
        />
      </main>
    </>
  )
}

export default ErrorPage
