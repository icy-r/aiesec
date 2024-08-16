import React from 'react';
import ct65Image from '../assets/ct65.jpg';
import ct66Image from '../assets/ct66.jpg';
import ct67Image from '../assets/ct67.jpg';
import ct68Image from '../assets/ct68.jpg';
import ct69Image from '../assets/ct69.jpg';
import ct70Image from '../assets/ct70.jpg';
// import { Image } from 'antd';


function New1() {
    return (
        <div className='min-h-screen text-white flex flex-col md:flex-row max-w-6xl justify-center items-center p-4'>
            <div className='max-w-4xl mx-auto text-left'>
                <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold md:mb-8 tracking-tight text-purple-950'>Benchmark <span className='text-white'>3.0</span></h2>
                <div className='text-lg md:text-xl lg:text-2xl mt-5 space-y-4'>
                    <p className='leading-relaxed text-wrap max-w-4xl p-5 bg-slate-950 rounded-lg bg-opacity-20 shadow-md'>
                        Benchmark 3.0 is a three-stage event aimed at advancing skills in UI/UX design. It starts with a hands-on bootcamp, followed by a hackathon where teams compete to create innovative UI/UX designs according to the given challenge. The event wraps up with a prototyping competition, where participants turn their designs into functional prototypes, demonstrating their ability to bring ideas to life.
                    </p>
                </div>
            </div>
            
            <div className="imagevw md:max-w-2xl md:m-2 p-2 text-left">
                <img 
                    src={ct65Image}
                    alt="image" 
                    className="rounded-lg shadow-lg"
                />
            </div>
            
        </div>
    );
}
    export default New1;
