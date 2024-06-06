import { DotLoader } from 'react-spinners'
import Image from 'next/image'

type SearchModalProps = {
  stations: any[]
  closeAction: any
  waitingAction: any
  onSelectStation: any
}

export const SearchModal = ({
  stations,
  closeAction,
  waitingAction,
  onSelectStation
}: SearchModalProps) => {
  return (
    <div className="h-[100vh] w-[100vw] absolute z-50" onClick={closeAction}>
      <div className="bg-pearl h-[400px] w-[90%] absolute top-[9rem] left-[1.3rem] rounded-b-2xl shadow-lg flex justify-center items-center">
        {waitingAction ? (
          <div>
            <DotLoader color="#EC7000" />
          </div>
        ) : (
          <div className="w-[100%] h-[90%] px-4">
            {stations.map((station, index) => {
              return (
                <div
                  key={index}
                  className="flex gap-3 items-center font-main font-semibold text-[15px] py-4 border-b-[1px] border-steel/40 px-4 relative overflow-y-scroll"
                  onClick={() => onSelectStation(station)}
                >
                  <Image
                    alt="frame"
                    src="/images/search/frame.svg"
                    width={35}
                    height={35}
                  />
                  <p>{station.title}</p>
                  <div className="flex items-center absolute right-3">
                    <Image
                      alt="arrow"
                      src="/images/search/arrow.svg"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
