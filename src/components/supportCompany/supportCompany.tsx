import { ReactElement } from 'react';
import './supportCompany.scss';

const SupportCompany = (): ReactElement => {
  return (
    <div className="support-company">
      <div className="support-company__titel">
        <p>Trusted By</p>
      </div>
      <div className="support-company__support-company-image-wrapper">
        {/* <p className="support-company__support-company-image">sfAGAGAG</p> */}
        <img
          className="support-company-image"
          width="100%"
          src="https://images.ctfassets.net/vkdbses00qqt/6gYYhIZTJq0VHl3tXT8oPC/18d49aaa1fd3fed25b6b6593350897b7/homepage-used-by-logos__2_.png?w=1731&amp;h=24&amp;q=80&amp;fm=png"
          alt="ror"
        />
      </div>
    </div>
  );
};

export default SupportCompany;
