import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMapPin } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <div className='overflow-auto scrollbar-hidden py-8'>
        <div className='w-3/5 mx-auto'>
            <h2 className='font-semibold text-4xl text-green-600 border-b-4 border-b-green-600 mx-auto mb-6 w-fit'>Contact Us</h2>
            <h3 className='font-light text-2xl text-green-600 mx-auto mb-4 w-fit'>We&#39;d Love to Hear from You!</h3>
            <p className='text-lg mb-4'>Whether you have a question, need support, or want to join our mission to help dogs, we&#39;re here to listen. Reach out 
                to us using the details below — let&#39;s work together to make a difference!</p>
            <h3 className='font-light text-2xl text-green-600 mx-auto mb-4 w-fit'>Contact Information</h3>
            <div className='mb-2'><span className='text-green-600'><FontAwesomeIcon icon={faMapPin} /></span> <span className='font-medium'>Office Address:</span> Rambo Inc., 
            67th Ave, Try St, Catchland</div>
            <div className='mb-2'><span className='text-green-600'><FontAwesomeIcon icon={faEnvelope} /></span> <span className='font-medium'>Email:</span> info@rambo-aid.com</div>
            <div className='mb-2'><span className='text-green-600'><FontAwesomeIcon icon={faPhone} /></span> <span className='font-medium'>Phone:</span> +1 123-456-7890</div>
            
            <h3 className='font-light text-2xl text-green-600 mx-auto mb-4 w-fit'>Follow Us</h3>
            <p>Stay connected with us on social media to see the latest updates, rescue stories, and more:
                <ul className='list-disc list-inside'>
                    <li><a href='facebook.com' className='underline text-green-600'>Facebook</a></li>
                    <li><a href='instagram.com' className='underline text-green-600'>Instagram</a></li>
                    <li><a href='x.com' className='underline text-green-600'>X</a></li>
                </ul>
            </p>

            <p>Thank You for Reaching Out!</p>
            <p>
                We appreciate your support and commitment to helping dogs in need. We&#39;ll respond to your message shortly — together, we can create a better future for every stray and injured dog.
            </p>
        </div>
    </div>
  )
}

export default Contact