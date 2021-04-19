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

import image0 from 'assets/project-pics/menswear/0.jpg';
import image1 from 'assets/project-pics/menswear/1.jpg';
import image2 from 'assets/project-pics/menswear/2.jpg';
import image3 from 'assets/project-pics/menswear/3.jpg';
import image4 from 'assets/project-pics/menswear/4.jpg';
import image5 from 'assets/project-pics/menswear/5.jpg';
import image6 from 'assets/project-pics/menswear/6.jpg';
import image7 from 'assets/project-pics/menswear/7.jpg';
import image8 from 'assets/project-pics/menswear/8.jpg';
import image9 from 'assets/project-pics/menswear/9.jpg';
import image10 from 'assets/project-pics/menswear/10.jpg';
import image11 from 'assets/project-pics/menswear/11.jpg';
import image12 from 'assets/project-pics/menswear/12.jpg';
import image13 from 'assets/project-pics/menswear/13.jpg';
import image14 from 'assets/project-pics/menswear/14.jpg';
import image15 from 'assets/project-pics/menswear/15.jpg';
import image16 from 'assets/project-pics/menswear/16.jpg';
import image17 from 'assets/project-pics/menswear/17.jpg';
import image18 from 'assets/project-pics/menswear/18.jpg';
import image19 from 'assets/project-pics/menswear/19.jpg';
import image20 from 'assets/project-pics/menswear/20.jpg';
import image21 from 'assets/project-pics/menswear/21.jpg';
import image22 from 'assets/project-pics/menswear/22.jpg';
import image23 from 'assets/project-pics/menswear/23.jpg';

const title = 'Menswear';
const description =
  'In this Project my inspiration was the sculptural artist named Erwin Wurm. The design process was taken further by the concept of everyday objects in our daily life.';
const roles = ['Erwin wurm', 'Everyday objects', 'Avant-garde'];

const Menswear = () => {
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
          <ProjectSectionContent>
            <ProjectImage
              raised
              srcSet={`${image23} 1280w, ${image23} 2560w`}
              placeholder={deviceModelsPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Device Models plugin interface."
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectTextRow>
            <Image
              srcSet={`${image0} 400w, ${image0} 898w`}
              placeholder={projectPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
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
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};

export default Menswear;
