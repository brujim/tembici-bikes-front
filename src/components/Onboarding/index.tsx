import Image from 'next/image'
import { useState } from 'react'
import { StepBar } from './components/StepBar'
import { HeadingBar } from './components/HeadingBar'
import { OnboardingWithoutPosition } from './components/OnboardingWithoutPosition'
import usePosition from '../../stores/usePosition'
import { UnderstandModal } from '../UnderstandModal/UnderstandModal'
import { GetGeolocationResponse } from '../../types/Onboarding/geolocation'
import { OnboardingMap } from './components/OnboardingMap'
const Reveal = require('react-reveal/Reveal')

export const Onboarding = () => {
  const [step, setStep] = useState(1)
  const setPosition = usePosition((state) => state.setPosition)

  function onGetPosition() {
    localStorage.setItem('getgeo', 'true')
    setStep(5)
  }

  function onFailToGetPosition() {
    setStep(6)
  }

  return (
    <>
      {step < 5 ? (
        <div className="h-[100vh] w-[100vw] bg-pearl font-main relative">
          <HeadingBar
            previousButton={() => setStep((param) => param - 1)}
            skipButton={() => console.log()}
            activeStep={step}
          />
          {step === 1 && (
            <div className={`flex flex-col justify-between items-center`}>
              <div className="px-10 absolute bottom-[70%]">
                <Reveal>
                  <p className="text-[24px] font-bold text-iron pb-2">
                    O que é tarifa dinâmica?
                  </p>
                  <p className="text-[18px] text-stone">
                    O valor de retirada das bikes pode variar devido a alta
                    demanda.
                  </p>
                </Reveal>
              </div>
              <div className="absolute bottom-20">
                <Reveal>
                  <Image
                    src="/images/onboarding/step01.png"
                    alt="primeiros passos"
                    width={316}
                    height={419}
                  />
                </Reveal>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className={`flex flex-col justify-between items-center`}>
              <div className="px-10 absolute bottom-[70%]">
                <Reveal>
                  <p className="text-[24px] font-bold text-iron pb-2">
                    Pesquise as estações
                  </p>
                  <p className="text-[18px] text-stone">
                    Para verificar os valores de retirada nas estações selecione
                    os filtros desejados.
                  </p>
                </Reveal>
              </div>
              <div className="absolute bottom-20">
                <Reveal>
                  <Image
                    src="/images/onboarding/step02.png"
                    alt="primeiros passos"
                    width={316}
                    height={419}
                  />
                </Reveal>
              </div>
            </div>
          )}
          {step === 3 && (
            <div className={`flex flex-col justify-between items-center`}>
              <div className="px-10 absolute bottom-[70%]">
                <Reveal>
                  <p className="text-[24px] font-bold text-iron pb-2">
                    Entenda as categorias
                  </p>
                  <p className="text-[18px] text-stone">
                    Podem existir estações sem tarifa ou com tarifa: baixa,
                    média ou alta.
                  </p>
                </Reveal>
              </div>
              <div className="absolute bottom-20">
                <Reveal>
                  <Image
                    src="/images/onboarding/step03.png"
                    alt="primeiros passos"
                    width={316}
                    height={419}
                  />
                </Reveal>
              </div>
            </div>
          )}
          {step === 4 && (
            <div className={`flex flex-col justify-between items-center`}>
              <div className="px-10 absolute bottom-[70%]">
                <Reveal>
                  <p className="text-[24px] font-bold text-iron pb-2">
                    Compartilhe a sua localização
                  </p>
                  <p className="text-[18px] text-stone">
                    Para mostrarmos as estações precisamos da sua localização.
                  </p>
                </Reveal>
              </div>
              <div className="absolute bottom-20">
                <Reveal>
                  <Image
                    src="/images/onboarding/step04.png"
                    alt="primeiros passos"
                    width={316}
                    height={419}
                  />
                </Reveal>
              </div>
            </div>
          )}
          <div className="absolute bottom-0">
            <StepBar
              activeStep={step}
              nextButton={() => setStep((param) => param + 1)}
              getPositionSuccessfull={onGetPosition}
              getPositionFailure={onFailToGetPosition}
            />
          </div>
        </div>
      ) : (
        <>
          {step === 5 && <OnboardingMap />}
          {step === 6 && <OnboardingWithoutPosition />}
        </>
      )}
    </>
  )
}
