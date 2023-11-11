import img_1 from '../../../assets/images/banner/1.jpg'
import img_2 from '../../../assets/images/banner/2.jpg'
import img_3 from '../../../assets/images/banner/3.jpg'
import img_4 from '../../../assets/images/banner/4.jpg'
import img_5 from '../../../assets/images/banner/5.jpg'
import img_6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
    <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full max-h-screen">
            <img src={img_1} className="w-full rounded-lg" />
            <div className='absolute h-full w-full flex items-center bg-gradient-to-r from-black rounded-lg'>
                <div className="max-w-md text-white ml-6 md:ml-16">
                    <h1 className='text-3xl md:text-6xl font-bold leading-tight'>Affordable Price For Car Servicing</h1>
                    <p className='my-3 md:my-8 capitalize text-sm lg:text-base'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='flex gap-5'>
                        <button className='btn btn-sm md:btn-md btn-primary normal-case text-base'>Discover More</button>
                        <button className='btn btn-sm md:btn-md btn-neutral btn-outline text-white normal-case text-base hover:bg-white hover:text-base-content'>Latest Project</button>
                    </div>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 right-12 bottom-4 gap-5">
                <a href="#slide4" className="btn btn-circle bg-opacity-30 border-opacity-30">❮</a> 
                <a href="#slide2" className="btn btn-circle btn-primary">❯</a>
            </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full max-h-screen">
            <img src={img_2} className="w-full rounded-lg" />
            <div className='absolute h-full w-full flex items-center bg-gradient-to-r from-black rounded-lg'>
                <div className="max-w-md text-white ml-6 md:ml-16">
                    <h1 className='text-3xl md:text-6xl font-bold leading-tight'>Affordable Price For Car Servicing</h1>
                    <p className='my-3 md:my-8 capitalize text-sm lg:text-base'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='flex gap-5'>
                        <button className='btn btn-sm md:btn-md btn-primary normal-case text-base'>Discover More</button>
                        <button className='btn btn-sm md:btn-md btn-neutral btn-outline text-white normal-case text-base hover:bg-white hover:text-base-content'>Latest Project</button>
                    </div>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 right-12 bottom-4 gap-5">
                <a href="#slide1" className="btn btn-circle bg-opacity-30 border-opacity-30">❮</a> 
                <a href="#slide3" className="btn btn-circle btn-primary">❯</a>
            </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full max-h-screen">
            <img src={img_3} className="w-full rounded-lg" />
            <div className='absolute h-full w-full flex items-center bg-gradient-to-r from-black rounded-lg'>
                <div className="max-w-md text-white ml-6 md:ml-16">
                    <h1 className='text-3xl md:text-6xl font-bold leading-tight'>Affordable Price For Car Servicing</h1>
                    <p className='my-3 md:my-8 capitalize text-sm lg:text-base'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='flex gap-5'>
                        <button className='btn btn-sm md:btn-md btn-primary normal-case text-base'>Discover More</button>
                        <button className='btn btn-sm md:btn-md btn-neutral btn-outline text-white normal-case text-base hover:bg-white hover:text-base-content'>Latest Project</button>
                    </div>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 right-12 bottom-4 gap-5">
                <a href="#slide2" className="btn btn-circle bg-opacity-30 border-opacity-30">❮</a> 
                <a href="#slide4" className="btn btn-circle btn-primary">❯</a>
            </div>
        </div>

        <div id="slide4" className="carousel-item relative w-full max-h-screen">
            <img src={img_4} className="w-full rounded-lg" />
            <div className='absolute h-full w-full flex items-center bg-gradient-to-r from-black rounded-lg'>
                <div className="max-w-md text-white ml-6 md:ml-16">
                    <h1 className='text-3xl md:text-6xl font-bold leading-tight'>Affordable Price For Car Servicing</h1>
                    <p className='my-3 md:my-8 capitalize text-sm lg:text-base'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='flex gap-5'>
                        <button className='btn btn-sm md:btn-md btn-primary normal-case text-base'>Discover More</button>
                        <button className='btn btn-sm md:btn-md btn-neutral btn-outline text-white normal-case text-base hover:bg-white hover:text-base-content'>Latest Project</button>
                    </div>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 right-12 bottom-4 gap-5">
                <a href="#slide3" className="btn btn-circle bg-opacity-30 border-opacity-30">❮</a> 
                <a href="#slide5" className="btn btn-circle btn-primary">❯</a>
            </div>
        </div>

        <div id="slide5" className="carousel-item relative w-full max-h-screen">
            <img src={img_5} className="w-full rounded-lg" />
            <div className='absolute h-full w-full flex items-center bg-gradient-to-r from-black rounded-lg'>
                <div className="max-w-md text-white ml-6 md:ml-16">
                    <h1 className='text-3xl md:text-6xl font-bold leading-tight'>Affordable Price For Car Servicing</h1>
                    <p className='my-3 md:my-8 capitalize text-sm lg:text-base'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='flex gap-5'>
                        <button className='btn btn-sm md:btn-md btn-primary normal-case text-base'>Discover More</button>
                        <button className='btn btn-sm md:btn-md btn-neutral btn-outline text-white normal-case text-base hover:bg-white hover:text-base-content'>Latest Project</button>
                    </div>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 right-12 bottom-4 gap-5">
                <a href="#slide4" className="btn btn-circle bg-opacity-30 border-opacity-30">❮</a> 
                <a href="#slide6" className="btn btn-circle btn-primary">❯</a>
            </div>
        </div>

        <div id="slide6" className="carousel-item relative w-full max-h-screen">
            <img src={img_6} className="w-full rounded-lg" />
            <div className='absolute h-full w-full flex items-center bg-gradient-to-r from-black rounded-lg'>
                <div className="max-w-md text-white ml-6 md:ml-16">
                    <h1 className='text-3xl md:text-6xl font-bold leading-tight'>Affordable Price For Car Servicing</h1>
                    <p className='my-3 md:my-8 capitalize text-sm lg:text-base'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='flex gap-5'>
                        <button className='btn btn-sm md:btn-md btn-primary normal-case text-base'>Discover More</button>
                        <button className='btn btn-sm md:btn-md btn-neutral btn-outline text-white normal-case text-base hover:bg-white hover:text-base-content'>Latest Project</button>
                    </div>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 right-12 bottom-4 gap-5">
                <a href="#slide5" className="btn btn-circle bg-opacity-30 border-opacity-30">❮</a> 
                <a href="#slide1" className="btn btn-circle btn-primary">❯</a>
            </div>
        </div>
    </div>
    );
};

export default Banner;