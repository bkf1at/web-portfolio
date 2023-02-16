//import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
//import { projects } from "../data";

export default function About() {

    return ( 
        <section id = "about" className = "relative" >
            <div className = "container px-5 py-10 mx-auto grid grid-cols-2 gap-3">
                <div className="pl-20 pt-20">
                    <h1 className="text-5xl text-white pb-2">Hello, I'm Barbara</h1>
                    <h5 className="text-2xl text-white pb-2">I like building apps that make an impact in each clients' lives.</h5>
                    <p className="pb-6">As a freelancer web developer for the past 3 years, I have engaged in remote work for startups, trained clients' on CMS platforms and worked alongside other developers to build applications for end users. I am persistent on acquiring new skills to be competitive in my field of work while keeping abreast with new technology.</p>
                    <a href="https://zabbyweekly.com/" className ="text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">See My Blog</a>
                    
                </div>
                <div class="columns-2">
                    <a target="_blank" rel="noreferrer">
                        <img className="object-scale-down h-25 w-25" src = "https://i.postimg.cc/Kz6PvngX/program.png" alt="coding"></img> 
                    </a>  
                </div> 
            </div> 
        </section >
    );
}