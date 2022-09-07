import MainLayout from '../../layouts/Main'
import Profile from './../../assets/settings/profile.png'
import Resume from './../../assets/documents/Resume.pdf'
import about from './../../schemas/about.json'

const About = () => {
  const { tools, title, description } = about

  return (
    <MainLayout className='py-4'>
      <div className='container mx-auto px-4 mt-8'>
        <h1 className='md:text-7xl text-4xl uppercase text-light-400 mb-4'>
          {title}
        </h1>
        <div className='md:grid grid-cols-2'>
          <div>
            <p className='md:text-xl text-lg text-light-400'>Hello! I'm</p>
            <h2 className='md:text-4xl text-2xl text-light-400'>
              Misael Paul Mamangun
            </h2>
            <br />
            <p className='text-light-400'>{description}</p>
            <div className='my-6'>
              <a
                href={Resume}
                download='Resume'
                target='_blank'
                className='p-3 bg-light-400'
              >
                <span className='mr-2 text-xl'>Resume</span>
                <i class='fa-solid fa-id-card fa-xl'></i>
              </a>
            </div>
            <p className='text-2xl text-light-400 mt-2 uppercase'>
              Tools I use
            </p>
            <div className='flex gap-2 mt-4 flex-wrap'>
              {tools.map((tool) => (
                <div className='border-2 flex gap-4 items-center px-4 py-1'>
                  <p className='text-2xl text-light-400'>{tool.name}</p>
                  <i
                    className={`fa-brands fa-${tool.icon} text-light-400 fa-4x`}
                  ></i>
                </div>
              ))}
            </div>
          </div>
          <div className='flex justify-center'>
            <img src={Profile} className='object-contain' />
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default About