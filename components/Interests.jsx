import { Header } from "./About"
import { motion } from "framer-motion"
export default function Interests() {

    return (

        <section className="py-24 px-8 lg:h-screen lg:flex lg:items-center lg:justify-center">
          <div>
            <Header>
                INTERESTS
            </Header>
          <div className="flex justify-center ">
            <motion.p 
            initial={{ opacity: 0, x: 100}}
            whileInView={{ opacity:1, x: 0 }}  
            transition={{ type:'spring', ease: 'easeOut', duration: .7, stiffness: 100, }}
            className="py-4 text-base md:text-xl text-secondary text-center lg:w-[700px]">
            I am particularly interested 
            in using modern JavaScript libraries such as React to build performant, 
            interactive user interfaces. I also love building useful applications using 
            React Native. I am actively involved in the open source community and have 
            contributed to several projects on GitHub.
             
             <br/>
             <br/>
             In my free time, I love to travel,
             workout and cook at home. I also play sports like football, golf and badminton
            </motion.p>
          </div>
          </div>
        </section>
    )
}