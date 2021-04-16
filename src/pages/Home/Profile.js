import { lazy, Fragment, Suspense } from 'react';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';
import { Button } from 'components/Button';
import DecoderText from 'components/DecoderText';
import Divider from 'components/Divider';
import Section from 'components/Section';
import Heading from 'components/Heading';
import Text from 'components/Text';
import profilePic from 'assets/profile-pic.jpeg';
import { reflow } from 'utils/transition';
import prerender from 'utils/prerender';
import './Profile.css';
import { ProjectImage } from 'components/ProjectLayout';

const Portrait = lazy(() => import('components/Portrait'));

const ProfileText = ({ status, titleId }) => (
  <Fragment>
    <Heading
      className={classNames('profile__title', `profile__title--${status}`)}
      level={3}
      id={titleId}
    >
      <DecoderText text="Hi there" start={status !== 'exited'} delay={500} />
    </Heading>
    <Text
      className={classNames('profile__description', `profile__description--${status}`)}
      size="l"
    >
      I am Tanisha. I’m currently a third year student pursuing a bachelors degree in
      fashion designing at MIT Institute of Design, Pune. My absolute love and passion is
      designing. I’ll relatively present myself as a autodidactic creative designer who
      adores to operate or work in all styles of creative domains.
    </Text>
    <Text
      className={classNames('profile__description', `profile__description--${status}`)}
      size="l"
    >
      So I decided to pursue my further education in the field of creativity. Apart from
      being a full time student, I am a small entrepreneur owing my own Apparel brand in
      Pune. I am just delivering what I am best at through my work and my business while
      taking everyone’s appreciation about it.
    </Text>
    <Text
      className={classNames('profile__description', `profile__description--${status}`)}
      size="l"
    >
      Let's work along! I'm looking to connect with people having contrasting and colorful
      ideas. If you're looking to collaborate on a project, feel free to reach on my
      social medias.
    </Text>
  </Fragment>
);

const Profile = ({ id, visible, sectionRef }) => {
  const titleId = `${id}-title`;

  return (
    <Section
      className="profile"
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible} timeout={0} onEnter={reflow}>
        {status => (
          <div className="profile__content">
            <div className="profile__column">
              <ProfileText status={status} titleId={titleId} />
              <Button
                secondary
                className={classNames('profile__button', `profile__button--${status}`)}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className="profile__column">
              <div className="profile__tag" aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={status !== 'entered'}
                  collapseDelay={1000}
                />
                <div
                  className={classNames(
                    'profile__tag-text',
                    `profile__tag-text--${status}`
                  )}
                >
                  About Me
                </div>
              </div>
              <div className="profile__image-wrapper">
                {/* {!prerender && (
                  <Suspense fallback={null}>
                    <Portrait
                      className={classNames(
                        'profile__image',
                        `profile__image--${status}`
                      )}
                      delay={100}
                    />
                  </Suspense>
                )} */}
                <ProjectImage srcSet={`${profilePic} 400w, ${profilePic} 898w`} />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};

export default Profile;
