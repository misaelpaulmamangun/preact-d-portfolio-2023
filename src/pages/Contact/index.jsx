import { useState } from 'preact/hooks'
import axios from 'axios'
import MainLayout from '../../layouts/Main'
import contact from './../../schemas/contact.json'

const Contact = () => {
  const { title, infos } = contact
  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })

  const onChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    axios.defaults.headers.post['Content-Type'] = 'application/json'
    axios
      .post('https://formsubmit.co/ajax/misaelpaul3@gmail.com', {
        details,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  }

  return (
    <MainLayout className='py-4'>
      <div className='container mx-auto px-4 mt-8'>
        <h1 className='md:text-7xl text-4xl uppercase text-light-400'>
          {title}
        </h1>
        <div className='md:grid grid-cols-[1fr,2fr] mt-8 gap-4'>
          <div className='text-light-400'>
            {infos.map((info) => (
              <div className='mb-4'>
                <h6 className='text-2xl'>{info.title}</h6>
                <p>{info.value}</p>
              </div>
            ))}
          </div>
          <form onSubmit={onSubmit}>
            <div className='md:grid grid-cols-[1fr,1fr] gap-2'>
              <div className='mb-4 grid'>
                <label htmlFor='firstName' className='text-light-400'>
                  First Name
                </label>
                <input
                  type='text'
                  name='firstName'
                  id='firstName'
                  className='p-2'
                  onChange={onChange}
                />
              </div>
              <div className='mb-4 grid'>
                <label htmlFor='lastName' className='text-light-400'>
                  Last Name
                </label>
                <input
                  type='text'
                  name='lastName'
                  id='lastName'
                  className='p-2'
                  onChange={onChange}
                />
              </div>
            </div>
            <div className='mb-4 grid'>
              <label htmlFor='email' className='text-light-400'>
                Email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                className='p-2'
                onChange={onChange}
              />
            </div>
            <div className='mb-4 grid'>
              <label htmlFor='message' className='text-light-400'>
                Message
              </label>
              <textarea
                name='message'
                id='message'
                className='p-2'
                onChange={onChange}
              />
            </div>
            <button type='submit' className='p-2 px-6 bg-light-400'>
              Send
            </button>
          </form>
        </div>
      </div>
    </MainLayout>
  )
}

export default Contact