import './Banner.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Banner = () => {


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    useEffect(()=>{
        AOS.init();
    },[])

    return (
        <div data-aos="flip-left" className="banner mt-5 bg-gradient-to-r from-purple-500 to-pink-500 gap-5 justify-center items-center py-12 md:h-[600px] h-full">
            <div className="grid md:grid-cols-2 grid-cols-1">

                <div className="flex justify-center items-center">
                    <div className=''>
                        <h1 className=" text-2xl px-2 md:px-0 md:text-5xl font-bold text-white mb-8 relative">
                            <span className="inline-block">
                                <span className="animate-pulse">Z</span>
                                <span className="animate-pulse">o</span>
                                <span className="animate-pulse">o</span>
                                <span className="animate-pulse">m</span>
                                {/* <span className="animate-pulse">y</span> */}
                            </span>
                            <span className="inline-block relative">
                                <span className="absolute top-0 left-0 w-0 h-full bg-red-500 animate-slide-right"></span>
                                <span className="animate-pulse px-2 py-1">into</span>
                                <span className="animate-pulse px-2 py-1">Fun</span>
                                <span className="animate-pulse px-2 py-1">with</span>
                                <span className="animate-pulse px-2 py-1">Toy</span>
                                {/* <span className="inline-block  px-2 py-1">Animated</span> */}
                            </span>
                            <span className="inline-block">
                                <span className="animate-pulse">c</span>
                                <span className="animate-pulse">a</span>
                                <span className="animate-pulse">r</span>
                                <span className="animate-pulse">s</span>

                            </span>
                        </h1>

                        <p className='text-base md:text-lg px-2 md:px-0'>

                            Discover a world of fun and excitement with our amazing collection of toy cars!<br /> Experience the Thrill of High-Speed Races, Epic Stunts, and Limitless Possibilities <br /> as You Dive into a Whimsical World Where Imagination Knows no bounds.
                        </p>


                    </div>
                </div>

                <div className="mt-14">
                    <Carousel
                        draggable={false}
                        showDots={true}
                        responsive={responsive}
                        infinite={true}
                    >
                        <div className="card glass w-full">
                            <figure><img src="https://img.freepik.com/premium-photo/car-crash-accident-traffic-road-insurance-claim-concept_39768-8180.jpg?size=626&ext=jpg" className='h-40 w-full' alt="car!" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Sports Car</h2>
                                <p>Playful, pocket-sized, intricately designed.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Explore</button>
                                </div>
                            </div>
                        </div>
                        <div className="card  glass w-full ">
                            <figure><img src="https://images.unsplash.com/photo-1469037784699-75dcff1cbf75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHNwb3J0cyUyMCUyMHRveSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="car!" className='h-40 w-full' /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Mini Car</h2>
                                <p>Cute, vibrant, miniaturized, interactive.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Explore</button>
                                </div>
                            </div>
                        </div>
                        <div className="card  glass w-full ">
                            <figure><img src="https://img.freepik.com/premium-photo/toy-red-car-small-modern-automobile-generative-ai_629315-7831.jpg?size=626&ext=jpg" className='h-40 w-full' alt="car!" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Police Car</h2>
                                <p>Role-playing and action-packed.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Explore</button>
                                </div>
                            </div>
                        </div>
                        <div className="card  glass w-full ">
                            <figure><img src="https://images.unsplash.com/photo-1565174408946-a7a8c16a3933?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRydWNrJTIwdG95fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" className='h-40 w-full' alt="car!" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Excavator</h2>
                                <p>Durable, sturdy construction for play.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Explore</button>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Banner;