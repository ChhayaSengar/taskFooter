import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
// import { MdMail } from "react-icons/md";

const Footer = () => {
  
    return (
    <footer className="bg-blue-900  text-lg   text-white">
      <div className="w-full ">
        <div className="w-[90%] mx-auto flex items-center justify-between">
          
          <div className="w-[95%] mx-auto grid md:grid-cols-4 sm:grid-cols-1 gap-2 py-4">
            <div className="md:mr-10">
              <h5 className="font-bold text-2xl mb-2  ">About our Company</h5>
              <hr className="border-b border-white w-20 mb-2 " />
              <p className="mb-4  text-[15px]  text-white">Corplyx Technologies excels in web development.Unit-930 I-thum Tower Sector-62 Noida,201301</p>

          <div className="flex mt-10">
          <ul className="list-none">
            <li className="inline-block mx-2"><a href="https://www.facebook.com/codewithfaraz" title="Facebook" className="text-white  no-underline"><FaFacebook /></a></li>
            <li className="inline-block mx-2"><a href="https://www.twitter.com/codewithfaraz" title="Twitter" className="text-white   no-underline"><FaTwitter /></a></li>
            <li className="inline-block mx-2"><a href="https://www.instagram.com/codewithfaraz" title="Instagram" className="text-white   no-underline"><FaInstagram /></a></li>
            <li className="inline-block mx-2"><a href="https://www.youtube.com/@codewithfaraz" title="Youtube" className="text-white   no-underline"><FaYoutube /></a></li>
           </ul>
        </div>
            </div>
          
            <div className="md:mr-10">   

              <h6 className="font-bold text-lg mb-2 ">IT Services</h6>
              <hr className="border-b border-white w-16 mb-2" />
              <p className="mb-2"><a href="#!" className="text-[15px] text-white ">App Development</a></p>
              <p className="mb-2"><a href="#!" className="text-[15px] text-white">Web Development</a></p>
              <p className="mb-2"><a href="#!" className="text-[15px] text-white">Game Development</a></p>
              <p className="mb-2"><a href="#!" className="text-[15px] text-white">Social Media Marketing</a></p>
              <p className="mb-2"><a href="#!" className="text-[15px] text-white">Block Chain Development</a></p>
              <p className="mb-2"><a href="#!" className="text-[15px] text-white">Search Engine Optimization</a></p>
            </div>
            <div className="md:mr-10">  
              <h6 className="font-bold text-lg mb-2  ">Useful links</h6>
              <hr className="border-b border-white w-16 mb-2" />
              <p className="mb-2"><a href="#!" className="text-[15px] text-white ">Bulk Email Services</a></p>
              <p className="mb-2"><a href="#!" className="text-[15px] text-white">Bulk SMS Services</a></p>
              <p className="mb-2"><a href="#!" className="text-[15px] text-white">Ecommerce Website</a></p>
              <p className="mb-2"><a href="#!" className="text-[15px] text-white">School Software</a></p>
              <p className="mb-2"><a href="#!" className="text-[15px] text-white">Dynamic Website</a></p>
              <p className="mb-2"><a href="#!" className="text-[15px] text-white">E-Learning Management System</a></p>

            </div>
            <div>
              <h6 className="font-bold text-lg mb-2 ">Contact</h6>
              <hr className="border-b border-white w-12 mb-2" />
              <p className="mb-2 text-[15px] text-white ">Noida, Delhi</p>
              <p className="mb-2 text-[15px] text-white ">collab@codewithfaraz.com</p>
              <p className="mb-2 text-[15px] text-white ">+91 80254 52xxx</p>
              <p className="mb-2 text-[15px] text-white ">+91 80254 55xxx</p>
            </div>
          </div>
          
        </div>
        
        
        <hr className="border-b border-white my-4" />
        {/* <div className="flex justify-center">
          <ul className="list-none">
            <li className="inline-block mx-2"><a href="https://www.facebook.com/codewithfaraz" title="Facebook" className="text-white  no-underline"><FaFacebook /></a></li>
            <li className="inline-block mx-2"><a href="https://www.twitter.com/codewithfaraz" title="Twitter" className="text-white   no-underline"><FaTwitter /></a></li>
            <li className="inline-block mx-2"><a href="https://www.instagram.com/codewithfaraz" title="Instagram" className="text-white   no-underline"><FaInstagram /></a></li>
            <li className="inline-block mx-2"><a href="https://www.youtube.com/@codewithfaraz" title="Youtube" className="text-white   no-underline"><FaYoutube /></a></li>
           </ul>
        </div> */}
        
        
        <div className="text-center py-3">
          <p className="text-sm">Copyright© 2024: Design and Develop by Chhaya Sengar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
