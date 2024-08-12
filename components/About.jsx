import { motion } from 'framer-motion'
import { useRef } from 'react';

export function Header( { children } ) {

    return (
        <motion.h3 
          initial={{ opacity: 0, x: -100}}
          whileInView={{ opacity:1, x:0 }}  
          transition={{ type:'spring', ease: 'easeOut', duration: .7, stiffness: 100, delay:.3 }}
        className='uppercase text-center font-bold tracking-widest text-secondary font-bold md:text-xl'>
            {children}
        </motion.h3>
    )
}
export default function Profile() {

    const scrollRef = useRef(null);

    return (
        <section 
        className='py-20 md:py-0 lg:h-screen md:flex md:items-center md:justify-center'>
        <div className='z-20 -rotate-[8deg] w-[110%] bg-primary h-96 absolute -top-36 mt-2'/>
              {/* <Test/> */}
        <motion.div 
         viewport={{ root: scrollRef }}
         className='px-8 relative z-30'>

        <Header>
          Hey there!😊 
        </Header>

        <div className='flex justify-center'>            
        <motion.p 
         initial={{ opacity: 0, x: 100,}}
         whileInView={{ opacity:1, x:0 }}  
         transition={{ type:'spring', ease: 'easeOut', delay:.5, duration: .7, stiffness: 100, }}
        className='py-4 text-lg lg:text-2xl md:text-xl text-secondary text-center lg:w-[700px]'>
            I&apos;m Usenobong and i&apos;m a frontend and app developer with over 
            3 years of experience. I love creating cool, user-friendly 
            websites and apps that not only work great but also look 
            awesome. I&apos;m all about making things simple and fun to use. 
            When I&apos;m not coding, I&apos;m probably tinkering with new tools, 
            diving into side projects, or just keeping up with the 
            latest trends. Let&apos;s build something amazing together!
        </motion.p>
        </div>
        </motion.div>
        </section>
    )
}