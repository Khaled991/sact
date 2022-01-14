import { t } from 'i18next';
import { ReactElement } from 'react';
import Logo from '../../assets/img/logo.png';
import './blog.scss';

const Blog = (): ReactElement => {
  return (
    <div className="">
      <div id="blog">
        <div className="blog-container">
          {/* #masthead */}
          <div id="content" className="site-content">
            <main id="main" className="site-main" role="main">
              <article>
                <header className="entry-header">
                  <h1 className="entry-title">
                    <a href="blog-single.html" rel="bookmark">
                      Somewhere in time
                    </a>
                  </h1>
                  <div className="entry-meta">
                    <span className="posted-on">
                      <time className="entry-date published">
                        April 1, 2022
                      </time>
                    </span>
                    <span className="comments-link">
                      <a href="#s">Leave a comment</a>
                    </span>
                  </div>
                  <div className="entry-thumbnail">
                    <img
                      src="http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg"
                      alt="gssda"
                    />
                  </div>
                </header>
                <div className="entry-summary">
                  <p>
                    When Mary Lennox was sent to Manor to live with her uncle
                    everybody said she was the most disagreeablelooking child
                    ever seen. It was true, too. She had a little thin face and
                    a little thin body, thin light hair and a sour expression.
                    Her hair was yellow, and her face was yellow because she{' '}
                    <a className="more-link" href="blog-single.html">
                      Read more
                    </a>
                  </p>
                </div>
              </article>
              <article>
                <header className="entry-header">
                  <h1 className="entry-title">
                    <a href="blog-single.html" rel="bookmark">
                      Thanks for watching
                    </a>
                  </h1>
                  <div className="entry-meta">
                    <span className="posted-on">
                      <time className="entry-date published">
                        April 1, 2022
                      </time>
                    </span>
                    <span className="comments-link">
                      <a href="#s">1 Comment</a>
                    </span>
                  </div>
                  <div className="entry-thumbnail">
                    <img
                      src="https://static.remove.bg/remove-bg-web/6cc620ebfb5922c21227f533a09d892abd65defa/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg"
                      alt="gssda"
                    />
                  </div>
                </header>
                <div className="entry-summary">
                  <p>
                    When Mary Lennox was sent to Manor to live with her uncle
                    everybody said she was the most disagreeablelooking child
                    ever seen. It was true, too. She had a little thin face and
                    a little thin body, thin light hair and a sour expression.
                    Her hair was yellow, and her face was yellow because she{' '}
                    <a className="more-link" href="blog-single.html">
                      Read more
                    </a>
                  </p>
                </div>
              </article>
              <article>
                <header className="entry-header">
                  <h1 className="entry-title">
                    <a href="blog-single.html" rel="bookmark">
                      Thanks for watching
                    </a>
                  </h1>
                  <div className="entry-meta">
                    <span className="posted-on">
                      <time className="entry-date published">
                        April 1, 2022
                      </time>
                    </span>
                    <span className="comments-link">
                      <a href="#s">1 Comment</a>
                    </span>
                  </div>
                  <div className="entry-thumbnail">
                    <img
                      src="https://static.remove.bg/remove-bg-web/6cc620ebfb5922c21227f533a09d892abd65defa/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg"
                      alt="gssda"
                    />
                  </div>
                </header>
                <div className="entry-summary">
                  <p>
                    When Mary Lennox was sent to Manor to live with her uncle
                    everybody said she was the most disagreeablelooking child
                    ever seen. It was true, too. She had a little thin face and
                    a little thin body, thin light hair and a sour expression.
                    Her hair was yellow, and her face was yellow because she{' '}
                    <a className="more-link" href="blog-single.html">
                      Read more
                    </a>
                  </p>
                </div>
              </article>
            </main>
            {/* #main */}

            <div className="side-widget">
              <div className="side-widget__header">
                <h4 className="side-widget__title">About Us</h4>
                <img src={Logo} alt="logo" className="side-widget__img" />
                {t('salehAlOmarCertifiedTranslation')}
              </div>

              <h4 className="side-widget__title">Like us on Facebook</h4>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSACTtranlation%2F&tabs=timeline&width=340&height=380&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=365036103630036"
                width={340}
                height={380}
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder={0}
                title="facebook"
              />
            </div>
            {/* <aside
                  id="recent-comments-2"
                  className="widget widget_recent_comments"
                >
                  <h4 className="widget-title">Recent Comments</h4>
                  <ul id="recentcomments">
                    <li className="recentcomments">
                      <span>ThemePush</span> on{' '}
                      <a href="blog-single.html">Male T-Shirt</a>
                    </li>
                    <li className="recentcomments">
                      <span>ThemePush</span> on{' '}
                      <a href="blog-single.html">Male T-Shirt</a>
                    </li>
                    <li className="recentcomments">
                      <span>
                        <a href="#" rel="external nofollow" className="url">
                          Mr WordPress
                        </a>
                      </span>{' '}
                      on <a href="blog-single.html">Thanks for watching!</a>
                    </li>
                    <li className="recentcomments">
                      <span>Maria</span> on{' '}
                      <a href="blog-single.html">Gray Blouse</a>
                    </li>
                    <li className="recentcomments">
                      <span>Maria</span> on{' '}
                      <a href="blog-single.html">Retro Dress</a>
                    </li>
                  </ul>
                </aside> */}
            {/* <aside id="text-7" className="widget widget_text">
                  <h4 className="widget-title">Follow us</h4> */}
            {/* <div className="textwidget">
                    //Place this tag in your head or just before your close body tag.
                    //Place this tag where you want the widget to render.
                    <div
                      id="___page_0"
                      style={{
                        textIndent: 0,
                        margin: 0,
                        padding: 0,
                        borderStyle: 'none',
                        float: 'none',
                        lineHeight: 'normal',
                        fontSize: 1,
                        verticalAlign: 'baseline',
                        display: 'inline-block',
                        width: 300,
                        height: 377,
                        background: 'transparent',
                      }}
                    >
                      <iframe
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        scrolling="no"
                        style={{
                          position: 'static',
                          top: 0,
                          width: 300,
                          margin: 0,
                          borderStyle: 'none',
                          left: 0,
                          visibility: 'visible',
                          height: 377,
                        }}
                        tabIndex={0}
                        width="100%"
                        id="I0_1460806394603"
                        src="https://apis.google.com/u/0/_/widget/render/page?usegapi=1&href=%2F%2Fplus.google.com%2Fu%2F0%2F110916582192388695332&rel=publisher&origin=http%3A%2F%2Fwww.themepush.com&gsrc=3p&ic=1&jsh=m%3B%2F_%2Fscs%2Fapps-static%2F_%2Fjs%2Fk%3Doz.gapi.en.5rbYCKK8ELg.O%2Fm%3D__features__%2Fam%3DAQ%2Frt%3Dj%2Fd%3D1%2Frs%3DAGLTcCNt4tfE4T2zmac5ke0V9FW49A3yCA#_methods=onPlusOne%2C_ready%2C_close%2C_open%2C_resizeMe%2C_renderstart%2Concircled%2Cdrefresh%2Cerefresh%2Conload&id=I0_1460806394603&parent=http%3A%2F%2Fwww.themepush.com&pfname=&rpctoken=19037393"
                        data-gapiattached="true"
                        title="+Badge"
                      ></iframe>
                    </div>
                  </div> */}
            {/* </aside>
             */}
            {/* </div> */}
            {/* .widget-area */}
            {/* </div> */}
            {/* #secondary */}
          </div>
          {/* #content */}
        </div>
      </div>
    </div>
  );
};

export default Blog;
