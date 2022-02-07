import { lazy, Suspense, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Footer from './layout/footer/footer';
import Header from './layout/header/Header';
import { useTranslation } from 'react-i18next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ISecondaryLayout } from './models/ISecondaryLayout';
import { rootData } from './data/root';
import axios from 'axios';

const Home = lazy(() => import('./pages/home/home'));
const AboutUS = lazy(() => import('./pages/aboutUS/aboutUs'));
const SecondaryLayout = lazy(
  () => import('./layout/secondaryLayout/secondaryLayout')
);

const GetFreeQuote = lazy(() => import('./pages/getFreeQoute/getFreeQuote'));
const CvSearch = lazy(() => import('./pages/cvSearch/cvSearch'));
const JoinUsLayout = lazy(() => import('./pages/joinUs/joinUs'));
const ContactUs = lazy(() => import('./pages/contactUs/contactUs'));
const CustomerFeedback = lazy(
  () => import('./pages/customerFeedback/customerFeedback')
);
const BuildCv = lazy(() => import('./pages/buildCv/buildCv'));
const Blog = lazy(() => import('./pages/blog/blog'));

axios.defaults.baseURL = 'http://localhost:5000';

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
              <Route path="/about-us" element={<AboutUS />} />
              <Route path="/get-a-free-quote" element={<GetFreeQuote />} />
              <Route path="/cv-search" element={<CvSearch />} />
              <Route path="/join-us" element={<JoinUsLayout />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/customer-feedback" element={<CustomerFeedback />} />
              <Route path="/build-cv" element={<BuildCv />} />
              <Route path="/blog/*" element={<Blog />} />
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
      <ToastContainer />
    </div>
  );
}

export default App;
