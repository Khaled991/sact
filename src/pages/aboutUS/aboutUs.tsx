import { ReactElement } from 'react';
import './aboutUs.scss';
import AboutUsImage from '../../assets/img/about-us-image.svg';

import { AboutUsData } from './aboutUsData';
import SecondaryLayout from '../../layout/secondaryLayout/secondaryLayout';

const AboutUs = (): ReactElement => {
  return (
    <div className="about-us">
      <img
        src={AboutUsImage}
        alt="AboutUsImage"
        className="about-us__about-us-image"
      />
      {AboutUsData.map(({ title, description }) => (
        <SecondaryLayout primaryTitle={title} description={description} />
      ))}
    </div>
  );
};

export default AboutUs;
