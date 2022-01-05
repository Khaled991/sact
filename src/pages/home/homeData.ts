import PersonalFiles from '../../assets/img/personal-files.svg';
import ContractsAndLegalFiles from '../../assets/img/contracts-and-legal-files.svg';
import SpecializedTranslation from '../../assets/img/specialized-translation.svg';
import Translation from '../../assets/img/translation.svg';
import Applications from '../../assets/img/applications.svg';
import QualityAndDtp from '../../assets/img/quality-and-dtp.svg';
import Delivery from '../../assets/img/delivery.svg';

interface IUniqueTranslationData {
  symbol: string;
  title: string;
}

interface IHowDoWeWorkData {
  symbol: string;
  title: string;
  description: string;
}
interface IFaqsData {
  title: string;
  description: string;
}
export const uniqueTranslationData: IUniqueTranslationData[] = [
  {
    symbol: PersonalFiles,
    title: 'personalFiles',
  },
  {
    symbol: ContractsAndLegalFiles,
    title: 'contractsAndLegalFiles',
  },
  {
    symbol: SpecializedTranslation,
    title: 'specializedTranslation',
  },
  {
    symbol: Translation,
    title: 'multiLanguagesTranslation',
  },
];

export const howDoWeWorkData: IHowDoWeWorkData[] = [
  {
    symbol: Applications,
    title: 'applications',
    description: 'applicationsDescription',
  },
  {
    symbol: Translation,
    title: 'Translation',
    description: 'translationDescription',
  },
  {
    symbol: QualityAndDtp,
    title: 'qualityAndDTP',
    description: 'qualityAndDTPDescription',
  },
  {
    symbol: Delivery,
    title: 'deliveryAndCustomerSatisfaction',
    description: 'deliveryAndCustomerSatisfactionDescription',
  },
];

export const faqsData: IFaqsData[] = [
  {
    title: 'Faq1Title',
    description: 'Faq1Description',
  },
  {
    title: 'Faq2Title',
    description: 'Faq2Description',
  },
  {
    title: 'Faq3Title',
    description: 'Faq3Description',
  },
  {
    title: 'Faq4Title',
    description: 'Faq4Description',
  },
  {
    title: 'Faq5Title',
    description: 'Faq5Description',
  },
  {
    title: 'Faq6Title',
    description: 'Faq6Description',
  },
];
