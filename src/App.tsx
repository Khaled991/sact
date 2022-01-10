import { lazy, Suspense, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Footer from './layout/footer/footer';
import Header from './layout/header/Header';
import { useTranslation } from 'react-i18next';
import GetFreeQoute from './pages/getFreeQoute/getFreeQoute';
import { ISecondaryLayout } from './models/ISecondaryLayout';
import { rootData } from './data/root';
import CvSearch from './pages/cvSearch/cvSearch';
import JoinUsLayout from './pages/joinUs/joinUs';
import ContactUs from './pages/contactUs/contactUs';
import CustomerFeedback from './pages/customerFeedback/customerFeedback';
import BuildCv from './pages/buildCv/buildCv';

const Home = lazy(() => import('./pages/home/home'));
const AboutUS = lazy(() => import('./pages/aboutUS/aboutUs'));
const SecondaryLayout = lazy(
  () => import('./layout/secondaryLayout/secondaryLayout')
);

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    const newLanguage =
      localStorage.getItem('i18nextLng') === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLanguage);
    handleHtmlDiraction();
  };

  useEffect(() => {
    handleHtmlDiraction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleHtmlDiraction = () => {
    document.querySelector('html')!.style.direction =
      i18n.language === 'en' ? 'ltr' : 'rtl';
  };

  return (
    <div className="root-container">
      <Header changeLanguage={changeLanguage} />
      <div className="root-content__pages">
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<AboutUS />} />
              <Route path="/getAFreeQoute" element={<GetFreeQoute />} />
              <Route path="/cvsearch" element={<CvSearch />} />
              <Route path="/joinus" element={<JoinUsLayout />} />
              <Route path="/contactUs" element={<ContactUs />} />
              <Route path="/customerFeedback" element={<CustomerFeedback />} />
              <Route path="/build-cv" element={<BuildCv />} />
              {rootData.map(
                ({ description, path, primaryTitle }: ISecondaryLayout) => (
                  <Route
                    key={path}
                    path={path}
                    element={
                      <SecondaryLayout
                        description={description}
                        primaryTitle={primaryTitle}
                      />
                    }
                  />
                )
              )}
            </Routes>
          </Suspense>
        </Container>
      </div>
      <Container fluid className="p-0">
        <Footer />
      </Container>
    </div>
  );
}

export default App;
