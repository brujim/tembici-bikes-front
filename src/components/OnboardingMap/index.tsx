import Image from 'next/image'
import { SearchInput } from '../SearchInput'
import { BottomTabs } from '../BottomTabs'
import { TargetButton } from '../TargetButton/indext'
import { TipModal } from '../OnboardingTipModal/TipModal'
import { useEffect, useState } from 'react'
import { FilterModal } from '../FilterModal/FilterModal'
const Reveal = require('react-reveal/Reveal')

export const OnboardingMap = () => {
  const [filterStep, setFilterStep] = useState(false)
  useEffect(() => {
    console.log(filterStep)
  }, [filterStep])

  return (
    <Reveal>
      <div className="relative w-[100vw] h-[100vh]">
        <Image src="/images/onboarding/map-mock.png" alt="map" layout="fill" />
        <div className="absolute top-10 w-[100%] px-5">
          <SearchInput />
        </div>
        <div className="absolute w-[60px] h-[60px] bottom-28 right-6">
          <TargetButton />
        </div>
        <div className="absolute bottom-0 w-[100%]">
          <BottomTabs />
        </div>
      </div>
      {!filterStep ? (
        <div className="absolute top-0">
          <TipModal setter={() => setFilterStep((param) => !param)} />
        </div>
      ) : (
        <div className="absolute bottom-0 bg-iron/70 w-[100vw] h-[100vh]">
          <FilterModal />
        </div>
      )}
    </Reveal>
  )
}
