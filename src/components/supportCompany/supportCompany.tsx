import { ReactElement, useRef, useEffect } from 'react';
import { shuffle } from '../../utils/shuffle';
import './supportCompany.scss';

const SupportCompany = (): ReactElement => {
  const ref = useRef<HTMLDivElement>(null);
  function importAll(r: any) {
    return r.keys().map(r);
  }
  const images: any[] = importAll(
    require.context('../../assets/companyImg', false, /\.(png|jpe?g|svg|webp)$/)
  );
  useEffect(() => {
    ref.current!.style.animationDuration = '30s';
  }, []);

  return (
    <div className="support-company">
      <div className="blur blur--left" />

      <div ref={ref} className="photobanner">
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
