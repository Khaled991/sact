import { ReactElement, useState, useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Logo from '../../assets/img/logo.png';
import Banner from '../../components/banner/banner';
import { t } from 'i18next';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ReactComponent as DownArrow } from '../../assets/icon/down-arrow.svg';

interface IHeaderProps {
  changeLanguage: () => void;
}

const Header = ({ changeLanguage }: IHeaderProps): ReactElement => {
  const [currentScrollPosition, setCurrentScrollPosition] = useState<number>(0);
  const [activeLink, setActiveLink] = useState<string>('/');

  useEffect(() => {
    document.addEventListener('scroll', function (e) {
      setCurrentScrollPosition(window.scrollY);
    });
  }, []);

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
                  drop="end"
                  title={
                    <>
                      {t('servicesLanguages')}
                      <DownArrow className="right-arrow" />
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
                      English Language
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown
                    drop="end"
                    title={
                      <>
                        {'Major languages'}
                        <DownArrow className="right-arrow" />
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
                        French
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink
                        to="/German"
                        className={activeLink === '/German' ? ' selected' : ''}
                        onClick={() => setActiveLink('/German')}
                      >
                        German
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink
                        to="/Russian"
                        className={activeLink === '/Russian' ? ' selected' : ''}
                        onClick={() => setActiveLink('/Russian')}
                      >
                        Russian
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink
                        to="/Turkish"
                        className={activeLink === '/Turkish' ? ' selected' : ''}
                        onClick={() => setActiveLink('/Turkish')}
                      >
                        Turkish
                      </NavLink>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    drop="end"
                    title={
                      <>
                        {'Other languages'}
                        <DownArrow className="right-arrow" />
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
                        Chinese
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink
                        to="/Italian"
                        className={activeLink === '/Italian' ? ' selected' : ''}
                        onClick={() => setActiveLink('/Italian')}
                      >
                        Italian
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink
                        to="/Spanish"
                        className={activeLink === '/Spanish' ? ' selected' : ''}
                        onClick={() => setActiveLink('/Spanish')}
                      >
                        Spanish
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink
                        to="/Swedish"
                        className={activeLink === '/Swedish' ? ' selected' : ''}
                        onClick={() => setActiveLink('/Swedish')}
                      >
                        Swedish
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
                        Ukrainian
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
                        Bulgarian
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
                        Portuguese
                      </NavLink>
                    </NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>

                <NavDropdown
                  drop="end"
                  title={
                    <>
                      {t('servicesTranslation')}
                      <DownArrow className="right-arrow" />
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
                      Legal translation
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
                      Literary Translation and Humanities
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
                      Military Translation
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
                      Medical Translation
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
                      Religious Translation
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
                      Leisure, tourism and hospitality translation
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
                      Economic and Financial Translation
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
                      General Translation
                    </NavLink>
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  drop="end"
                  title={
                    <>
                      {t('servicesInterpretation')}
                      <DownArrow className="right-arrow" />
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
                      Simultaneous Interpretation
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
                      Consecutive Interpretation
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
                      Whispered Interpreting
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
                      Event and conference equipment supply
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink
                      to="/our-works"
                      className={activeLink === '/our-works' ? ' selected' : ''}
                      onClick={() => setActiveLink('/our-works')}
                    >
                      Our works
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
                    Desktop Publishing
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
                    Proofreading and editing
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
                    Web content translation and localization
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
                    Transcription
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>

              <NavLink
                to="/cvsearch"
                className={activeLink === '/cvsearch' ? ' selected' : ''}
                onClick={() => setActiveLink('/cvsearch')}
              >
                {t('cvsearch')}
              </NavLink>

              {/* <NavDropdown
                title={
                  <>
                    
                    <DownArrow className="down-arrow" />
                  </>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <NavLink
                    to="/as-a-translator"
                    className={
                      activeLink === '/as-a-translator' ? ' selected' : ''
                    }
                    onClick={() => setActiveLink('/as-a-translator')}
                  >
                    As a Translator
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    to="/as-an-interpreter"
                    className={
                      activeLink === '/as-an-interpreter' ? ' selected' : ''
                    }
                    onClick={() => setActiveLink('/as-an-interpreter')}
                  >
                    As an Interpreter
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    to="/join-our-pool-of-freelancers"
                    className={
                      activeLink === '/join-our-pool-of-freelancers'
                        ? ' selected'
                        : ''
                    }
                    onClick={() =>
                      setActiveLink('/join-our-pool-of-freelancers')
                    }
                  >
                    Join Our Pool of Freelancers
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown> */}

              <NavLink
                to="/joinus"
                className={activeLink === '/joinus' ? ' selected' : ''}
                onClick={() => setActiveLink('/joinus')}
              >
                {t('joinus')}
              </NavLink>
              <NavLink
                to="/aboutus"
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
