import './Footer.css'
import { EmailIcon, FacebookIcon, LinkedinIcon, TelephoneIcon, TwitterIcon, WhatsappIcon } from '../../../utility/Icons';
import { Logo } from '../../../utility/Logos';

const Footer = () => {
  return (
    <div className='footer section'>
      <div className='my-container'>
        <div className='footer-chat-section'>
          <h1 className='text-4xl lg:text-5xl font-semibold text-center text-orange-500'>Let's Have a Chat !</h1>
          <p className='mt-2 text-center text-lime-800	'>Find out what we can do for you!</p>
          <div className='footer-message-dev'>
            <div className='message-submit'>
              <input type="text" className='footer-input' placeholder='write us' />
              <button className='footer-submit-btn'>Send</button>
            </div>
          </div>
        </div>

        <hr />


        {/* footer item section */}

        <div className='footer-item-section'>

          <div>
            {/* <img src="logo.svg" style={{ width: '150px' }} alt="" /> */}
            <div className='footer-logo'><Logo /></div>
            <div className='footer-icon-container'>
              <span><FacebookIcon /></span>
              <span><TwitterIcon /></span>
              <span><WhatsappIcon /></span>
              <span><LinkedinIcon /></span>
            </div>

            <span
              className='text-lime-800'
              style={{ display: 'flex', gap: '8px', margin: '15px 0' }}
            >
              <span
                style={{ paddingTop: '5px' }}
              >
                <TelephoneIcon />
              </span>
              000-111-2222
            </span>

            <span
              className='text-lime-800'
              style={{ display: 'flex', gap: '8px', margin: '15px 0' }}
            >
              <span style={{ paddingTop: '5px' }}><EmailIcon /></span> playtime@exmple.com
            </span>


            <p className='text-lime-800'>2736 McDowell Street,Nashville,Tennessee</p>
            <p className='tecno text-lime-800'>Ⓒ 2023 TechnoBLADE Digital Technologies</p>

          </div>

          <div>
            <h2 className='footer-item-title text-lime-800'>Our Solution</h2>
            <li className='text-lime-800'>Core Features</li>
            <li className='text-lime-800'>Product Features</li>
            <li className='text-lime-800'>Pricing</li>
          </div>

          <div>
            <h2 className='footer-item-title text-lime-800'>Your needs</h2>
            <li className='text-lime-800'>Core Features</li>
            <li className='text-lime-800'>Product Features</li>
            <li className='text-lime-800'>Pricing</li>
          </div>

          <div>
            <h2 className='footer-item-title text-lime-800'>Offer</h2>
            <li className='text-lime-800'>Core Features</li>
            <li className='text-lime-800'>Product Features</li>
            <li className='text-lime-800'>Pricing</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;