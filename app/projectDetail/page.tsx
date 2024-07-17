import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/ProjectDetail.module.css';

export const metadata: Metadata = {
  title: "Project Detail",
  description: 'Detailed view of the project.',
};

function GridItem({ left, right }: { left: React.ReactNode, right: React.ReactNode }) {
  return (
    <div className={styles.grid}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}

export default function ProjectDetail() {
  return (
    <div className={styles.bannerContainer}>
      <section className={styles.bannerSection}>
        <div className={styles.bannerText}>
          <h1 className={styles.bannerTitle}>A NEW KIND OF TRAVEL FORUM</h1>
          <p className={styles.bannerSubtitle}>Reliable, offline information for Gen Z backpackers.</p>
          <p className={styles.projectDetails}><br/>Category: Mobile app</p>
          <p className={styles.projectDetails}>Role: Researcher, UX/UI designer</p>
        </div>
        <div className={styles.imageSection}>
          <Image
            src="/assets/project_banner.png"
            alt="Project Mockup"
            layout="responsive"
            width={500}
            height={661}
            className={styles.projectImage}
          />
        </div>
        <div className={styles.logoMenu}>
          <Link href="/">
            <img src="/assets/Back button.png" alt="Back" className={styles.logo} />
          </Link>
        </div>
      </section>

      <section id="projects" className={styles.projectsSection}>
        <GridItem
          left={
            <div className={styles.text}>
              <h2 className={styles.title}>Introducing Thorn Tree 2.0</h2>
              <p className={styles.description}>
                Thorn Tree 2.0 is an innovative travel app that caters to Gen Z backpackers, leveraging community input and advanced AI technology to deliver accurate, up-to-date travel advice and solutions. The application revives the spirit of Lonely Planet&apos;s original Thorn Tree forum, adapting it to the needs and preferences of today&apos;s young explorers.
              </p>
            </div>
          }
          right={
            <div className={styles.imageWrapper}>
              <Image
                src="/assets/project1_mockup.png"
                alt="Project Mockup"
                layout="responsive"
                width={500}
                height={661}
                className={styles.projectImage}
              />
            </div>
          }
        />

        <section id="keyLearnings" className={styles.keyLearningsSection}>
          <div className={styles.keyLearningsContent}>
            <p className={styles.keyLearningDescription}>
              Lonely Planet sought to create an application that provides Gen Z&apos;ers with street-smart, correct, updated, and relevant travel information throughout the backpacking journey.
            </p> 
            <p className={styles.keyLearningDescription}>
              <br/> <br/>
              65% of Gen Z&apos;ers feel more confident using community apps over feed-based apps according to a 2022 report by Impero Creative Agency.
            </p> 
          </div>
        </section>

        <GridItem
          right={
            <div className={styles.text}>
              <h3 className={styles.title}>Understanding Gen Z&apos;s pain points</h3>
              <p className={styles.description}>
                Our research highlighted pain points that Gen Z backpackers face, such as outdated information, lack of offline access, and irrelevant content. We focused on these issues to ensure our app meets the needs of the modern backpacker.
              </p>
            </div>
          }
          left={
            <div className={styles.imageWrapper}>
              <Image
                src="/assets/gen_z_pain_points.png"
                alt="Gen Z Pain Points"
                className={styles.image}
                layout="responsive"
                width={800}
                height={600}
                objectFit="contain"
              />
            </div>
          }
        />

        <section id="artDirection" className={styles.artDirectionSection}>
          <div className={styles.artDirectionContent}>
            <h2 className={styles.artTitle}>Learning from our competitors</h2>
            <p className={styles.description}>
              We examined popular platforms like Reddit, Discord, Quora, and Trip Advisor, identifying gaps in travel-specific, offline-accessible, and Gen Z-targeted content. The analysis highlighted a significant opportunity to modernise the Thorn Tree forum, making it more relevant and functional for Gen Z backpackers.
              <br/> <br/>
              Gen Z backpackers prefer community-driven platforms for travel advice and need offline-accessible, summarised content. Few products in the market effectively combine these features.
              <br/> <br/>
              Our app, Thorn Tree 2.0 aims to provide Gen Z backpackers with a reliable, community-driven platform for travel planning and problem-solving. The app combines the best features of existing platforms while introducing unique functionalities tailored to Gen Z&apos;s needs.
              <br/> <br/> <br/>
            </p>
          </div>
          <div className={styles.imageArtWrapper}>
              <Image
                src="/assets/competitors_analysis.png"
                alt="Competitors Analysis"
                className={styles.image}
                layout="responsive"
                width={1200}
                height={1200}
                objectFit="contain"
              />
          </div>
        </section>

        <section id="personas" className={styles.personaSection}>
          <h2 className={styles.title}>Distilling research into personas</h2>
          <div className={styles.personasGrid}>
            <div className={styles.persona}>
              <div className={styles.personaImageWrapper}>
                <Image
                  src="/assets/amy.png"
                  alt="Ask-For-Help Amy"
                  className={styles.personaImage}
                  layout="responsive"
                  width={488}
                  height={233}
                  objectFit="cover"
                />
              </div>
              <div className={styles.personaText}>
                <h3>Ask-For-Help Amy <span>(Primary)</span></h3>
                <p>Prefers seeking advice from friends and community</p>
                <p>Struggles with too many options and missing out on the best experiences</p>
              </div>
            </div>
            <div className={styles.persona}>
              <div className={styles.personaImageWrapper}>
                <Image
                  src="/assets/dan.png"
                  alt="Do-It-Yourself Dan"
                  className={styles.personaImage}
                  layout="responsive"
                  width={488}
                  height={233}
                  objectFit="cover"
                />
              </div>
              <div className={styles.personaText}>
                <h3>Do-It-Yourself Dan</h3>
                <p>Relies on careful planning and online forums</p>
                <p>Faces challenges with finding reliable information and managing transportation</p>
              </div>
            </div>
            <div className={styles.persona}>
              <div className={styles.personaImageWrapper}>
                <Image
                  src="/assets/will.png"
                  alt="Whatever-She-Wants Will"
                  className={styles.personaImage}
                  layout="responsive"
                  width={488}
                  height={233}
                  objectFit="cover"
                />
              </div>
              <div className={styles.personaText}>
                <h3>Whatever-She-Wants Will</h3>
                <p>Let his partner make travel decisions</p>
                <p>Faces difficulties when alone and lacks experience in planning</p>
              </div>
            </div>
          </div>
        </section>

        <section id="artDirection" className={styles.artDirectionSection}>
          <div className={styles.artDirectionContent}>
            <h2 className={styles.artTitle}>How might “Ask-For-Help Amy” find a motorbike rental in Bangkok?</h2>
            <p className={styles.description}>
              The user journey begins with setting travel preferences, followed by browsing community-generated content, saving relevant information, and accessing it offline. Wireframes were developed to visualize these interactions, ensuring an intuitive and seamless user experience.
              <br/>
            </p>
          </div>
          <div className={styles.imageArtWrapper}>
            <Image
                  src="/assets/Wireframe 1.png"
                  alt="Wireframe 1"
                  className={styles.image}
                  layout="responsive"
                  width={800}
                  height={400}
                  objectFit="contain"
                />
          </div>
        </section>

        <section id="artDirection" className={styles.artDirectionSection}>
          <div className={styles.artDirectionContent}>
            <h2 className={styles.artTitle}>Art Direction</h2>
            <p className={styles.description}>
              The UI of Thorn Tree 2.0 is designed to be clean, modern, and user-friendly, with a focus on easy navigation and quick access to important features. The design reflects the preferences and behaviours of Gen Z users.
              <br/>
              <br/>
            </p>
          </div>
          <div className={styles.imageArtWrapper}>
            <Image
              src="/assets/art_direction.png"
              alt="Art Direction"
              className={styles.image}
              layout="responsive"
              width={600}
              height={400}
              objectFit="contain"
            />
          </div>
        </section>

        <section id="keyLearnings" className={styles.keyLearningsSection}>
          <div className={styles.keyLearningsContent}>
            <p className={styles.keyLearningDescription}>
              Our key learning from this project is the importance of understanding the specific needs and behaviors of the target audience. By focusing on community-driven content, offline access, and user engagement, we created a travel app that truly resonates with Gen Z backpackers.
            </p>
          </div>
        </section>

        <section id="thanks" className={styles.thanksSection}>
          <GridItem
            left={
              <div className={styles.text}>
                <h3 className={styles.title}>Thanks to the Team</h3>
                <p className={styles.description}>
                  We could not have done this without my teammates and our professor, Irene, Co-founder of Anton & Irene Design Studio, guidance. Our team including Yazar, Payal, Stafini and Me (Moses) with diverse backgrounds and knowledge collaboratively approached the development of this awesome project through thick and thin.
                </p>
              </div>
            }
            right={
              <div className={styles.imageWrapper}>
                <Image
                  src="/assets/team.png"
                  alt="Team"
                  className={styles.image}
                  layout="responsive"
                  width={800}
                  height={600}
                  objectFit="contain"
                />
              </div>
            }
          />
        </section>
        
      </section>
    </div>
  );
}
