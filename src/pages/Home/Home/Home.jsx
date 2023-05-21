import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SubCategoryCard from "../SubCategoryCard/SubCategoryCard";
import ShoppingCard from "../ShoppingCard/ShoppingCard";
import About from "../About/About";
import useTitle from "../../../hook/useTitle";


const Home = () => {
    useTitle('Home')
    const [category, setCategory] = useState('truck')
    const [cars, setCars] = useState();
    useEffect(() => {
        fetch(`https://assignment-11-server-site-teal.vercel.app/allToys/${category}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCars(data)
            })
    }, [category])
    const handleTab = (name) => {
        setCategory(name)
        console.log(name);

    }

    return (
        <div>

            <Banner></Banner>
           <div className="mx-auto w-[1200px] responsive-container px-4 md:px-0">
           <Gallery></Gallery>
            <div className="  ">
                <h2 className="text-2xl md:text-4xl text-center font-bold mb-8">Shop By Category</h2>
                <Tabs>
                    <TabList className='text-center mb-10 text-lg md:text-xl font-bold'>
                        <Tab onClick={() => handleTab('truck')} >Truck</Tab>
                        <Tab onClick={() => handleTab('sportsCar')}>Sports car</Tab>
                        <Tab onClick={() => handleTab('policeCar')}>Police car</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {
                                cars?.map(car => <SubCategoryCard
                                    key={car._id}
                                    car={car}
                                ></SubCategoryCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {
                                cars?.map(car => <SubCategoryCard
                                    key={car._id}
                                    car={car}
                                ></SubCategoryCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {
                                cars?.map(car => <SubCategoryCard
                                    key={car._id}
                                    car={car}
                                ></SubCategoryCard>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
            <ShoppingCard></ShoppingCard>
            <About></About>
           </div>
        </div>
    );
};

export default Home;