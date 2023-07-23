import { ChatQuoteIcon, StarFillIcon } from '../../../utility/Icons';
import './CustomerReview.css';

const CustomerReview = () => {
    return (
        <div className='container section'>
            <h1 className='title-sec'>Our Customer Saying</h1>
            <p className='subtitle-sec'>Customer Testimonials</p>

            <div className='customer-review-container'>
                <div data-aos="fade-right" className='customer'>
                    <div className='customer-details'>
                        <div style={{display:'flex', gap: '25px'}}>
                            <img src="https://i.ibb.co/8zjrZSX/review1-100x.webp" alt="" />

                            <div style={{marginTop:'35px'}}>
                                <h2>Zina Doicm</h2>
                                <div style={{ display: 'flex', gap: '5px' }}>
                                    <StarFillIcon />
                                    <StarFillIcon />
                                    <StarFillIcon />
                                    <StarFillIcon />
                                    <StarFillIcon />
                                </div>
                            </div>
                        </div>

                        <ChatQuoteIcon size={'60'}></ChatQuoteIcon>
                    </div>

                    <p style={{marginTop:'35px'}}>Absolutely thrilled with my purchase! The product exceeded my expectations and the customer service was top-notch.</p>
                </div>

                <div data-aos="fade-left" className='customer'>
                    <div className='customer-details'>
                        <div style={{display:'flex', gap: '25px'}}>
                            <img src="https://i.ibb.co/HNXrf5m/review2-1-100x.webp" alt="" />

                            <div style={{marginTop:'35px'}}>
                                <h2>Andrea</h2>
                                <div style={{ display: 'flex', gap: '5px' }}>
                                    <StarFillIcon />
                                    <StarFillIcon />
                                    <StarFillIcon />
                                    <StarFillIcon />
                                    <StarFillIcon />
                                </div>
                            </div>
                        </div>

                        <ChatQuoteIcon size={'60'}></ChatQuoteIcon>
                    </div>

                    <p style={{marginTop:'35px'}}>I cannot but recommend this company enough. Their prompt response, exceptional product quality, and attentive customer support make them my go-to choice for all future purchases. Truly a delightful experience!</p>
                </div>

                
            </div>

        </div>
    );
};

export default CustomerReview;