import { ReactElement } from 'react';
import { shuffle } from '../../utils/shuffle';
import './supportCompany.scss';

const SupportCompany = (): ReactElement => {
  function importAll(r: any) {
    return r.keys().map(r);
  }
  const images = importAll(
    require.context('../../assets/companyImg', false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div className="support-company">
      <div className="blur blur--left" />

      <div className="photobanner">
        {shuffle(images).map((imgPath: string, i: number) => (
          <img
            src={imgPath}
            alt={`SupportCompanys ${i + 1}`}
            height="50px"
            key={i}
          />
        ))}
      </div>
      <div className="blur blur--right" />
    </div>
  );
};

export default SupportCompany;
