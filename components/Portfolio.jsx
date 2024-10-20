import Image from "next/legacy/image";
import { motion } from "framer-motion";
import postit from "../public/assets/images/postitnew.png";
import hotelrev from "../public/assets/images/hotelrev.png";
import web3mail from "../public/assets/images/web3mail.png";
import cocktail from "../public/assets/images/Cocktails.png";
import eventify from "../public/assets/images/eventify.mp4";
import interacty from "../public/assets/images/interacty.png";
import { Header } from "./About";

export function PortfolioCard({ children, className, href }) {
  return (
    <a
      transition={{
        type: "spring",
        delay: 0.1,
        ease: "easeOut",
        duration: 0.7,
        stiffness: 100,
      }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className={`${className} py-8 md:py-20 border-2 border-x-transparent border-t-secondary 
        border-b-transparent flex flex-col md:flex-row overflow-hidden`}
      >
        {children}
      </div>
    </a>
  );
}

export function ImageContainer({ src }) {
  return (
    <motion.div
      initial={{
        x: -100,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        type: "spring",
        ease: "easeOut",
        duration: 0.7,
        stiffness: 100,
      }}
      className="w-[100%] md:w-[50%]"
    >
      <Image src={src} alt={`Image for ${src}`} className="rounded-md border" />
    </motion.div>
  );
}

export function PortfolioDescription({ children }) {
  return (
    <motion.div
      className="text-secondary text-lg flex items-center md:w-[50%] md:pl-8 pt-8 md:pt-0"
      initial={{
        x: 100,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        type: "spring",
        delay: 0.5,
        ease: "easeOut",
        duration: 0.7,
        stiffness: 100,
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <section className="z-30 py-8 px-8">
      <Header>PORTFOLIO</Header>
      <div className="flex justify-center">
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            ease: "easeOut",
            duration: 0.7,
            stiffness: 100,
          }}
          className="py-4 text-lg lg:text-2xl md:text-xl text-secondary text-center lg:w-[700px]"
        >
          The following are some of my portfolio explorations. Each project card
          contains details of its features and tech stack utilized.
        </motion.p>
      </div>

      <section className="md:mt-24">
        <PortfolioCard href="https://post-it-two-beige.vercel.app/">
          <ImageContainer src={postit} />
          <PortfolioDescription>
            <p>
              PostIt is an AI-powered content generator for social media and SEO platforms, helping creators and marketers with content creation, niche research, keyword optimization, and meme generation
              <br />
              <br />
              The tech stack utilized for this project:
              <b> Next.js, React.js, Tailwind CSS, Supabase, Drizzle ORM, PostgreSQL and Clerk.</b>
              <br />
              <br />
            </p>
          </PortfolioDescription>
        </PortfolioCard>

        <PortfolioCard href="https://hotelrev.vercel.app/">
          <ImageContainer src={hotelrev} />
          <PortfolioDescription>
            <p>
              Hotelrev is an online travel agency in Africa that deals with Hopitallity
              (Hotels and apartment rentals). You can make reservations in African hotels 
              from anywhere in the world.
              <br />
              <br />
              The tech stack utilized for this project:
              <b> React.js, Context, Node.js, and Tailwind CSS.</b>
              <br />
              <br />
              View live project{" "}
              <u>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://hotelrev.vercel.app/"
                  className="text-blue"
                >
                  here
                </a>
              </u>{" "}
              
            </p>
          </PortfolioDescription>
        </PortfolioCard>

        <PortfolioCard href="https://web3mail-signup.vercel.app/">
          <ImageContainer src={web3mail} />
          <PortfolioDescription>
            <p>
              Web3mail is a web3 mailing service where users create a mail
              and can create a maillist with it, and send out newsletters,
               and can also subscribe to newsletters. The project may require
               you connect you crypto wallet, but don&apos;t be scared, the app
              won&apos;t deduct any of  your assets. If you are still uncertain, 
              then use a testnet like sepolia testnet.
              <br />
              <br />
              The tech stack utilized for this project:
              <b> React.js, wagmi, and TailwindCSS.</b>
              <br />
              <br />
              View live project{" "}
              <u>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://web3mail-signup.vercel.app/"
                  className="text-blue"
                >
                  here
                </a>
              </u>{" "}
            </p>
          </PortfolioDescription>
        </PortfolioCard>

        <PortfolioCard href="https://dashboard-test-taupe.vercel.app/">
          <ImageContainer src={eventify} />
          <PortfolioDescription>
            <p>
              Evenity is a simple event management system. Its nothing much, Just a project I built for an assessment test. It has nice animations and darkmode effect. Very nice and responsive UI.
              <br />
              <br />
              The tech stack used for this project:
              <b>
                {" "}
                React.js, TypeScript, and Tailwind CSS.
              </b>
            </p>
          </PortfolioDescription>
        </PortfolioCard>
      </section>
    </section>
  );
}
