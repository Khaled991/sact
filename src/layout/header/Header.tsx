import { ReactElement, useState, useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Logo from '../../assets/img/logo.png';
import Banner from '../../components/banner/banner';
import { t } from 'i18next';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ReactComponent as DownArrow } from '../../assets/icon/down-arrow.svg';
import { useTranslation } from 'react-i18next';

interface IHeaderProps {
  changeLanguage: () => void;
}

const Header = ({ changeLanguage }: IHeaderProps): ReactElement => {
  const { i18n } = useTranslation();
  const [currentScrollPosition, setCurrentScrollPosition] = useState<number>(0);
  const [activeLink, setActiveLink] = useState<string>('/');

  useEffect(() => {
    document.addEventListener('scroll', function (e) {
      setCurrentScrollPosition(window.scrollY);
    });
    // dropDownItemsDirection();
  }, []);

  const handleDropSideDiraction = {
    transform: i18n.language === 'en' ? `rotate(270deg)` : `rotate(90deg)`,
  };
  const dropDownDirection = i18n.language === 'en' ? 'end' : 'start';
  // const dropDownItemsDirection = () => {
  //   document.querySelector('NavDropdown.Item')!.style.direction =
  //     i18n.language === 'en' ? 'ltr' : 'rtl';
  // };

  return (
    <header>
      <Banner changeLanguage={changeLanguage} />
      <Navbar
        expand="lg"
        className="navbar-custom"
        fixed="top"
        variant="light"
        style={{
          marginTop:
            currentScrollPosition < 43.5
              ? `${4.35 - window.scrollY / 10}rem`
              : 0,
        }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/">
              <img src={Logo} alt="Logo" className="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                to="/"
                className={activeLink === '/' ? ' selected' : ''}
                onClick={() => setActiveLink('/')}
              >
                {t('home')}
              </NavLink>

              <NavDropdown
                title={
                  <>
                    {t('services')}
                    <DownArrow className="down-arrow" />
                  </>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown
                  drop={dropDownDirection}
                  title={
                    <>
                      {t('servicesLanguages')}
                      <DownArrow
                        className="right-arrow"
                        style={handleDropSideDiraction}
                      />
                    </>
                  }
                  id="nav-dropside"
                >
                  <NavDropdown.Item>
                    <NavLink
                      to="/english-language"
                      className={
                        activeLink === '/english-language' ? ' selected' : ''
                      }
                      onClick={() => setActiveLink('/english-language')}
                    >
                      {t('English')}
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown
                    drop={dropDownDirection}
                    title={
                      <>
                        {t('majorlanguages')}
                        <DownArrow
                          className="right-arrow"
                          style={handleDropSideDiraction}
                        />
                      </>
                    }
                    id="nav-dropside"
                  >
                    <NavDropdown.Item>
                      <NavLink
                        to="/French"
                        className={activeLink === '/French' ? ' selected' : ''}
                        onClick={() => setActiveLink('/French')}
                      >
                        {t('French')}
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink
                        to="/German"
                        className={activeLink === '/German' ? ' selected' : ''}
                        onClick={() => setActiveLink('/German')}
                      >
                        {t('German')}
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink
                        to="/Russian"
                        className={activeLink === '/Russian' ? ' selected' : ''}
                        onClick={() => setActiveLink('/Russian')}
                      >
                        {t('Russian')}
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink
                        to="/Turkish"
                        className={activeLink === '/Turkish' ? ' selected' : ''}
                        onClick={() => setActiveLink('/Turkish')}
                      >
                        {t('Turkish')}
                      </NavLink>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    drop={dropDownDirection}
                    title={
                      <>
                        {t('otherLanguages')}
                        <DownArrow
                          className="right-arrow"
                          style={handleDropSideDiraction}
                        />
                      </>
                    }
                    id="nav-dropside"
                  >
                    <NavDropdown.Item>
                      <NavLink
                        to="/Chinese"
                        className={activeLink === '/Chinese' ? ' selected' : ''}
                        onClick={() => setActiveLink('/Chinese')}
                      >
                        {t('Chinese')}
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink
                        to="/Italian"
                        className={activeLink === '/Italian' ? ' selected' : ''}
                        onClick={() => setActiveLink('/Italian')}
                      >
                        {t('Italian')}
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink
                        to="/Spanish"
                        className={activeLink === '/Spanish' ? ' selected' : ''}
                        onClick={() => setActiveLink('/Spanish')}
                      >
                        {t('Spanish')}
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink
                        to="/Swedish"
                        className={activeLink === '/Swedish' ? ' selected' : ''}
                        onClick={() => setActiveLink('/Swedish')}
                      >
                        {t('swedishLanguageTitleData')}
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink
                        to="/Ukrainian"
                        className={
                          activeLink === '/Ukrainian' ? ' selected' : ''
                        }
                        onClick={() => setActiveLink('/Ukrainian')}
                      >
                        {t('ukrainianLanguageTitleData')}
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink
                        to="/Bulgarian"
                        className={
                          activeLink === '/Bulgarian' ? ' selected' : ''
                        }
                        onClick={() => setActiveLink('/Bulgarian')}
                      >
                        {t('bulgarianLanguageTitleData')}
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink
                        to="/Portuguese"
                        className={
                          activeLink === '/Portuguese' ? ' selected' : ''
                        }
                        onClick={() => setActiveLink('/Portuguese')}
                      >
                        {t('portugueseLanguageTitleData')}
                      </NavLink>
                    </NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>

                <NavDropdown
                  drop={dropDownDirection}
                  title={
                    <>
                      {t('servicesTranslation')}
                      <DownArrow
                        className="right-arrow"
                        style={handleDropSideDiraction}
                      />
                    </>
                  }
                  id="nav-dropside"
                >
                  <NavDropdown.Item>
                    <NavLink
                      to="/legal-translation"
                      className={
                        activeLink === '/legal-translation' ? ' selected' : ''
                      }
                      onClick={() => setActiveLink('/legal-translation')}
                    >
                      {t('legalTranslationTitleData')}
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink
                      to="/literary-translation-and-humanities"
                      className={
                        activeLink === '/literary-translation-and-humanities'
                          ? ' selected'
                          : ''
                      }
                      onClick={() =>
                        setActiveLink('/literary-translation-and-humanities')
                      }
                    >
                      {t('literaryTranslationAndHumanitiesTitleData')}
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink
                      to="/military-translation"
                      className={
                        activeLink === '/military-translation'
                          ? ' selected'
                          : ''
                      }
                      onClick={() => setActiveLink('/military-translation')}
                    >
                      {t('militaryTranslationTitleData')}
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink
                      to="/medical-translation"
                      className={
                        activeLink === '/medical-translation' ? ' selected' : ''
                      }
                      onClick={() => setActiveLink('/medical-translation')}
                    >
                      {t('medicalTranslationTitleData')}
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink
                      to="/religious-translation"
                      className={
                        activeLink === '/religious-translation'
                          ? ' selected'
                          : ''
                      }
                      onClick={() => setActiveLink('/religious-translation')}
                    >
                      {t('religiousTranslationTitleData')}
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink
                      to="/leisure,-tourism-and-hospitality-translation"
                      className={
                        activeLink ===
                        '/leisure,-tourism-and-hospitality-translation'
                          ? ' selected'
                          : ''
                      }
                      onClick={() =>
                        setActiveLink(
                          '/leisure,-tourism-and-hospitality-translation'
                        )
                      }
                    >
                      {t('leisureTourismAndHospitalityTranslationTitleData')}
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink
                      to="/economic-and-financial-translation"
                      className={
                        activeLink === '/economic-and-financial-translation'
                          ? ' selected'
                          : ''
                      }
                      onClick={() =>
                        setActiveLink('/economic-and-financial-translation')
                      }
                    >
                      {t('economicAndFinancialTranslationTitleData')}
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink
                      to="/general-translation"
                      className={
                        activeLink === '/general-translation' ? ' selected' : ''
                      }
                      onClick={() => setActiveLink('/general-translation')}
                    >
                      {t('generalTranslationTitleData')}
                    </NavLink>
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  drop={dropDownDirection}
                  title={
                    <>
                      {t('servicesInterpretation')}
                      <DownArrow
                        className="right-arrow"
                        style={handleDropSideDiraction}
                      />
                    </>
                  }
                  id="nav-dropside"
                >
                  <NavDropdown.Item>
                    <NavLink
                      to="/simultaneous-interpretation"
                      className={
                        activeLink === '/simultaneous-interpretation'
                          ? ' selected'
                          : ''
                      }
                      onClick={() =>
                        setActiveLink('/simultaneous-interpretation')
                      }
                    >
                      {t('simultaneousInterpretationTitleData')}
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink
                      to="/consecutive-interpretation"
                      className={
                        activeLink === '/consecutive-interpretation'
                          ? ' selected'
                          : ''
                      }
                      onClick={() =>
                        setActiveLink('/consecutive-interpretation')
                      }
                    >
                      {t('consecutiveInterpretationTitleData')}
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink
                      to="/whispered-interpreting"
                      className={
                        activeLink === '/whispered-interpreting'
                          ? ' selected'
                          : ''
                      }
                      onClick={() => setActiveLink('/whispered-interpreting')}
                    >
                      {t('whisperedInterpretingTitleData')}
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink
                      to="/event-and-conference-equipment-supply"
                      className={
                        activeLink === '/event-and-conference-equipment-supply'
                          ? ' selected'
                          : ''
                      }
                      onClick={() =>
                        setActiveLink('/event-and-conference-equipment-supply')
                      }
                    >
                      {t('eventAndConferenceEquipmentSupplyTitleData')}
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink
                      to="/our-works"
                      className={activeLink === '/our-works' ? ' selected' : ''}
                      onClick={() => setActiveLink('/our-works')}
                    >
                      {t('ourWorksTitleData')}
                    </NavLink>
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>

              <NavDropdown
                title={
                  <>
                    {t('categories')}
                    <DownArrow className="down-arrow" />
                  </>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <NavLink
                    to="/desktop-publishing"
                    className={
                      activeLink === '/desktop-publishing' ? ' selected' : ''
                    }
                    onClick={() => setActiveLink('/desktop-publishing')}
                  >
                    {t('desktopPublishingTitleData')}
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    to="/proofreading-and-editing"
                    className={
                      activeLink === '/proofreading-and-editing'
                        ? ' selected'
                        : ''
                    }
                    onClick={() => setActiveLink('/proofreading-and-editing')}
                  >
                    {t('proofreadingAndEditingTitleData')}
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    to="/web-content-translation-and-localization"
                    className={
                      activeLink === '/web-content-translation-and-localization'
                        ? ' selected'
                        : ''
                    }
                    onClick={() =>
                      setActiveLink('/web-content-translation-and-localization')
                    }
                  >
                    {t('webContentTranslationAndLocalizationTitleData')}
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    to="/transcription"
                    className={
                      activeLink === '/transcription' ? ' selected' : ''
                    }
                    onClick={() => setActiveLink('/transcription')}
                  >
                    {t('transcriptionTitleData')}
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>

              <NavLink
                to="/cv-search"
                className={activeLink === '/cvsearch' ? ' selected' : ''}
                onClick={() => setActiveLink('/cvsearch')}
              >
                {t('cvsearch')}
              </NavLink>

              <NavLink
                to="/join-us"
                className={activeLink === '/joinus' ? ' selected' : ''}
                onClick={() => setActiveLink('/joinus')}
              >
                {t('joinus')}
              </NavLink>
              <NavLink
                to="/about-us"
                className={activeLink === '/aboutus' ? ' selected' : ''}
                onClick={() => setActiveLink('/aboutus')}
              >
                {t('aboutus')}
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
