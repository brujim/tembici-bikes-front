import Head from 'next/head'
import type { NextPage } from 'next'
import { Onboarding } from '../src/components/Onboarding'
import { BikesStationModal } from '../src/components/BikesStationModal/BikesStationModal'

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
        <BikesStationModal bikeStation={{
          title: '105 - Praça João Duran Alonso',
          address: 'Largo General Osório, 66 Santa Ifigênia',
          dayOfWeek: 'Segunda-feira',
          time: '14h as 20h',
          type: 'mech',
          mech: 0,
          electric: 0
        }} />
      </main>
    </>
  ) 
}

export default OnboardingPage
