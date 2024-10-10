import Image from 'next/image'

const Leadership = () => {
  return (
    <div className='py-20 sm:py-24 xl:py-[100px]'>
      <div className="container max-w-[1180px]">
        <div className="border border-grey w-full"></div>
        <h2 className="font-bold text-5xl leading-133">Meet The Leadership Team</h2>
        <Image
          className='rounded-3xl border border-picton-blue my-20 sm:my-24 xl:my-[140px] h-[190px] sm:h-auto'
          src='/assets/images/webp/fintonist.webp'
          width={1440}
          height={480}
          alt='Fitonist'
        />
        <div className="border border-grey w-full"></div>
      </div>
    </div>
  )
}

export default Leadership
