import {Header} from './Components/Header'
import {Link} from 'react-router-dom'
import '../index.css'


export function HomePage() {


    return (
        <section className="relative h-screen over-flow-hidden" >
            <video autoPlay
            loop
            muted
            playsInline
            className = "absolute inset-0 w-full h-full object-cover -z-10">
                <source src="/landingpagevideo.mp4" />
            </video>
            <Header />
           
            <div className = "text-center mt-100 text-brand-navy flex flex-wrap justify-center md:mt-100  md:flex-col lg:mt-115">
               <h1 className = "text-[65px] font-bold  font-headline md:text-110 xl:text-[120px]">
                <span className = "transiton-all duration-300 hover:text-brand-gold">NO </span>
                <span className = "transiton-all duration-300 hover:text-brand-gold">LIMITS. </span>
                <span className = "transiton-all duration-300 hover:text-brand-gold">JUST </span>   
                <span className="text-brand-gold duration-300 hover:text-brand-navy" > STEPS</span></h1>
               <h2 className = "text-[12px] font-bold lg:text-[20px]">Footwear designed for every story, every build, and every single steps</h2>
            </div>
            <div className="flex justify-center mt-10 "> 
                <span className = "bg-brand-gold px-3 py-2 rounded-[20px] text-white font-body hover:bg-amber-400">
                    <Link to="/products"><button className="cursor-pointer" >Shop Now</button></Link>
                </span>
                
            </div>
            
        </section>

    )
}