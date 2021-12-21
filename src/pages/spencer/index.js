import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Image from 'components/Image';
import Footer from 'components/Footer';
import {
  ProjectContainer,
  ProjectBackground,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectImage,
  ProjectTextRow,
} from 'components/ProjectLayout';
import { useTheme } from 'components/ThemeProvider';
import { useAppContext, useScrollRestore } from 'hooks';
import { media } from 'utils/style';
import prerender from 'utils/prerender';
import deviceModelsBackground from 'assets/device-models-background.jpg';
import deviceModelsBackgroundLarge from 'assets/device-models-background-large.jpg';
import deviceModelsBackgroundPlaceholder from 'assets/device-models-background-placeholder.jpg';
import deviceModelsPlaceholder from 'assets/device-models-placeholder.jpg';
import projectPlaceholder from 'assets/project-placeholder.jpg';

import image1 from 'assets/project-pics/spencer/1.jpg';
import image2 from 'assets/project-pics/spencer/2.jpg';
import image3 from 'assets/project-pics/spencer/3.jpg';
import image4 from 'assets/project-pics/spencer/4.jpg';
import image5 from 'assets/project-pics/spencer/5.jpg';
import image6 from 'assets/project-pics/spencer/6.jpg';
import image7 from 'assets/project-pics/spencer/7.jpg';
import image8 from 'assets/project-pics/spencer/8.jpg';
import image9 from 'assets/project-pics/spencer/9.jpg';
import image10 from 'assets/project-pics/spencer/10.jpg';
import image11 from 'assets/project-pics/spencer/11.jpg';
import image12 from 'assets/project-pics/spencer/12.jpg';
import image13 from 'assets/project-pics/spencer/13.jpg';
import image14 from 'assets/project-pics/spencer/14.jpg';
import image15 from 'assets/project-pics/spencer/15.jpg';
import image16 from 'assets/project-pics/spencer/16.jpg';
import image17 from 'assets/project-pics/spencer/17.jpg';
import image18 from 'assets/project-pics/spencer/18.jpg';
import image19 from 'assets/project-pics/spencer/19.jpg';
import image20 from 'assets/project-pics/spencer/20.jpg';
import image21 from 'assets/project-pics/spencer/21.jpg';
import image22 from 'assets/project-pics/spencer/22.jpg';
import image23 from 'assets/project-pics/spencer/23.jpg';
import image24 from 'assets/project-pics/spencer/24.jpg';
import image25 from 'assets/project-pics/spencer/25.jpg';
import image26 from 'assets/project-pics/spencer/26.jpg';
import image27 from 'assets/project-pics/spencer/27.jpg';
import image28 from 'assets/project-pics/spencer/28.jpg';
import image29 from 'assets/project-pics/spencer/29.jpg';
import image30 from 'assets/project-pics/spencer/30.jpg';
import image31 from 'assets/project-pics/spencer/31.jpg';
import image32 from 'assets/project-pics/spencer/32.jpg';
import image33 from 'assets/project-pics/spencer/33.jpg';
import image34 from 'assets/project-pics/spencer/34.jpg';
import image35 from 'assets/project-pics/spencer/35.jpg';
import image36 from 'assets/project-pics/spencer/36.jpg';
import image37 from 'assets/project-pics/spencer/37.jpg';
import image38 from 'assets/project-pics/spencer/38.jpg';
import image39 from 'assets/project-pics/spencer/39.jpg';
import image40 from 'assets/project-pics/spencer/40.jpg';

const title = 'Design for brand (high street brand)- Mark & Spencer';
const description =
  "In this project we had to study and create unique patterns based of Mark & Spencer's clothing ";
const roles = ['Prints', 'Surface Techniques', 'Print Analysis'];

const Spencer = () => {
  const { themeId } = useTheme();
  const { dispatch } = useAppContext();
  useScrollRestore();

  const isDark = themeId === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    dispatch({ type: 'setTheme', value: themes[index] });
  };

  return (
    <Fragment>
      <Helmet>
        <title>Projects | {title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <ProjectContainer>
        <ProjectBackground
          srcSet={`${deviceModelsBackground} 1080w, ${deviceModelsBackgroundLarge} 2160w`}
          placeholder={deviceModelsBackgroundPlaceholder}
          entered={!prerender}
        />
        <ProjectHeader title={title} description={description} roles={roles} />
        <ProjectSection first>
          <ProjectSectionContent></ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectTextRow>
            <Image
              srcSet={`${image1} 400w, ${image1} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image2} 400w, ${image2} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image3} 400w, ${image3} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image4} 400w, ${image4} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image5} 400w, ${image5} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image6} 400w, ${image6} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image7} 400w, ${image7} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image8} 400w, ${image8} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image9} 400w, ${image9} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image10} 400w, ${image10} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image11} 400w, ${image11} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image12} 400w, ${image12} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image13} 400w, ${image13} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image14} 400w, ${image14} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image15} 400w, ${image15} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image16} 400w, ${image16} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image17} 400w, ${image17} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image18} 400w, ${image18} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image19} 400w, ${image19} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image20} 400w, ${image20} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image21} 400w, ${image21} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image22} 400w, ${image22} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image23} 400w, ${image23} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image24} 400w, ${image24} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image25} 400w, ${image25} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image26} 400w, ${image26} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image27} 400w, ${image27} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image28} 400w, ${image28} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image29} 400w, ${image28} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image30} 400w, ${image30} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image31} 400w, ${image31} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image32} 400w, ${image32} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image33} 400w, ${image33} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image34} 400w, ${image34} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image35} 400w, ${image35} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image36} 400w, ${image36} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image37} 400w, ${image37} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image38} 400w, ${image38} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image39} 400w, ${image39} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
            <Image
              srcSet={`${image40} 400w, ${image40} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};

export default Spencer;
