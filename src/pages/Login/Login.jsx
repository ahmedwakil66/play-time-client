import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-hot-toast';
import useTitle from '../../utility/hooks/useTitle';

const Login = () => { useTitle('Login');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { logIn, googleLogin, resetPassword } = useContext(AuthContext);

    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        const loading = toast.loading('Validating...');

        logIn(email, password)
            .then(result => {
                toast.success('Login successful!', { id: loading });
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message, { duration: 4000, id: loading });
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                toast.success('Login successful!');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message, { duration: 4000 });
            })
    }


    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto rounded-md shadow-md lg:max-w-xl" style={{backgroundColor: 'antiquewhite'}}>
                
                <h1 className="text-3xl font-semibold text-center text-orange-500">
                    Sign in
                </h1>

                <form onSubmit={handleLogIn} className="mt-6">
                    <div className="mb-2">
                        <label className="label"> Email </label>
                        <input type="email" name='email' className="input" />
                    </div>

                    <div className="mb-2">
                        <label className="label"> Password </label>
                        <input type="password" name='password' className="input" />
                    </div>

                    <Link href="#" className="text-xs text-orange-500" > Forget Password? </Link>

                    <div className="mt-6">
                        <button className="button" type='submit' style={{backgroundColor: 'var(--btn-primary)'}}> Login </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700"> Don{"'"}t have an account?
                    <Link to={'/registration'} className="font-medium text-orange-500" > Sign up </Link>
                </p>

                <div className="flex items-center w-full my-4">
                    <hr className="w-full" />
                    <p className="px-3 ">OR</p>
                    <hr className="w-full" />
                </div>


                <div className="my-6 space-y-2">
                    <button onClick={handleGoogleLogin} className="loginWith">
                        <p>Login with Google</p>
                    </button>

                    <button className="loginWith">
                        <p>Login with GitHub</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;