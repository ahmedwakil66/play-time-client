import { Link } from 'react-router-dom';
import './ErrorPage.css'

const ErrorPage = () => {
    return (
        <div>
            <div className='error-page text-center'>
                <p className=' text-2xl pt-6 pb-3'>Page Not Found!</p>
                <Link to={'/'}>
                    <button className='btn-primary' style={{backgroundColor: 'rgba(89, 71, 71, 0.94)'}}>Back to HOME</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;