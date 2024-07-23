import bgVid from '../assets/bgVid.mp4';
import FirstNavbar from './FirstNavbar';

const Hero = () => {
  return (
    <div className='relative overflow-hidden z-50 h-screen w-full'>
      <FirstNavbar/>
      <div className='relative flex items-center justify-center h-screen w-full '>
        <div className='absolute inset-0 -z-10'>
          <video className='object-cover w-full h-full opacity-75' src={bgVid} autoPlay  loop muted></video>
        </div>
        <div className='flex flex-col items-center justify-center text-center space-y-4'>
          <h1 className="text-[5rem] font-rowdies text-primarytext">Welcome to My World!</h1>
          <p className="text-xl font-roboto text-[white]">
            Were a creative agency specializing in innovative design and development.
          </p>
          <button className="btn-primary z-50">
            Discover our work
          </button>
        </div>

      </div>
    </div>
  );
};

export default Hero;
