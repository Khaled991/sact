import { t } from 'i18next';
import { ReactElement } from 'react';
import { ReactComponent as WomanAvatar } from '../../assets/img/woman-avatar.svg';
import './cvCard.scss';

const CvCard = (): ReactElement => {
  return (
    <div className="cv-card">
      <WomanAvatar />
      <span className="cv-card__user-name">Sadeem Abdulrahman Alhoshan</span>
      <span className="cv-card__details">
        Translation, Microsoft Word, Communication
      </span>
      <div className="basic-information-about-use">
        <span>
          {t('age')} : <span className="details-contet">33</span>
        </span>
        <span>
          {t('gender')} : <span className="details-contet">female</span>
        </span>
        <span>
          {t('nationality')} : <span className="details-contet">Saudi</span>
        </span>
        <span>
          {t('placeOfResidence')} :{' '}
          <span className="details-contet">Riyadh</span>
        </span>
      </div>

      <div className="basic-information-about-use" style={{ border: 'none' }}>
        <span>
          {t('socialStatu')} : <span className="details-contet">single</span>
        </span>
        <span>
          {t('dateOfLastEducationalCertificate')} :{' '}
          <span className="details-contet">2018</span>
        </span>
        <span>
          {t('lastEducationalCertificate')} :{' '}
          <span className="details-contet">Master's Degree</span>
        </span>
        <span>
          {t('major')} : <span className="details-contet">Translation</span>
        </span>
      </div>

      <div className="basic-information-about-use" style={{ border: 'none' }}>
        <span>
          {t('Courses')} :{' '}
          <span className="details-contet">
            Translation Courses in Various Fields
          </span>
        </span>
        <span>
          {t('yearsOfWorkExperience')} :{' '}
          <span className="details-contet">4</span>
        </span>
        <span>
          {t('experienceLevel')} :{' '}
          <span className="details-contet">beginner</span>
        </span>
        <span>
          {t('expectedSalary')} : <span className="details-contet">0</span>
        </span>
      </div>

      <div className="skills">
        <span>
          {t('skills')} : <span className="details-contet"></span>
        </span>
      </div>
      <div className="date-and-code">
        <span>
          {t('dateOfPublication')} :{' '}
          <span className="details-contet">11-08-2018</span>
        </span>
        <span>
          {t('codeReference')} :{' '}
          <span className="details-contet">HcntlJLP</span>
        </span>
      </div>
    </div>
  );
};

export default CvCard;
