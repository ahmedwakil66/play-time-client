import { BallTriangle } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div style={loaderStyle}>
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="green"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
            />
        </div>
    );
};

const loaderStyle = {
    position: 'fixed',
    zIndex: '555555',
    top: '0',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(32,33,36,.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}


export default Loader;