import dotTexture from '../../assets/dot-texture.png'

export default function HeroText() {
  return (
    <div className="container mx-auto mt-[-20px] sm:mt-[-40px] lg:mt-[-80px] 2xl:mt-[-100px] px-6 min-[600px]:px-0 text-center">
      <h1 className="uppercase font-bold text-[32px] min-[490px]:text-3xl sm:text-[36px] md:text-[44px] lg:text-5xl xl:text-6xl 2xl:text-7xl text-center tracking-wider drop-shadow-[0px_0px_2px_rgba(13,220,125,1)] bg-clip-text text-transparent" style={{backgroundImage: 'url(' + dotTexture + ')'}}>
        <div className="hidden min-[600px]:block">
          Muhammad Falah Abdurrafi
        </div>
        <div className="min-[600px]:hidden">
          M<span className='text-falahrafi-green-light'>.</span> Falah Abdurrafi
        </div>
      </h1>
      <h3 className='mt-4 px-4 min-[545px]:px-16 sm:px-0 font-display md:font-medium text-xs leading-5 md:text-sm lg:text-md xl:text-xl tracking-widest'>
        Driven by creativity and logic, I am professionally skilled in both <span className='text-falahrafi-green'>design</span> and <span className='text-falahrafi-green'>code</span>.
      </h3>
    </div>
  )
}
