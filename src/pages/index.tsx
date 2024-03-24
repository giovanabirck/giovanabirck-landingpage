import Image from "next/image";
import Spline from '@splinetool/react-spline';
import Link from "next/link";
// import { Parallax, ParallaxProvider } from 'react-scroll-parallax';


export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col`}>
      <header className="header">
        <Image
          src="/logo.png"
          width={50}
          height={50}
          alt="logo"
          className="header-logo"
        />
        <h1>GIOVANA BIRCK</h1>
      </header>

      <div className="hero">
          <h1>DESIGNING EXPERIENCES THAT ENGAGE AND INSPIRE</h1>
        <div className="hero-content">
          <p className="hero-intro01">
            Product Designer passionate about creating innovative and accessible digital 
            experiences, my mission is to shape a more inclusive and connected tomorrow ✨
          </p>
          <div className="hero-spline">
            <Spline scene="https://prod.spline.design/zcBmlcOCoVYDZsC6/scene.splinecode" />
          </div>
          <p className="hero-intro02">
            Previously helped shape the future of work at ADP and designed 
            groundbreaking experiences with LORA and Gana&Voga ✨
          </p>
        </div>
      </div>

        <div className="innovative-interaction">
          <div>
            <Spline scene="https://prod.spline.design/Ve2oa2YR7eZdw38N/scene.splinecode" />
            <div className="innovative-spline-01">
                <Spline scene="https://prod.spline.design/brK3Es94J16vffrj/scene.splinecode" />
            </div>
          </div>
          <div className="innovative-content">
            <div className="innovative-spline">
              <Spline scene="https://prod.spline.design/brK3Es94J16vffrj/scene.splinecode" />
            </div>
            <p>
              Deep passion for crafting innovative interactions that engage and delight users. 
              For me, the magic of digital design lies in its ability to transform tasks into 
              captivating experiences beyond what's possible in the physical world.
            </p>
            <p>
              I thrive on the challenge of thinking outside the conventional design box, 
              experimenting with new methodologies, and leveraging cutting-edge technologies 
              to create interactions that are functional and memorable. 
            </p>
          </div>
        </div>

        <div className="projects-intro">
          <Spline scene="https://prod.spline.design/tsHHhYUSuY6rtdMo/scene.splinecode" />
        </div>

        <div className="projects-intro-tablet">
          <Spline scene="https://prod.spline.design/LiAziqijH6L2eZnE/scene.splinecode" />
        </div>

        <div className="projects">
          <h1>MONEYMENT</h1>
          <div className="projects-case"> 
            <p>
              Financial management app that simplifies budget tracking by 
              scanning receipts through Artificial Intelligence (AI)
            </p>
            <div className="project-spline">
              <Spline scene="https://prod.spline.design/o92UqzrVhzAS6BCt/scene.splinecode" />
            </div>
            <Link href="https://www.giovanabirck.com/moneyment" target="_blank">
              <div className="button-project01">View Project</div>
            </Link>
          </div>
        </div>

        <div className="projects">
          <h1>ALLERGY ALERT</h1>
          <div className="projects-case"> 
            <p>
              Digital solution designed to help people with 
              allergies find allergy-friendly restaurants
            </p>
            <div className="project-spline">
              <Spline scene="https://prod.spline.design/x-wSPxCEF6ApuqMY/scene.splinecode" />
            </div>
            <Link href="https://www.giovanabirck.com/allergy-alert" target="_blank">
              <div className="button-project02">View Project</div>
            </Link>
          </div>
        </div>

        <div className="projects">
          <h1>BEEBOO</h1>
          <div className="projects-case"> 
            <p>
              An educational experience about Canada's declining 
              bee population through interactive content and quizzes
            </p>
            <div className="project-spline">
              <Spline scene="https://prod.spline.design/wzWP80-s0tnWErct/scene.splinecode" />
            </div>
            <Link href="https://www.giovanabirck.com/beeboo" target="_blank">
              <div className="button-project03">View Project</div>
            </Link>
          </div>
        </div>

        <div className="projects">
          <h1>IMMERSE ART</h1>
          <div className="projects-case"> 
            <p>
              An immersive exploration of Concepts of White through 
              an interactive gallery map and Augmented Reality (AR)
            </p>
            <div className="project-spline">
              <Spline scene="https://prod.spline.design/XogpjhRpEzaa1rqy/scene.splinecode" />
            </div>
            <Link href="https://www.giovanabirck.com/immerse-art" target="_blank">
              <div className="button-project03">View Project</div>
            </Link>
          </div>
        </div>

        <div className="final">
          <h1>SEE YOU LATER!</h1>
          <div className="final-spline">
            <Spline scene="https://prod.spline.design/zy1S6rZCcFz9u6li/scene.splinecode" />
          </div>
          <div className="final-spline-tablet">
            <Spline scene="https://prod.spline.design/YPZ-kRCilgeaaqX0/scene.splinecode" />
          </div>
        </div>

        <footer>
          <p>contact@giovanabirck.com</p>
          <Link href="https://www.linkedin.com/in/giovanabirck/" target="_blank">linkedin.com/in/giovanabirck/</Link>
        </footer>

    </main>
  );
}
