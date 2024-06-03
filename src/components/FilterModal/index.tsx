import { useEffect, useState } from 'react'
import { filtersWithCity, filtersWithoutCity } from '../../data/filters'
import { ModalSection } from './components/ModalSection'
import usePosition from '../../stores/usePosition'

const Reveal = require('react-reveal/Reveal')

type FilterModalProps = {
  closeFilter: () => void
  setters: any[]
  states: any[]
  clearFilters: any
  sendFilters: any
  controller: any
}

export const FilterModal = ({
  closeFilter,
  setters,
  states,
  clearFilters,
  sendFilters,
  controller
}: FilterModalProps) => {
  const [canContinue, setCanContinue] = useState(false)
  const { latitude, longitude, setPosition } = usePosition()
  const hasPosition = localStorage.getItem('getgeo') === 'true' ? true : false

  function setMapCenter(city: string | null) {
    switch (city) {
      case 'Rio de Janeiro':
        setPosition({
          latitude: -22.908333,
          longitude: -43.196388
        })
        break
      case 'São Paulo':
        setPosition({
          latitude: -23.550164466,
          longitude: -46.633664132
        })
        break
      case 'Curitiba':
        setPosition({
          latitude: -25.441105,
          longitude: -49.276855
        })
        break
      case 'Salvador':
        setPosition({
          latitude: -12.974722,
          longitude: -38.476665
        })
        break
      default:
        break
    }
  }

  useEffect(() => {
    if (hasPosition) {
      if (states[0] && states[1] && states[2] && states[3]) {
        setCanContinue(true)
      }
    } else {
      if (states[0] && states[1] && states[2] && states[3] && states[4]) {
        setCanContinue(true)
      }
    }
  }, [states])

  return (
    <Reveal>
      <div className="w-[100vw] h-[100vh] bg-stone/70">
        <div className="bg-pearl h-[90vh] absolute bottom-0 w-[100vw] overflow-y-scroll">
          <div className="flex justify-between items-center pt-5 px-4">
            <img src="/images/filter/itau.png" />
            <img src="/images/filter/x.png" onClick={closeFilter} />
          </div>
          <h3 className="font-main font-extrabold text-[18px] px-4 mt-4 py-2">
            Selecione abaixo os filtros para encontrar a estação ideal para
            você:
          </h3>
          {hasPosition ? (
            <form className="">
              {filtersWithoutCity.map((filter, index) => {
                return (
                  <ModalSection
                    key={index}
                    types={filter.type}
                    answer={filter.answer}
                    options={filter.options}
                    values={filter.value}
                    setters={[...setters]}
                    states={[...states]}
                    indexes={index}
                  />
                )
              })}
            </form>
          ) : (
            <form className="">
              {filtersWithCity.map((filter, index) => {
                return (
                  <ModalSection
                    key={index}
                    types={filter.type}
                    answer={filter.answer}
                    options={filter.options}
                    values={filter.value}
                    setters={[...setters]}
                    states={[...states]}
                    indexes={index}
                  />
                )
              })}
            </form>
          )}

          <div className="flex justify-between items-center px-10 border-t-[1px] border-steel py-10 mt-4">
            <p
              className="font-main text-cooper font-semibold"
              onClick={() => {
                clearFilters()
                setCanContinue(false)
              }}
            >
              Limpar filtros
            </p>
            <button
              className={`px-8 py-4 rounded-full text-pearl font-main ${canContinue ? 'bg-cooper' : 'bg-steel'}`}
              onClick={() => {
                sendFilters(true)
                controller(true)
                closeFilter()
                if (localStorage.getItem('onboarding') === 'first') {
                  localStorage.setItem('onboarding', 'done')
                }
                setMapCenter(states[0])
              }}
              disabled={!canContinue}
            >
              Pesquisar estações
            </button>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
