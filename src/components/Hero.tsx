import { ArrowRight } from 'lucide-react'
import img from "../../public/assets/gray-sofa-white-living-room-with-copy-space.jpg";
import { Category } from './Category';
import Button from './Button';

const Hero = () => {
  return (
    <div className='relative'>
      <img className='h-screen w-screen object-cover' src={img} alt="" />
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-5xl  text-green-800  font-semibold p-4'>
            FurniLux - Your Brand <br /> for Stylish Living
          </h1>
          <h5 className='text-sm  text-green-800 font-semibold'>
            Lorem ipsum dolor sit amet consectetur adipisicing  elit. Odit nostrum  <br />
            Lorem ipsum dolor sit amet consectetur adipisicing   elit. 
          </h5>
          <Button/>
        </div>
      </div>
      <div className='flex justify-center'>
      <div className='   relative top-[-40px] h-20  flex items-center space-x-2 justify-center '>
      <div className="grid p-14 grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-6 lg:gap-8 bg-gray-200 mt-96 md:mt-0">
        <Category/>
        <Category/>
        <Category/>
        <Category/>
        <Category/>
        <Category/>
</div>
      </div>
      </div>
    </div>
  )
}

export default Hero
