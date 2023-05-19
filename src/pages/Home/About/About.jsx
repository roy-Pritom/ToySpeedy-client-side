import { FaRegStar,FaArrowCircleUp,FaShieldAlt} from "react-icons/fa";


const About = () => {
    return (
        <div className="w-[1200px] mx-auto mb-24 mt-36 relative">
            <div className="flex  gap-32">
                <div className="w-[60%]">
                    <img src="https://images.pexels.com/photos/1648349/pexels-photo-1648349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className=" h-[500px] rounded-xl" alt="" />
                </div>
                <div className="w-[40%]">
                    <p className="text-pink-700 text-xl font-bold mb-4">A B O U T</p>
                    <h2 className="font-bold text-5xl mb-4">About This Site</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, dolores! Optio repellendus in, odit doloremque aperiam a fugit dolorem esse, ea atque repellat molestiae tempora dignissimos labore non distinctio ipsa!</p>
                </div>
            </div>
            <div className="absolute flex gap-8 left-72 top-60 ">
             
                    <div className=" w-72 h-80 shadow-xl border py-7 px-8 rounded-xl bg-white">

                     <FaRegStar className="w-16 h-16  mb-8"></FaRegStar>
                  
                   
                        <div className="">
                            <h2 className="text-3xl font-semibold mb-2">Exclusive</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur cum sit, adipisci beatae repellat assumenda velit neque ipsu.</p>
                         
                        </div>
                    </div>
                    <div className=" w-72 h-80 shadow-xl border py-7 px-8 rounded-xl bg-white">

                     
                     <FaArrowCircleUp className="w-16 h-16  mb-8"></FaArrowCircleUp>
                  
                   
                        <div className="">
                            <h2 className="text-3xl font-semibold mb-2">UPDATE</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur cum sit, adipisci beatae repellat assumenda velit neque ipsu.</p>
                         
                        </div>
                    </div>
                    <div className=" w-72 h-80 shadow-xl border py-7 px-8 rounded-xl bg-white">

                
                     <FaShieldAlt className="w-16 h-16  mb-8"></FaShieldAlt>
                  
                   
                        <div className="">
                            <h2 className="text-3xl font-semibold mb-2">SECURE</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur cum sit, adipisci beatae repellat assumenda velit neque ipsu.</p>
                         
                        </div>
                    </div>
                
            </div>
        </div>
    );
};

export default About;