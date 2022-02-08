import { ReactElement, useState, useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Logo from '../../assets/img/logo.webp';
import Banner from '../../components/banner/banner';
import { t } from 'i18next';
import { NavLink } from 'react-router-dom';
import { ReactComponent as DownArrow } from '../../assets/icon/down-arrow.svg';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import NavDropdownItem from '../../components/navDropdownItem/navDropdownItem';

interface IHeaderProps {
  changeLanguage: () => void;
}

const Header = ({ changeLanguage }: IHeaderProps): ReactElement => {
  const { i18n } = useTranslation();
  const [currentScrollPosition, setCurrentScrollPosition] = useState<number>(0);
  const [activeLink, setActiveLink] = useState<string>('/');

  useEffect(() => {
    document.addEventListener('scroll', function () {
      setCurrentScrollPosition(window.scrollY);
    });
  }, []);

  const handleDropSideDiraction = {
    transform: i18n.language === 'en' ? `rotate(270deg)` : `rotate(90deg)`,
  };
  const dropDownDirection = i18n.language === 'en' ? 'end' : 'start';

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
            <NavLink to="/">
              <motion.img
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2 }}
                src={Logo}
                alt="Logo"
                className="logo"
              />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <motion.div
              initial={{ y: -200 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <Nav className="me-auto">
                <NavDropdownItem
                  to="/"
                  active={activeLink === '/'}
                  onClick={() => setActiveLink('/')}
                >
                  {t('home')}
                </NavDropdownItem>
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
                    <NavDropdownItem
                      to="/english-language"
                      active={activeLink === '/english-language'}
                      onClick={() => setActiveLink('/english-language')}
                    >
                      {t('English')}
                    </NavDropdownItem>
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
                      <NavDropdownItem
                        to="/French"
                        active={activeLink === '/French'}
                        onClick={() => setActiveLink('/French')}
                      >
                        {t('French')}
                      </NavDropdownItem>
                      <NavDropdownItem
                        to="/German"
                        active={activeLink === '/German'}
                        onClick={() => setActiveLink('/German')}
                      >
                        {t('German')}
                      </NavDropdownItem>
                      <NavDropdownItem
                        to="/Russian"
                        active={activeLink === '/Russian'}
                        onClick={() => setActiveLink('/Russian')}
                      >
                        {t('Russian')}
                      </NavDropdownItem>
                      <NavDropdownItem
                        to="/Turkish"
                        active={activeLink === '/Turkish'}
                        onClick={() => setActiveLink('/Turkish')}
                      >
                        {t('Turkish')}
                      </NavDropdownItem>
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
                      <NavDropdownItem
                        to="/Chinese"
                        active={activeLink === '/Chinese'}
                        onClick={() => setActiveLink('/Chinese')}
                      >
                        {t('Chinese')}
                      </NavDropdownItem>
                      <NavDropdownItem
                        to="/Italian"
                        active={activeLink === '/Italian'}
                        onClick={() => setActiveLink('/Italian')}
                      >
                        {t('Italian')}
                      </NavDropdownItem>
                      <NavDropdownItem
                        to="/Spanish"
                        active={activeLink === '/Spanish'}
                        onClick={() => setActiveLink('/Spanish')}
                      >
                        {t('Spanish')}
                      </NavDropdownItem>
                      <NavDropdownItem
                        to="/Swedish"
                        active={activeLink === '/Swedish'}
                        onClick={() => setActiveLink('/Swedish')}
                      >
                        {t('swedishLanguageTitleData')}
                      </NavDropdownItem>
                      <NavDropdownItem
                        to="/Ukrainian"
                        active={activeLink === '/Ukrainian'}
                        onClick={() => setActiveLink('/Ukrainian')}
                      >
                        {t('ukrainianLanguageTitleData')}
                      </NavDropdownItem>
                      <NavDropdownItem
                        to="/Bulgarian"
                        active={activeLink === '/Bulgarian'}
                        onClick={() => setActiveLink('/Bulgarian')}
                      >
                        {t('bulgarianLanguageTitleData')}
                      </NavDropdownItem>
                      <NavDropdownItem
                        to="/Portuguese"
                        active={activeLink === '/Portuguese'}
                        onClick={() => setActiveLink('/Portuguese')}
                      >
                        {t('portugueseLanguageTitleData')}
                      </NavDropdownItem>
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
                    <NavDropdownItem
                      to="/legal-translation"
                      active={activeLink === '/legal-translation'}
                      onClick={() => setActiveLink('/legal-translation')}
                    >
                      {t('legalTranslationTitleData')}
                    </NavDropdownItem>
                    <NavDropdownItem
                      to="/literary-translation-and-humanities"
                      active={
                        activeLink === '/literary-translation-and-humanities'
                      }
                      onClick={() =>
                        setActiveLink('/literary-translation-and-humanities')
                      }
                    >
                      {t('literaryTranslationAndHumanitiesTitleData')}
                    </NavDropdownItem>
                    <NavDropdownItem
                      to="/military-translation"
                      active={activeLink === '/military-translation'}
                      onClick={() => setActiveLink('/military-translation')}
                    >
                      {t('militaryTranslationTitleData')}
                    </NavDropdownItem>
                    <NavDropdownItem
                      to="/medical-translation"
                      active={activeLink === '/medical-translation'}
                      onClick={() => setActiveLink('/medical-translation')}
                    >
                      {t('medicalTranslationTitleData')}
                    </NavDropdownItem>
                    <NavDropdownItem
                      to="/religious-translation"
                      active={activeLink === '/religious-translation'}
                      onClick={() => setActiveLink('/religious-translation')}
                    >
                      {t('religiousTranslationTitleData')}
                    </NavDropdownItem>
                    <NavDropdownItem
                      to="/leisure,-tourism-and-hospitality-translation"
                      active={
                        activeLink ===
                        '/leisure,-tourism-and-hospitality-translation'
                      }
                      onClick={() =>
                        setActiveLink(
                          '/leisure,-tourism-and-hospitality-translation'
                        )
                      }
                    >
                      {t('leisureTourismAndHospitalityTranslationTitleData')}
                    </NavDropdownItem>
                    <NavDropdownItem
                      to="/economic-and-financial-translation"
                      active={
                        activeLink === '/economic-and-financial-translation'
                      }
                      onClick={() =>
                        setActiveLink('/economic-and-financial-translation')
                      }
                    >
                      {t('economicAndFinancialTranslationTitleData')}
                    </NavDropdownItem>
                    <NavDropdownItem
                      to="/general-translation"
                      active={activeLink === '/general-translation'}
                      onClick={() => setActiveLink('/general-translation')}
                    >
                      {t('generalTranslationTitleData')}
                    </NavDropdownItem>
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
                    <NavDropdownItem
                      to="/simultaneous-interpretation"
                      active={activeLink === '/simultaneous-interpretation'}
                      onClick={() =>
                        setActiveLink('/simultaneous-interpretation')
                      }
                    >
                      {t('simultaneousInterpretationTitleData')}
                    </NavDropdownItem>
                    <NavDropdownItem
                      to="/consecutive-interpretation"
                      active={activeLink === '/consecutive-interpretation'}
                      onClick={() =>
                        setActiveLink('/consecutive-interpretation')
                      }
                    >
                      {t('consecutiveInterpretationTitleData')}
                    </NavDropdownItem>
                    <NavDropdownItem
                      to="/whispered-interpreting"
                      active={activeLink === '/whispered-interpreting'}
                      onClick={() => setActiveLink('/whispered-interpreting')}
                    >
                      {t('whisperedInterpretingTitleData')}
                    </NavDropdownItem>
                    <NavDropdownItem
                      to="/event-and-conference-equipment-supply"
                      active={
                        activeLink === '/event-and-conference-equipment-supply'
                      }
                      onClick={() =>
                        setActiveLink('/event-and-conference-equipment-supply')
                      }
                    >
                      {t('eventAndConferenceEquipmentSupplyTitleData')}
                    </NavDropdownItem>
                    <NavDropdownItem
                      to="/our-works"
                      active={activeLink === '/our-works'}
                      onClick={() => setActiveLink('/our-works')}
                    >
                      {t('ourWorksTitleData')}
                    </NavDropdownItem>
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
                  <NavDropdownItem
                    to="/desktop-publishing"
                    active={activeLink === '/desktop-publishing'}
                    onClick={() => setActiveLink('/desktop-publishing')}
                  >
                    {t('desktopPublishingTitleData')}
                  </NavDropdownItem>
                  <NavDropdownItem
                    to="/proofreading-and-editing"
                    active={activeLink === '/proofreading-and-editing'}
                    onClick={() => setActiveLink('/proofreading-and-editing')}
                  >
                    {t('proofreadingAndEditingTitleData')}
                  </NavDropdownItem>
                  <NavDropdownItem
                    to="/web-content-translation-and-localization"
                    active={
                      activeLink === '/web-content-translation-and-localization'
                    }
                    onClick={() =>
                      setActiveLink('/web-content-translation-and-localization')
                    }
                  >
                    {t('webContentTranslationAndLocalizationTitleData')}
                  </NavDropdownItem>
                  <NavDropdownItem
                    to="/transcription"
                    active={activeLink === '/transcription'}
                    onClick={() => setActiveLink('/transcription')}
                  >
                    {t('transcriptionTitleData')}
                  </NavDropdownItem>
                </NavDropdown>
                <NavDropdownItem
                  to="/cv-search"
                  active={activeLink === '/cvsearch'}
                  onClick={() => setActiveLink('/cvsearch')}
                >
                  {t('cvsearch')}
                </NavDropdownItem>
                <NavDropdownItem
                  to="/join-us"
                  active={activeLink === '/joinus'}
                  onClick={() => setActiveLink('/joinus')}
                >
                  {t('joinus')}
                </NavDropdownItem>
                <NavDropdownItem
                  to="/about-us"
                  active={activeLink === '/aboutus'}
                  onClick={() => setActiveLink('/aboutus')}
                >
                  {t('aboutus')}
                </NavDropdownItem>
              </Nav>
            </motion.div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
