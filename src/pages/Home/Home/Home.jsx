import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SubCategoryCard from "../SubCategoryCard/SubCategoryCard";


const Home = () => {
    const [category,setCategory]=useState('truck')
    const [cars,setCars]=useState();
    useEffect(()=>{
        fetch(`http://localhost:5000/allToys/${category}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setCars(data)
        })
    },[category])
    const handleTab=(name)=>{
        setCategory(name)
        console.log(name);

    }

    return (
        <div>

            <Banner></Banner>
            <Gallery></Gallery>
            <div className="mb-56 mx-auto w-[1200px] ">
            <Tabs>
    <TabList className='text-center'>
      <Tab onClick={()=>handleTab('truck')}>Truck</Tab>
      <Tab onClick={()=>handleTab('sportsCar')}>Sports car</Tab>
      <Tab onClick={()=>handleTab('policeCar')}>Police car</Tab>
    </TabList>

    <TabPanel>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {
            cars?.map(car=><SubCategoryCard
            key={car._id}
            car={car}
            ></SubCategoryCard>)
          }
      </div>
    </TabPanel>

    <TabPanel >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {
            cars?.map(car=><SubCategoryCard
            key={car._id}
            car={car}
            ></SubCategoryCard>)
          }
      </div>
    </TabPanel>
    <TabPanel >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
    {
            cars?.map(car=><SubCategoryCard
            key={car._id}
            car={car}
            ></SubCategoryCard>)
          }
      </div>
    </TabPanel>
  </Tabs>
            </div>
        </div>
    );
};

export default Home;