import React from 'react'

const About = () => {
  return (
    <div className='overflow-auto scrollbar-hidden py-8'>
      <div className='w-3/5 mx-auto'>
        <h2 className='font-semibold text-4xl text-green-600 border-b-4 border-b-green-600 mx-auto mb-6 w-fit'>About Us</h2>
        <h3 className='font-light text-2xl text-green-600 mx-auto mb-4 w-fit'>Our Mission</h3>
        <p className='text-lg mb-4'>At <span className='font-thin text-xl text-green-700'>Rambo</span>, we believe that every dog deserves care, safety, and 
        love. Our platform connects compassionate volunteers with dedicated NGOs to create a network of support for stray and injured dogs. By working together, we 
        aim to rescue, rehabilitate, and provide a better future for animals in need.</p>
        <h3 className='font-light text-2xl text-green-600 mx-auto mb-4 w-fit'>What We Do</h3>
        <p className='text-lg mb-2'>Our platform empowers volunteers to report cases of dogs in distress, ensuring that help reaches them quickly and efficiently. 
        NGOs can respond to these reports, track cases, and provide real-time updates — creating a transparent and collaborative rescue process.</p>
        <h4 className='text-xl mb-2 font-medium'>For Volunteers:</h4>
        <ul className='text-lg mb-2 list-disc list-inside'>
          <li>Report cases of injured or stray dogs in your community.</li>
          <li>Track the status of your reports in real-time.</li>
          <li>Stay updated on how the case is being handled.</li>
        </ul>
        <h4 className='text-xl mb-2 font-medium'>For NGOs:</h4>
        <ul className='text-lg mb-4 list-disc list-inside'>
          <li>Access a centralized dashboard for managing reports.</li>
          <li>Respond to cases promptly and provide updates.</li>
          <li>Coordinate rescue and rehabilitation efforts efficiently.</li>
        </ul>
        <h3 className='font-light text-2xl text-green-600 mx-auto mb-4 w-fit'>Why It Matters</h3>
        <p className='text-lg mb-3'>Our vision is to create a world where no stray or injured dog is left without care. We believe that by combining technology, 
        compassion, and community support, we can give every dog the chance at a better life.</p>
        <p className='text-lg mb-4'>
          Together, we can:
          <ul className='list-disc list-inside'>
            <li>Provide faster medical aid to injured dogs.</li>
            <li>Rehabilitate stray dogs and help them find homes.</li>
            <li>Build a compassionate community where every life matters.</li>
          </ul>
        </p>
        <h3 className='font-light text-2xl text-green-600 mx-auto mb-4 w-fit'>Join Us</h3>
        <p className='text-lg mb-4'>Whether you are a volunteer looking to make a difference or an NGO dedicated to animal welfare, &nbsp;
          <span className='font-thin text-xl text-green-700'>Rambo</span> is the place where meaningful change happens. Together, we can give every dog the care 
          they deserve.Let us make a difference — one rescue at a time. 🐶❤️</p>
      </div>
    </div>
  )
}

export default About