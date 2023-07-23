import './ShopByAge.css'

const ShopByAge = () => {
    return (
        <div data-aos="fade-in" className='age-shop-container container section'>
            <h2 className='title-sec'>Shop By Age</h2>
            <p className='subtitle-sec'>Our Collections</p>

            <div className='details'>
                <div className='item'>
                    <img src="https://i.ibb.co/Z144KGH/category-img1.webp" alt="" />
                    <p>For Baby</p>
                </div>

                <div className='item'>
                    <img src="https://i.ibb.co/GQ4nzq0/category-img2.webp" alt="" />
                    <p>1 to 2 years</p>
                </div>

                <div className='item'>
                    <img src="https://i.ibb.co/1QqjCN8/category-img3.jpg" alt="" />
                    <p>2 to 4 years</p>
                </div>

                <div className='item'>
                    <img src="https://i.ibb.co/sttwRyy/category-img4.webp" alt="" />
                    <p>5 to 7 years</p>
                </div>

                <div className='item'>
                    <img src="https://i.ibb.co/71CWMCJ/category-img5.webp" alt="" />
                    <p>8 to 11 years</p>
                </div>

                <div className='item'>
                    <img src="https://i.ibb.co/zQ7bW3F/category-img6.jpg" alt="" />
                    <p>12 years & up</p>
                </div>
            </div>
        </div>
    );
};

export default ShopByAge;