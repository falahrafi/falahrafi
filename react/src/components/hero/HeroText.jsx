import dotTexture from '../../assets/dot-texture.png'

export default function HeroText() {
  return (
    <div className="container mx-auto mt-[-80px] text-center">
      <h1 className="uppercase font-bold text-6xl text-center tracking-wider drop-shadow-[0px_0px_2px_rgba(13,220,125,1)] bg-clip-text text-transparent" style={{backgroundImage: 'url(' + dotTexture + ')'}}>
        Muhammad Falah Abdurrafi
      </h1>
      <h3 className='font-display font-medium text-xl tracking-widest mt-4'>
        Equally fueled by creativity and logic, I am passionate in both <span className='text-falahrafi-green'>design</span> and <span className='text-falahrafi-green'>code</span>.
      </h3>
    </div>
  )
}
