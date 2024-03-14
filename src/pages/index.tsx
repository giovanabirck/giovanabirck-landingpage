import Image from "next/image";
import Spline from '@splinetool/react-spline';
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
        />
        <h1>GIOVANA BIRCK</h1>
        <div className="button">Resume</div>
      </header>

      <div className="hero">
          <h1>DESIGNING EXPERIENCES THAT ENGAGE AND INSPIRE</h1>
        <div className="hero-content">
          <p className="hero-intro01">
            Passionate about creating innovative and accessible digital experiences, 
            my mission is to shape a more inclusive and connected tomorrow ✨
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

        <div>
          <Spline scene="https://prod.spline.design/tsHHhYUSuY6rtdMo/scene.splinecode" />
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
            <div className="button-project">View Project</div>
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
            <div className="button-project">View Project</div>
          </div>
        </div>

        <div className="final">
          <h1>SEE YOU LATER!</h1>
          <div className="final-spline">
            <Spline scene="https://prod.spline.design/zy1S6rZCcFz9u6li/scene.splinecode" />
          </div>
        </div>

        <footer>
          <p>contact@giovanabirck.com</p>
          <p>linkedin.com/in/giovanabirck/</p>
        </footer>

    </main>
  );
}
