import { useEffect, useState } from 'react'
import { filtersWithCity, filtersWithoutCity } from '../../data/filters'
import { ModalSection } from './components/ModalSection'
import usePosition from '../../stores/usePosition'
import Image from 'next/image'

import Slide from 'react-reveal/Slide';

type FilterModalProps = {
  closeFilter: () => void
  settersWithCity: any[]
  statesWithCity: any[]
  settersWithoutCity: any[]
  statesWithoutCity: any[]
  clearFilters: any
  sendFilters: any
  controller: any
}

export const FilterModal = ({
  closeFilter,
  settersWithCity,
  statesWithCity,
  settersWithoutCity,
  statesWithoutCity,
  clearFilters,
  sendFilters,
  controller
}: FilterModalProps) => {
  const [canContinue, setCanContinue] = useState(false)
  const [warning, setWarning] = useState(false)
  const { latitude, longitude, setPosition } = usePosition()
  const hasPosition = localStorage.getItem('getgeo') === 'true' ? true : false
  const [filterDimensions, setFilterDimensions] = useState({ width: '100%', height: '100vh' });

  useEffect(() => {
    const handleResize = () => {
      setFilterDimensions({
        width: `${window.innerWidth}px`,
        height: `${window.innerHeight}px`
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!hasPosition) {
      switch (latitude) {
        case -23.550164466:
          settersWithCity[0]('São Paulo')
          break
        case -22.908333:
          settersWithCity[0]('Rio de Janeiro')
          break
        case -25.441105:
          settersWithCity[0]('Curitiba')
          break
        case -12.974722:
          settersWithCity[0]('Salvador')
          break
      }
    }
  }, [])

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
      if (
        statesWithoutCity[0] &&
        statesWithoutCity[1] &&
        statesWithoutCity[2] &&
        statesWithoutCity[3]
      ) {
        setCanContinue(true)
      }
    } else {
      if (
        statesWithCity[0] &&
        statesWithCity[1] &&
        statesWithCity[2] &&
        statesWithCity[3] &&
        statesWithCity[4]
      ) {
        setCanContinue(true)
      }
    }
  }, [statesWithoutCity, statesWithCity])

  return (
    <Slide duration={400} bottom>
      <div className=" bg-stone/70 "
        style={{ width: filterDimensions.width, height: filterDimensions.height }}
      >
        {warning && (
          <div className="bg-iron/70 w-[100vw] h-full absolute top-0 z-50">
            <div className="w-[260px] h-[180px] rounded-lg bg-pearl absolute bottom-[8rem] right-16 px-6 flex flex-col items-center justify-center">
              <p className="font-main leading-5">
                Para realizar uma pesquisa, primeiro selecione{' '}
                <strong>todos os filtros.</strong>
              </p>
              <button
                className="bg-cooper w-[100%] py-3 text-pearl font-main font-semibold rounded-full mt-4"
                onClick={() => setWarning(false)}
              >
                Entendi
              </button>
            </div>
            <div className="absolute bottom-[6rem] right-24">
              <Image
                src="/images/onboarding/poligono-d.svg"
                width={43}
                height={37}
                alt="tip box"
              />
            </div>
          </div>
        )}
        <div className="bg-pearl pt-[44px] h-[100vh] absolute bottom-0 w-[100vw] overflow-y-scroll">
          <div className="flex justify-between items-center pt-5 px-4">
            <img src="/images/filter/itau.png" />
            <img src="/images/filter/x.png" onClick={closeFilter} />
          </div>
          <h3 className="font-main font-semibold text-[18px] px-4 my-4 py-2 md:text-center">
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
                    setters={[...settersWithoutCity]}
                    states={[...statesWithoutCity]}
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
                    setters={[...settersWithCity]}
                    states={[...statesWithCity]}
                    indexes={index}
                  />
                )
              })}
            </form>
          )}

          <div className="flex justify-between items-center px-5 border-t-[1px] border-steel py-10 mt-4 md:justify-center md:gap-10">
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
              className={`px-4 py-4 rounded-full text-pearl font-main ${canContinue ? 'bg-cooper' : 'bg-steel'}`}
              onClick={() => {
                if (canContinue) {
                  sendFilters(true)
                  controller(true)
                  closeFilter()
                  if (localStorage.getItem('onboarding') === 'first') {
                    localStorage.setItem('onboarding', 'done')
                  }
                  setMapCenter(statesWithCity[0])
                } else {
                  setWarning(true)
                }
              }}
            >
              Pesquisar estações
            </button>
          </div>
        </div>
      </div>
    </Slide>
  )
}
