import { FaRegStar,FaArrowCircleUp,FaShieldAlt} from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const About = () => {
    useEffect(()=>{
        AOS.init();
    },[])
    return (
        <div className=" mb-24 md:mt-36 md:relative">
            <div className="flex  flex-col-reverse md:flex-row  md:gap-32">
                <div className="md:w-[60%] w-full my-10 md:my-0">
                    <img src="https://images.pexels.com/photos/1648349/pexels-photo-1648349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className=" md:h-[500px] rounded-xl" alt="" />
                </div>
                <div className="md:w-[40%] w-full">
                    <p className="text-pink-700 text-xl font-bold mb-4">A B O U T</p>
                    <h2 className="font-bold  text-2xl md:text-5xl mb-4">About This Site</h2>
                    <p>Welcome to ToySpeedy.com We are a passionate team of toy car enthusiasts who are dedicated to bringing you the finest selection of toy cars. Whether you are a child at heart or a serious collector, we have got something for everyone.</p>
                </div>
            </div>
            <div  data-aos="fade-left" className=" md:absolute flex md:flex-row flex-col gap-8 md:left-72 md:top-60 
            ml-6 md:ml-0">
             
                    <div className=" w-72 h-80 shadow-xl border py-7 px-8 rounded-xl bg-white">

                     <FaRegStar className="w-16 h-16  mb-8"></FaRegStar>
                  
                   
                        <div className="">
                            <h2 className="text-3xl font-semibold mb-2">Exclusive</h2>
                            <p>Your ultimate destination for all things toy cars! We are thrilled to present our exclusive section, where you will find many  collection of toy cars </p>
                         
                        </div>
                    </div>
                    <div className=" w-72 h-80 shadow-xl border py-7 px-8 rounded-xl bg-white">

                     
                     <FaArrowCircleUp className="w-16 h-16  mb-8"></FaArrowCircleUp>
                  
                   
                        <div className="">
                            <h2 className="text-3xl font-semibold mb-2">UPDATE</h2>
                            <p>We take immense pride in curating our updated exclusive section and ensuring that every toy car meets our stringent standards of quality.</p>
                         
                        </div>
                    </div>
                    <div className=" w-72 h-80 shadow-xl border py-7 px-8 rounded-xl bg-white">

                
                     <FaShieldAlt className="w-16 h-16  mb-8"></FaShieldAlt>
                  
                   
                        <div className="">
                            <h2 className="text-3xl font-semibold mb-2">SECURE</h2>
                            <p>To further enhance your security, we recommend practicing safe browsing habits.We are available to assist you security issues.</p>
                         
                        </div>
                    </div>
                
            </div>
        </div>
    );
};

export default About;