import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Intro from './Intro';
import ProjectSummary from './ProjectSummary';
import Profile from './Profile';
import Footer from 'components/Footer';
import { usePrefersReducedMotion, useRouteTransition } from 'hooks';
import iphone11 from 'assets/iphone-11.glb';
import macbookPro from 'assets/macbook-pro.glb';
import portrait from 'assets/portrait.glb';
import './index.css';

import craftHolder from 'assets/project-pics/craft-cover.jpg';
import meanswearHolder from 'assets/project-pics/menwears-cover.jpg';
import atelierHolder from 'assets/project-pics/atelier-cover.jpg';
import tunicHolder from 'assets/project-pics/tunic-cover.jpg';
import taashiHolder from 'assets/project-pics/taashi-cover.jpg';
import phonePlaceholder from 'assets/mobile-placeholder.jpg';
import desktopPlaceholder from 'assets/desktop-placeholder.jpg';

const disciplines = ['Entrepreneur', 'Traveller'];

const Home = () => {
  const { status } = useRouteTransition();
  const { hash, state } = useLocation();
  const initHash = useRef(true);
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const about = useRef();
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const revealSections = [
      intro,
      projectOne,
      projectTwo,
      projectThree,
      projectFour,
      projectFive,
      about,
    ];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px' }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    revealSections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  useEffect(() => {
    const hasEntered = status === 'entered';
    const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;
    let scrollObserver;
    let scrollTimeout;

    const handleHashchange = (hash, scroll) => {
      clearTimeout(scrollTimeout);
      const hashSections = [
        intro,
        projectOne,
        projectTwo,
        projectThree,
        projectFour,
        projectFive,
        about,
      ];
      const hashString = hash.replace('#', '');
      const element = hashSections.filter(item => item.current.id === hashString)[0];
      if (!element) return;
      const behavior = scroll && !prefersReducedMotion ? 'smooth' : 'instant';
      const top = element.current.offsetTop;

      scrollObserver = new IntersectionObserver(
        (entries, observer) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            scrollTimeout = setTimeout(
              () => {
                element.current.focus();
              },
              prefersReducedMotion ? 0 : 400
            );
            observer.unobserve(entry.target);
          }
        },
        { rootMargin: '-20% 0px -20% 0px' }
      );

      scrollObserver.observe(element.current);

      if (supportsNativeSmoothScroll) {
        window.scroll({
          top,
          left: 0,
          behavior,
        });
      } else {
        window.scrollTo(0, top);
      }
    };

    if (hash && initHash.current && hasEntered) {
      handleHashchange(hash, false);
      initHash.current = false;
    } else if (!hash && initHash.current && hasEntered) {
      window.scrollTo(0, 0);
      initHash.current = false;
    } else if (hasEntered) {
      handleHashchange(hash, true);
    }

    return () => {
      clearTimeout(scrollTimeout);
      if (scrollObserver) {
        scrollObserver.disconnect();
      }
    };
  }, [hash, state, prefersReducedMotion, status]);

  return (
    <div className="home">
      <Helmet>
        <title>Tanisha Darshani | Fashion Designer</title>
        <meta
          name="description"
          content="Portfolio of Tanisha Darshani – a Fashion Designer & Entrepreneur with a focus on attension to detail and perfection."
        />
        <link rel="prefetch" href={iphone11} as="fetch" crossorigin="" />
        <link rel="prefetch" href={macbookPro} as="fetch" crossorigin="" />
        <link rel="prefetch" href={portrait} as="fetch" crossorigin="" />
      </Helmet>
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        alternate
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Design Project Craft Based"
        description="In this project we had to get inspired by any Indian Art or Craft. I chose Rogan Art as my inspiration. So for that I had to visit a small village in Bhuj, Gujarat named Nirona. Where Rogan Art is practised. "
        buttonText="View Project"
        buttonLink="/projects/craft-docs"
        model={{
          type: 'phone',
          alt: 'Design Project Craft Based',
          textures: [
            {
              src: craftHolder,
              srcSet: `${craftHolder} 254w, ${craftHolder} 508w`,
              placeholder: phonePlaceholder,
            },
            {
              src: craftHolder,
              srcSet: `${craftHolder} 254w, ${craftHolder} 508w`,
              placeholder: phonePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Menswear"
        description="In this Project my inspiration was the sculptural artist name Erwin Wurm. The design process was taken by the concept of everyday objects in our daily life."
        buttonText="View Project"
        buttonLink="/projects/menswear"
        model={{
          type: 'laptop',
          alt: 'Menswear',
          textures: [
            {
              src: meanswearHolder,
              srcSet: `${meanswearHolder} 800w, ${meanswearHolder} 1440w`,
              placeholder: desktopPlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Atelier"
        description="Atelier means a workshop or a studio meant especially for the artist, designer or fashion house. It focuses on couture, tailoring techniques, being creative with both patterns and as well as fabrication."
        buttonText="View Project"
        buttonLink="/projects/atelier"
        model={{
          type: 'phone',
          alt: 'Atelier',
          textures: [
            {
              src: atelierHolder,
              srcSet: `${atelierHolder} 254w, ${atelierHolder} 508w`,
              placeholder: phonePlaceholder,
            },
            {
              src: atelierHolder,
              srcSet: `${atelierHolder} 254w, ${atelierHolder} 508w`,
              placeholder: phonePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Tunic"
        description="My M.O for this was to choose a famous monument and design something in its inspiration. I chose the Taj Mahal for this project."
        buttonText="View Project"
        buttonLink="/projects/tunic"
        model={{
          type: 'laptop',
          alt: 'Tunic',
          textures: [
            {
              src: tunicHolder,
              srcSet: `${tunicHolder} 800w, ${tunicHolder} 1440w`,
              placeholder: desktopPlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="Taashi"
        description="Building my own fashion brand whose aim is to provide stylish clothes to people with affordability in mind."
        buttonText="View Project"
        buttonLink="/projects/taashi"
        model={{
          type: 'phone',
          alt: 'Taashi',
          textures: [
            {
              src: taashiHolder,
              srcSet: `${taashiHolder} 254w, ${taashiHolder} 508w`,
              placeholder: phonePlaceholder,
            },
            {
              src: taashiHolder,
              srcSet: `${taashiHolder} 254w, ${taashiHolder} 508w`,
              placeholder: phonePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={about}
        visible={visibleSections.includes(about.current)}
        id="about"
      />
      <Footer />
    </div>
  );
};

export default Home;
