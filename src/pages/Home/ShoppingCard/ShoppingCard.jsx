import { FaShoppingBag, FaRegClock, FaUserNurse, FaRegHandPointer, FaArrowRight } from "react-icons/fa";

const ShoppingCard = () => {
    return (
        <div className="w-[1200px] mx-auto mb-16 mt-32">
            {/* <span className="text-4xl font-bold tracking-wide">Stylish Text</span> */}
            


            <div className="">
                <h2 className="text-5xl font-bold ">
                  <span>
                  PLANNING TO SHOPPING?<br />
                    SHOPPING US YOUR TOY<br />
                    IN 29 MINUTES.
                  </span>
                </h2>
            </div>
            <div className="flex gap-5 items-center">
                <div className="w-1/2">
                    <div className="grid grid-cols-2 gap-10">
                        {/* <h1>PLANNING TO SELL?
                        SELL US YOUR CAR
                        IN 29 MINUTES.</h1> */}

                        <div className="flex items-center gap-5">
                            <div className="border rounded-lg w-20 h-20 shadow-lg flex justify-center items-center">
                                <FaShoppingBag className="w-10 h-7"></FaShoppingBag>
                            </div>
                            <p className="text-2xl">Outright <br />
                                <span className="text-xl font-bold">Sale</span></p>
                        </div>

                        <div className="flex items-center gap-5">
                            <div className="border rounded-lg w-20 h-20 shadow-lg flex justify-center items-center">
                                <FaRegClock className="w-10 h-7"></FaRegClock>

                            </div>
                            <p className="text-2xl">Best Offer
                                <br />
                                <span className="text-xl font-bold">in 29 Minutes</span></p>
                        </div>

                        <div className="flex items-center gap-5">
                            <div className="border rounded-lg w-20 h-20 shadow-lg flex justify-center items-center">
                                <FaUserNurse className="w-10 h-7"></FaUserNurse>

                            </div>
                            <p className="text-2xl">
                                7600+ Satisfied <br />
                                <span className="text-xl font-bold">Customers
                                </span></p>
                        </div>

                        <div className="flex items-center gap-5">
                            <div className="border rounded-lg w-20 h-20 shadow-lg flex justify-center items-center">
                                <FaRegHandPointer className="w-10 h-7"></FaRegHandPointer>

                            </div>
                            <p className="text-2xl">Hassle Free<br />
                                <span className="text-xl font-bold">Processing
                                </span></p>
                        </div>

                    </div>
                    <button className="btn btn-outline btn-primary mt-10 w-1/2 flex justify-between">
                        KNOW MORE
                        <FaArrowRight></FaArrowRight>

                    </button>

                </div>
                <div className="w-1/2">
                    <img src="https://img.freepik.com/premium-photo/father-son-hands-toys_23-2148511208.jpg?size=626&ext=jpg" className="rounded-lg shadow-lg" alt="" />
                </div>

            </div>
        </div>
    );
};

export default ShoppingCard;