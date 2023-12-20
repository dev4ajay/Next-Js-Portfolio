
"use client"
// import About from "./about/page"
// import Footer from "./Footer/page"
// import Blog from "./blog/page"
// import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
// import Nav from "./Nav/nav"
import Home2 from "./Home2/page"
// import Api from "../Api/api"
export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
 <main  className="container mx-auto">





{/* <Nav/> */}
<Home2/>
  {/* <About/> */}

  
  {/* <Api/>
  <Footer/> */}

 </main>
  )
}
