import React from "react";
import { NavLink } from "react-router-dom";
import bg1 from '../images/bg1.webp';
import bg from '../images/bg.jpg';
import s1 from '../images/s1.png';
import s2 from '../images/s2.png';
import sirket from '../images/sirket.webp';
import Devam from '../pages/Devam';
import Son from '../pages/Son';

function Header() {
  return (
    <div>
      
           
<div className="flex gap-2 md:gap-12">
  <div className="flex items-start justify-center ml-48 gap-24 ">
            <NavLink to="/" className="text-blue-900 text-xl pt-8 hover:font-bold  cursor-pointer">
              Home
            </NavLink>
            <NavLink
              to="/about"
              className=" text-blue-900  text-xl pt-8 hover:font-bold  cursor-pointer"
            >
              About 
            </NavLink>
           
            <NavLink
              to="/contact"
              className="text-blue-900  text-xl pt-8 hover:font-bold  cursor-pointer"
            >
              Contact
            </NavLink>
           </div>
           <div className=" flex ml-32
            items-center justify-center ">
              
              
          <h1 className="text-blue-950 text-3xl font-semibold hover:text-blue-900 hover:cursor-pointer ">Landing</h1>
           </div>
           <div className="flex items-center justify-end  ">
            <button className=" bold-semibold cursor-pointer bg-blue-950 ml-80 items-center  text-white h-8 w-40 rounded-sm hover:bg-blue-900">Buy Now</button>
           </div>
           </div>
           
           <div className=" flex mt-48 ">
       
           </div>
           <h1 className=" flex ml-48 font-semibold text-blue-950 text-4xl tracking-wide">Indtroduce Your Product</h1><br></br>  
          
           <h1 className=" flex ml-48 font-semibold text-blue-950 text-4xl tracking-wide">& Quickliy & Effectively</h1>
           
           <p className=" mt-12 flex ml-48 text-blue-800">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, praesentium quisquam quidem eaasas</p> 
           <p className=" flex ml-48 text-blue-800">met consectetur adipisicing elit. Aut, praesentium quisquam quidem earum totam lauda</p> 
           <p className=" mt-4 flex ml-48 text-blue-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur illo commodi doloribus,</p> 
           <p className=" flex ml-48 text-blue-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur illo commodi doloribus.</p> <br></br>
           
           <div className="flex text-center items-center">
            <button className="flex mt-2 ml-48 bg-blue-950  text-white rounded-sm  hover:bg-blue-900 h-8 w-40 cursor-pointer items-center  justify-center">Puchase UI Kit</button>
            <button className="flex mt-2  ml-8 bg-white text-blue-950 font-semibold rounded-sm border-2 border-blue-950  hover:bg-blue-900  hover:text-white h-8 w-40 cursor-pointer items-center justify-center ">Learn More</button>
            
           <div className="flex relative items-end justify-end ">
          <img className=" flex items-end justify-end  w-96 h-full object-cover ml-96 translate-y-[-10rem] " src={bg1}></img></div>
            </div>
            <div className="mt-24">
      <h1 className='flex ml-48 font-semibold text-4xl tracking-wide text-blue-950'>Light, Fast & Powerful </h1>
      <p className=" mt-12 flex ml-48 text-blue-800">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, praesentium quisquam quidem earum totam lauda</p> 
           <p className=" flex ml-48 text-blue-800">met consectetur adipisicing elit. Aut, praesentium quisquam quidem earum totam lauda</p> 
           <p className=" mt-4 flex ml-48 text-blue-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur illo commodi doloribus,</p> 
           <p className=" flex ml-48 text-blue-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur illo commodi doloribus.</p> <br></br>
           <div className=" relative mt-12 flex text-center items-center">
            
           <h1 className="absolute top-16 left-48 font-semibold text-blue-950 text-xl">Title Goes Here</h1>
           
           <img className="h-16 w-16 ml-48 " src={bg}></img>
         
          <p className="absolute top-24 left-48 text-gray-700 ">Lorem adipisicing elit. Adipisci, doloribus!</p>
          <p className="absolute top-32 left-48  text-gray-700">Lorem ipsum dolor, sit amet consectetur iusto minima dicta.</p>
          
    </div>
    
    <div className=" items-center justify-center relative ml-36 flex text-center">
      
    <img className="flex justify-start h-16 w-16  mt-[-70px] ml-[-250px]" src={bg1}></img>
          
            <h1 className="absolute top-0 left-96 ml-36 font-semibold text-blue-950 text-xl">Title Goes Here</h1>
            
   
           <p className="absolute top-8 left-96 ml-36  text-gray-700  ">Lorem adipisicing elit. Adipisci, doloribus!</p>
           <p className="absolute top-16 left-96 ml-36  text-gray-700">Lorem ipsum dolor, sit amet consectetur iusto minima dicta.</p>
          
           
     </div>
    
     <div className="flex items-end justify-end ">
          <img className=" flex items-end justify-end h-48 w-96 ml-96 object-cover translate-y-[-5rem]" src={bg}></img></div>
    </div>
    <img  className=" ml-48 h-96 w-96" src={s1}></img>
<div className="ml-96 translate-y-[-15rem]">
      <h1 className='flex ml-72 font-semibold text-4xl tracking-wide text-blue-950'>Light, Fast & Powerful </h1>
      <p className=" mt-12 flex ml-72 text-blue-800">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, quisquam quidem earum totam lauda</p> 
           <p className=" flex ml-72 text-blue-800">met consectetur adipisicing elit. Aut, praesentium quisquam quidem earum totam lauda</p> 
           <p className=" mt-4 flex ml-72 text-blue-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur illo commodi doloribus,</p> 
           <p className=" flex ml-72 text-blue-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur illo commodi doloribus.</p> <br></br>
          
          
           <img  className="translate-x-[-12rem] mt-24 h-96 w-96" src={s2}></img>
<div className="ml-8 translate-y-[-15rem]">
  
      <h1 className='flex ml-72 font-semibold text-4xl tracking-wide text-blue-950'>Light, Fast & Powerful </h1>
      <p className=" mt-12 flex ml-72 text-blue-800">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, quisquam quidem earum totam lauda</p> 
           <p className=" flex ml-72 text-blue-800">met consectetur adipisicing elit. Aut, praesentium quisquam quidem earum totam lauda</p> 
           <p className=" mt-4 flex ml-72 text-blue-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur illo commodi doloribus,</p> 
           <p className=" flex ml-72 text-blue-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur illo commodi doloribus.</p> <br></br>
           </div>
           <img  className="translate-x-[-12rem] h-96 w-96" src={sirket}></img>
<div className=" border-l-indigo-200  ml-8 translate-y-[-15rem]">
      <h1 className='flex ml-72 font-semibold text-4xl tracking-wide text-blue-950'>Light, Fast & Powerful </h1>
      <p className=" mt-10 flex ml-72 text-blue-800">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, quisquam quidem earum totam lauda</p> 
           <p className=" flex ml-72 text-blue-800">met consectetur adipisicing elit. Aut, praesentium quisquam quidem earum totam lauda</p> 
           <p className=" mt-4 flex ml-72 text-blue-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur illo commodi doloribus,</p> 
           <p className=" flex ml-72 text-blue-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur illo commodi doloribus.</p> <br></br>
           <button className=" bold-semibold cursor-pointer bg-blue-950 ml-72 items-center  text-white h-8 w-40 rounded-sm hover:bg-blue-900" >Purchase Now</button>    
           </div>    
           
           

         
</div>
<Devam/>
<Son/>
           </div>
     

);
}

export default Header;