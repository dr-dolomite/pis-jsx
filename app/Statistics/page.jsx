import Image from "next/image";

const Statistics = () => {
  return (
    <div className="flex flex-col my-20">
    <h1 className="text-[52px] font-semibold ml-16">Statistics</h1>
    <div className="flex flex-col mt-10">
      <h1 className="text-[18px] font-semibold ml-16 my-4">
        Poison Information Report 2023
      </h1>
      <div className="flex-center flex-row my-10">
        <div className="flex-center flex-col">
          <div className="stats-box mx-4 relative">
            <Image
              src="/graph1.png"
              alt="graph1"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-[14px] font-normal italic mt-4">
            Ea quis qui non officia incididunt laborum.
          </p>
        </div>

        <div className="flex-center flex-col">
          <div className="stats-box-2 mx-4 relative">
            <Image
              src="/graph.png"
              alt="graph2"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-[14px] font-normal italic mt-4">
            Occaecat laborum laborum et anim Lorem.
          </p>
        </div>
      </div>
    </div>

    <div className="flex flex-col mt-10">
      <h1 className="text-[18px] font-semibold ml-16 my-4">
        Poison Information Report 2022
      </h1>
      <div className="flex-center flex-row my-10">
        <div className="flex-center flex-col">
          <div className="stats-box-2 mx-4 relative">
            <Image
              src="/graph3.png"
              alt="graph3"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-[14px] font-normal italic mt-4">
            Quis ut labore aliquip amet nulla dolor.
          </p>
        </div>

        <div className="flex-center flex-col">
          <div className="stats-box mx-4 relative">
            <Image
              src="/graph4.png"
              alt="graph4"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-[14px] font-normal italic mt-4">
            Consectetur occaecat pariatur laborum.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Statistics