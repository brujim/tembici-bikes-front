import Head from 'next/head'
import type { NextPage } from 'next'
import { Onboarding } from '../src/components/Onboarding'
import { ErrorAlert } from '../src/components/ErrorAlert/ErrorAlert'

const OnboardingPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tembici - Onboarding</title>
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
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <ErrorAlert setter={function (): void {
          throw new Error('Function not implemented.')
        } }/>
      </main>
    </>
  )
}

export default OnboardingPage
