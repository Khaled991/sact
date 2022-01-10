import { t } from 'i18next';
import { ReactElement, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import CustomButton, { ButtonType } from '../../components/Button/button';
import CustomDropdown from '../../components/customDropdown/customDropdown';
import CustomInput from '../../components/customInput/customInput';
import SecondaryLayout from '../../layout/secondaryLayout/secondaryLayout';
import './buildCv.scss';

export interface IBuildCv {
  fname?: string;
  lname?: string;
  nationality?: string;
  age?: string;
  placeOfResidence?: string;
  phone?: string;
  email?: string;
  job?: string;
  graduation_university?: string;
  graduation_year?: string;
  major?: string;
  courses?: string;
  experience?: string;
  job_place?: string;
  skills?: string;
  place_old_job?: string;
  expectedSalary?: string;
  uplode_personal_photo?: string;
  gender?: string;
  socialStatus?: string;
  jobLevel?: string;
  employmentType?: string;
}

const BuildCv = (): ReactElement => {
  const [cvData, setCvData] = useState<IBuildCv>({});

  const setGender = (gender: string) => setCvData({ ...cvData, gender });
  const setSocialStatus = (socialStatus: string) =>
    setCvData({ ...cvData, socialStatus });
  const setJobLevel = (jobLevel: string) => setCvData({ ...cvData, jobLevel });
  const setEmploymentType = (employmentType: string) =>
    setCvData({ ...cvData, employmentType });

  const onChangeField = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setCvData({ ...cvData, [name]: value });
  };

  const gender = [t('male'), t('female')];
  const socialStatusItem = [t('married'), t('single'), t('divorce')];

  const jobLevel = [t('beginner'), t('experienced'), t('administrative')];
  const employmentType = [
    t('fullTime'),
    t('partTime'),
    t('freelancer'),
    t('contracts'),
  ];

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="build-cv">
      <SecondaryLayout
        primaryTitle={t('jobSeeker')}
        description={t('jobSeekerDescription')}
      />
      <form onSubmit={onSubmitForm}>
        <Row className="p-0">
          <Col>
            <CustomInput
              placeholder={t('firsname')}
              type="fname"
              name="fname"
              onChange={onChangeField}
            />
          </Col>
          <Col>
            <CustomInput
              placeholder={t('lastName')}
              type="lname"
              name="lname"
              onChange={onChangeField}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <CustomInput
              placeholder={t('nationality')}
              type="text"
              name="nationality"
              onChange={onChangeField}
            />
          </Col>
          <Col>
            <CustomInput
              placeholder={t('age')}
              type="number"
              name="age"
              onChange={onChangeField}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <CustomInput
              placeholder={t('placeOfResidence')}
              type="text"
              name="placeOfResidence"
              onChange={onChangeField}
            />
          </Col>
          <Col>
            <CustomInput
              placeholder={t('phone')}
              type="tel"
              name="phone"
              maxLength={14}
              minLength={9}
              onChange={onChangeField}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <CustomInput
              placeholder={t('email')}
              type="email"
              name="email"
              onChange={onChangeField}
            />
          </Col>
          <Col>
            <CustomInput
              placeholder={t('job')}
              type="text"
              name="job"
              onChange={onChangeField}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <CustomDropdown
              title={t('gender')}
              item={gender}
              setSelected={setGender}
            />
          </Col>
          <Col>
            <CustomDropdown
              title={t('socialStatu')}
              item={socialStatusItem}
              setSelected={setSocialStatus}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <CustomInput
              placeholder={t('lastEducationalCertificate')}
              type="text"
              name="graduation_university"
              onChange={onChangeField}
            />
          </Col>
          <Col>
            <CustomInput
              placeholder={t('dateOfLastEducationalCertificate')}
              type="text"
              name="graduation_year"
              onChange={onChangeField}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <CustomInput
              placeholder={t('major')}
              type="text"
              name="major"
              onChange={onChangeField}
            />
          </Col>
          <Col>
            <CustomInput
              placeholder={t('Courses')}
              type="text"
              name="courses"
              onChange={onChangeField}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <CustomDropdown
              title={t('jobLevel')}
              item={jobLevel}
              setSelected={setJobLevel}
            />
          </Col>
          <Col>
            <CustomDropdown
              title={t('employmentType')}
              item={employmentType}
              setSelected={setEmploymentType}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <CustomInput
              placeholder={t('yearsOfWorkExperience')}
              type="text"
              name="experience"
              onChange={onChangeField}
            />
          </Col>
          <Col>
            <CustomInput
              placeholder={t('requiredJobRole')}
              type="text"
              name="job_place"
              onChange={onChangeField}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <CustomInput
              placeholder={t('skills')}
              type="text"
              name="skills"
              onChange={onChangeField}
            />
          </Col>
          <Col>
            <CustomInput
              placeholder={t('previousWorkPlaces')}
              type="text"
              name="place_old_job"
              onChange={onChangeField}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <CustomInput
              placeholder={t('expectedSalary')}
              type="text"
              name="expectedSalary"
              onChange={onChangeField}
            />
          </Col>
          <Col>
            <CustomInput
              placeholder={t('uplode_personal_photo')}
              type="file"
              name="uplode_personal_photo"
              onChange={onChangeField}
            />
          </Col>
        </Row>
        <CustomButton type={ButtonType.solid}>{t('register')}</CustomButton>
      </form>
    </div>
  );
};

export default BuildCv;
