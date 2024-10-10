import Image from 'next/image'

const Leadership = () => {
  return (
    <div>
      <div className="container max-w-[1180px]">
        <div className="border-[2px] border-picton-blue opacity-20 w-full"></div>
        <h2 className="font-bold max-md:text-[35px] md:text-5xl leading-133 text-white text-center mt-[100px]">Meet The Leadership Team</h2>
        <Image
          className='h-[190px] sm:h-auto mt-4 sm:mt-8 lg:mt-[60px] object-cover object-center rounded-lg'
          src='/assets/images/about-us/webp/meet-the-team.webp'
          width={1140}
          height={497}
          alt='Fitonist'
        />
        <div className="border border-grey w-full my-16 sm:my-24 lg:my-[140px]"></div>
      </div>
    </div>
  )
}

export default Leadership
