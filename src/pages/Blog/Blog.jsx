import { PinAngleFillIcon, PinAngleIcon } from '../../utility/Icons';
import useTitle from '../../utility/hooks/useTitle';
import './Blog.css';

const Blog = () => { useTitle('Blog')
    return (
        <div className='blog'>
            <h1>Blog</h1>
            <div className='QA-container'>
                <div className='QA-section'>
                    <div className='icon-container'>
                        <button><PinAngleIcon size={'36'}></PinAngleIcon></button>
                        <button><PinAngleFillIcon size={'36'}></PinAngleFillIcon></button>
                    </div>
                    <li>
                        What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </li>
                    <br />
                    <p>
                        Access token: An access token is issued to a client, serving as a credential. It acts as an authorization mechanism, enabling the client to access particular resources or perform specific actions. The access token is a string that has a limited lifespan and includes crucial details regarding the user or client identity, as well as the granted permissions.
                        <span className='br'></span>
                        Refresh token: During the authentication process, a refresh token is obtained alongside an access token, serving as a long-lived credential. Its primary function is to enable the retrieval of a new access token when the current one expires. By utilizing a refresh token, users can seamlessly maintain access to resources without the need for repetitive re-authentication.
                        <span className='br'></span>
                        When a user first log on the server auto generate the tokens and send it to the user. The next time the user try to access sensitive data he/she must also send the token back to the server in request header. If the server recognizes this token it sends the data otherwise it sends a response "unauthorize assess".
                        <span className='br'></span>
                        These tokens can be stored in local storage or HTTP only cookies.


                    </p>
                </div>
                <div className='QA-section'>
                    <div className='icon-container'>
                        <button><PinAngleIcon size={'36'}></PinAngleIcon></button>
                        <button><PinAngleFillIcon size={'36'}></PinAngleFillIcon></button>
                    </div>
                    <li>
                        Compare SQL and NoSQL databases?
                    </li>
                    <br />
                    <p>
                        SQL is a structured and standard data model, whereas NoSQL is a flexible and dynamic schema based database model.
                        <span className='br'></span>
                        SQL has a very rigid schema which is not true for NoSQL database.
                        <span className='br'></span>
                        NoSQL is usually used for storing and accessing tremendous volume of data.
                    </p>
                </div>
                <div className='QA-section'>
                    <div className='icon-container'>
                        <button><PinAngleIcon size={'36'}></PinAngleIcon></button>
                        <button><PinAngleFillIcon size={'36'}></PinAngleFillIcon></button>
                    </div>
                    <li>
                        What is express js? What is Nest JS?
                    </li>
                    <br />
                    <p>
                        Express js is a javascript library  used with node JS to build server side applications. Express js is written in javascript.

                        <span className='br'></span>

                        Nest js is an alternative of Express js, written in typescript for building scalable and maintainable web applications.
                    </p>
                </div>
                <div className='QA-section'>
                    <div className='icon-container'>
                        <button><PinAngleIcon size={'36'}></PinAngleIcon></button>
                        <button><PinAngleFillIcon size={'36'}></PinAngleFillIcon></button>
                    </div>
                    <li>
                        What is MongoDB aggregate and how does it work ?
                    </li>
                    <br />
                    <p>
                    MongoDB aggregate is a powerful method for analyzing and processing advanced data. We can use this process for performing complex operation within our MongoDB collection.

                    <span className='br'></span>

                    It works by utilizing various stages including filtering, grouping, sorting, projecting, and performing calculations sequentially. Each stage receives the previous stage's output and send another output for the next stage.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blog;