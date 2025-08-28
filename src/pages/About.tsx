import Underline from "../components/Underline";
import aboutme from '../assets/about.jpg';

const About = () => {
  return <>
    <div className='w-full h-min-[100vh] px-[32px] md:max-w-[768px] md:mx-auto'>
      <div className="mt-16 grid grid-cols-4 gap-4">
        <div>
          <h1 className="text-[48px] font-[600] text-center leading-[60px] align-top">
            <span className="border-l-[8px] border-[#77FF00]">あ</span>
          </h1>
          <h1 className="text-[48px] font-[600] text-center leading-[60px] align-top">B</h1>
          <h1 className="text-[48px] font-[600] text-center leading-[60px] align-top">O</h1>
          <h1 className="text-[48px] font-[600] text-center leading-[60px] align-top">U</h1>
          <h1 className="text-[48px] font-[600] text-center leading-[60px] align-top">T</h1>
          <br /> <br />
          <h1 className="text-[48px] font-[600] text-center leading-[60px] align-top">M</h1>
          <h1 className="text-[48px] font-[600] text-center leading-[60px] align-top">E</h1>
        </div>
        <div className="col-span-3">
          <img src={aboutme} className="w-full h-auto" alt="about" />
        </div>
      </div>

      <div className="mt-8">
        <p className="text-[24px] text-end">Ung Nhat Hang</p>
        <p className="text-[16px] text-end">Tokyo, Japan</p>
      </div>

      <div className="mt-8">
        <h1 className="text-[24px] text-center leading-[48px] font-bold border-y-[1px] border-y-[#000000]">Working Experience</h1>
        <div className="mt-4">
          <p>Nov 2023 - Present</p>
          <a href="https://fptsoftware.jp/about-us/fpt-software-japan" target="_blank" className="underline">FPT Software Japan</a>
          <p className="mt-4 italic font-bold">Bridge Software Engineer</p>
          <ul className="list-disc list-inside mt-2">
            <li>Manage project contracts and deliverables.</li>
            <li>Collaborating with cross-functional teams to deliver high-quality software solutions.</li>
            <li>Consulting customers on AWS cloud architecture for their systems</li>
          </ul>
        </div>
      </div>
      
    </div>
  </>
}

export default About;