import { t } from 'i18next';
import { ReactElement, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import CustomButton, { ButtonType } from '../../components/Button/button';
import CustomDropdown from '../../components/customDropdown/customDropdown';
import CustomInput from '../../components/customInput/customInput';
import SecondaryLayout from '../../layout/secondaryLayout/secondaryLayout';
import './joinUs.scss';

export interface IDataOfJoinedUser {
  name?: string;
  phone?: string;
  email?: string;
  job?: string;
  address?: string;
  projectFile?: string;
  joinUsAs?: string;
}

const JoinUsLayout = (): ReactElement => {
  const [dataOfJoinedUser, setDataOfJoinedUser] = useState<IDataOfJoinedUser>(
    {}
  );

  const setJoinUsAs = (joinUsAs: string) =>
    setDataOfJoinedUser({ ...dataOfJoinedUser, joinUsAs });

  const onChangeField = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setDataOfJoinedUser({ ...dataOfJoinedUser, [name]: value });
  };

  const joinUsItems = [
    t('translator'),
    t('interpreter'),
    t('JoinOurPoolofFreelancers'),
  ];

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="join-us-layout">
      <SecondaryLayout
        primaryTitle={t('JoinUs')}
        description={t('JoinUsDescription')}
      />
      <form onSubmit={onSubmitForm}>
        <Row className="p-0">
          <Col>
            <CustomInput
              placeholder={t('name')}
              type="name"
              name="name"
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
        <CustomInput
          placeholder={t('address')}
          type="text"
          name="address"
          onChange={onChangeField}
        />
        <CustomDropdown
          title={t('JoinUsAs')}
          item={joinUsItems}
          setSelected={setJoinUsAs}
        />

        <CustomInput type="file" name="project_file" onChange={onChangeField} />

        <CustomButton type={ButtonType.solid}>{t('JoinUs')}</CustomButton>
      </form>
    </div>
  );
};

export default JoinUsLayout;
