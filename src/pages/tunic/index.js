import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Image from 'components/Image';
import Link from 'components/Link';
import { Button } from 'components/Button';
import Footer from 'components/Footer';
import {
  ProjectContainer,
  ProjectBackground,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectImage,
  ProjectSectionHeading,
  ProjectSectionColumns,
  ProjectTextRow,
  ProjectSectionText,
} from 'components/ProjectLayout';
import SegmentedControl, { SegmentedControlOption } from 'components/SegmentedControl';
import { useTheme } from 'components/ThemeProvider';
import { useAppContext, useScrollRestore } from 'hooks';
import { media } from 'utils/style';
import prerender from 'utils/prerender';
import deviceModelsBackground from 'assets/device-models-background.jpg';
import deviceModelsBackgroundLarge from 'assets/device-models-background-large.jpg';
import deviceModelsBackgroundPlaceholder from 'assets/device-models-background-placeholder.jpg';
import deviceModels from 'assets/device-models.jpg';
import deviceModelsLarge from 'assets/device-models-large.jpg';
import deviceModelsPlaceholder from 'assets/device-models-placeholder.jpg';
import deviceModelsBranding from 'assets/device-models-branding.png';
import deviceModelsBrandingLarge from 'assets/device-models-branding-large.png';
import deviceModelsBrandingPlaceholder from 'assets/device-models-branding-placeholder.png';
import deviceModelsBanner from 'assets/device-models-banner.jpg';
import deviceModelsBannerLarge from 'assets/device-models-banner-large.jpg';
import deviceModelsBannerPlaceholder from 'assets/device-models-banner-placeholder.jpg';
import deviceModelsComponentsDark from 'assets/device-models-components-dark.jpg';
import deviceModelsComponentsDarkLarge from 'assets/device-models-components-dark-large.jpg';
import deviceModelsComponentsDarkPlaceholder from 'assets/device-models-components-dark-placeholder.jpg';
import deviceModelsComponentsLight from 'assets/device-models-components-light.jpg';
import deviceModelsComponentsLightLarge from 'assets/device-models-components-light-large.jpg';
import deviceModelsComponentsLightPlaceholder from 'assets/device-models-components-light-placeholder.jpg';
import deviceModelsLogo from 'assets/device-models-logo.png';
import deviceModelsLogoLarge from 'assets/device-models-logo-large.png';
import deviceModelsLogoPlaceholder from 'assets/device-models-logo-placeholder.png';

const title = 'Device Models';
const description =
  'Design and development of a Figma plugin to create mockups with 3D device models.';
const roles = [
  'Creative Direction',
  'UX and UI Design',
  'Front End & App Development',
  'Motion Design',
];

const Tunic = () => {
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
        <ProjectHeader
          title={title}
          description={description}
          url="https://devicemodels.com"
          roles={roles}
        />
        <ProjectSection first>
          <ProjectSectionContent>
            <ProjectImage
              raised
              srcSet={`${deviceModels} 1280w, ${deviceModelsLarge} 2560w`}
              placeholder={deviceModelsPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Device Models plugin interface."
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectTextRow>
            <Image
              srcSet={`${deviceModelsBranding} 400w, ${deviceModelsBrandingLarge} 898w`}
              placeholder={deviceModelsBrandingPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <Image
              srcSet={`${deviceModelsBranding} 400w, ${deviceModelsBrandingLarge} 898w`}
              placeholder={deviceModelsBrandingPlaceholder}
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

export default Tunic;
