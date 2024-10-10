import Image from 'next/image'

const Leadership = () => {
  return (
    <div className='py-20 sm:py-24 xl:py-[100px]'>
      <div className="container max-w-[1180px]">
        <div className="border-[2px] border-picton-blue opacity-20 w-full"></div>
        <h2 className="font-bold text-5xl leading-133 text-white text-center mt-[100px]">Meet The Leadership Team</h2>
        <Image
          className='mb-20 sm:mb-24 xl:mb-[140px] h-[190px] sm:h-auto mt-[60px]'
          src='/assets/images/about-us/webp/meet-the-team.webp'
          width={1140}
          height={497}
          alt='Fitonist'
        />
        <div className="border border-grey w-full"></div>
      </div>
    </div>
  )
}

export default Leadership
