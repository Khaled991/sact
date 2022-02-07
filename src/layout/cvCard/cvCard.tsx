import { t } from 'i18next';
import { ReactElement } from 'react';
import { ReactComponent as WomanAvatar } from '../../assets/img/woman-avatar.svg';
import { ReactComponent as ManAvatar } from '../../assets/img/man-avatar.svg';
import './cvCard.scss';

interface ICvCard {
  name: string;
  skills: string;
  age: string;
  gender: string;
  nationality: string;
  placeOfResidence: string;
  socialStatu: string;
  dateOfLastEducationalCertificate: string;
  lastEducationalCertificate: string;
  major: string;
  Courses: string;
  yearsOfWorkExperience: string;
  experienceLevel: string;
  expectedSalary: string;
  dateOfPublication: string;
  codeReference: string;
}

const CvCard = ({
  name,
  skills,
  age,
  gender,
  nationality,
  placeOfResidence,
  socialStatu,
  dateOfLastEducationalCertificate,
  lastEducationalCertificate,
  major,
  Courses,
  yearsOfWorkExperience,
  experienceLevel,
  expectedSalary,
  dateOfPublication,
  codeReference,
}: ICvCard): ReactElement => {
  return (
    <div className="cv-card">
      {gender === 'female' ? <WomanAvatar /> : <ManAvatar />}

      <span className="cv-card__user-name">{name}</span>
      <span className="cv-card__details">{skills}</span>
      <div className="basic-information-about-use">
        <span>
          {t('age')} : <span className="details-contet">{age}</span>
        </span>
        <span>
          {t('gender')} : <span className="details-contet">{gender}</span>
        </span>
        <span>
          {t('nationality')} :{' '}
          <span className="details-contet">{nationality}</span>
        </span>
        <span>
          {t('placeOfResidence')} :{' '}
          <span className="details-contet">{placeOfResidence}</span>
        </span>
      </div>

      <div className="basic-information-about-use" style={{ border: 'none' }}>
        <span>
          {t('socialStatu')} :{' '}
          <span className="details-contet">{socialStatu}</span>
        </span>
        <span>
          {t('dateOfLastEducationalCertificate')} :{' '}
          <span className="details-contet">
            {dateOfLastEducationalCertificate}
          </span>
        </span>
        <span>
          {t('lastEducationalCertificate')} :{' '}
          <span className="details-contet">{lastEducationalCertificate}</span>
        </span>
        <span>
          {t('major')} : <span className="details-contet">{major}</span>
        </span>
      </div>

      <div className="basic-information-about-use" style={{ border: 'none' }}>
        <span>
          {t('Courses')} : <span className="details-contet">{Courses}</span>
        </span>
        <span>
          {t('yearsOfWorkExperience')} :{' '}
          <span className="details-contet">{yearsOfWorkExperience}</span>
        </span>
        <span>
          {t('experienceLevel')} :{' '}
          <span className="details-contet">{experienceLevel}</span>
        </span>
        <span>
          {t('expectedSalary')} :{' '}
          <span className="details-contet">{expectedSalary}</span>
        </span>
      </div>

      {/* <div className="skills">
        <span>
          {t('skills')} : <span className="details-contet"></span>
        </span>
      </div> */}
      <div className="date-and-code">
        <span>
          {t('dateOfPublication')} :{' '}
          <span className="details-contet">{dateOfPublication}</span>
        </span>
        <span>
          {t('codeReference')} :{' '}
          <span className="details-contet">{codeReference}</span>
        </span>
      </div>
    </div>
  );
};

export default CvCard;
