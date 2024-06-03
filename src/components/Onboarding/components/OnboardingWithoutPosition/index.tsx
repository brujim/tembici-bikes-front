import { useState } from 'react'
import { OnboardingMap } from '../OnboardingMap'
import usePosition from '../../../../stores/usePosition'

export const OnboardingWithoutPosition = () => {
  const [option, setOption] = useState<number | null>(null)
  const [nextStep, setNextStep] = useState(false)
  const { setPosition } = usePosition()

  localStorage.setItem('getgeo', 'false')

  return (
    <>
      {!nextStep ? (
        <div className="flex flex-col pt-32 font-main px-8 justify-between h-[100vh] pb-10">
          <div className="flex flex-col gap-2">
            <h3 className="text-[24px] font-semibold text-iron">
              Onde você vai pedalar?
            </h3>
            <p className="text-[18px] text-stone">
              Precisamos saber a localidade para mostrar as opções
            </p>
            <div className="text-[18px] text-stone flex flex-col gap-3 mt-4">
              <div
                className={`border-[1px] ${option === 1 ? 'border-cooper' : 'border-steel'} py-4 px-6 flex items-center gap-4 rounded-2xl`}
                onClick={() => {
                  setOption(1)
                  setPosition({
                    latitude: -22.908333,
                    longitude: -43.196388
                  })
                }}
              >
                <div
                  className={`h-[16px] w-[16px] ${option === 1 ? 'border-cooper border-4' : 'border-steel border-2'} rounded-full flex items-center justify-center`}
                ></div>
                <p>Rio de Janeiro</p>
              </div>
              <div
                className={`border-[1px] ${option === 2 ? 'border-cooper' : 'border-steel'} py-4 px-6 flex items-center gap-4 rounded-2xl`}
                onClick={() => {
                  setOption(2)
                  setPosition({
                    latitude: -23.550164466,
                    longitude: -46.633664132
                  })
                }}
              >
                <div
                  className={`h-[16px] w-[16px] ${option === 2 ? 'border-cooper border-4' : 'border-steel border-2'} rounded-full flex items-center justify-center`}
                ></div>
                <p>São Paulo</p>
              </div>
              <div
                className={`border-[1px] ${option === 3 ? 'border-cooper' : 'border-steel'} py-4 px-6 flex items-center gap-4 rounded-2xl`}
                onClick={() => {
                  setOption(3)
                  setPosition({
                    latitude: -25.441105,
                    longitude: -49.276855
                  })
                }}
              >
                <div
                  className={`h-[16px] w-[16px] ${option === 3 ? 'border-cooper border-4' : 'border-steel border-2'} rounded-full flex items-center justify-center`}
                ></div>
                <p>Curitiba</p>
              </div>
              <div
                className={`border-[1px] ${option === 4 ? 'border-cooper' : 'border-steel'} py-4 px-6 flex items-center gap-4 rounded-2xl`}
                onClick={() => {
                  setOption(4)
                  setPosition({
                    latitude: -12.974722,
                    longitude: -38.476665
                  })
                }}
              >
                <div
                  className={`h-[16px] w-[16px] ${option === 4 ? 'border-cooper border-4' : 'border-steel border-2'} rounded-full flex items-center justify-center`}
                ></div>
                <p>Salvador</p>
              </div>
            </div>
          </div>
          <button
            className={`${option !== null ? 'bg-cooper' : 'bg-steel'} w-[100%] py-3 text-pearl font-main font-semibold rounded-full mt-4`}
            onClick={() => {
              if (option !== null) {
                setNextStep(true)
              }
            }}
          >
            Continuar
          </button>
        </div>
      ) : (
        <OnboardingMap />
      )}
    </>
  )
}
