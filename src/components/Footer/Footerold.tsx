import Link from "next/link";

import footerClassNames from "./footerClassNames";

const Footer = () => {
  const {
    container,
    footer,
    section,
    section1,
    section1Content,
    section1Heading,
    section2,
    sectionLink,
    section2Content,
    section2Heading,
    section2ul,
    section3,
    section3Content,
    section3Heading,
  } = footerClassNames;

  const footerText = '"The Redolence of Country Life."'

  const footerLinks = [
    {name: 'Shipping', link: '/shipping'},
    {name: 'Returns and Exchanges', link: '/returns-and-exchanges'},
    {name: 'FAQ', link: 'faq'},
    {name: '', link: ''},
    {name: '', link: ''},
  ]

  return (
    <footer className={footer}>
      <div className={container}>
        <div className={section}>
          <div className={section1}>
            <h2 className={section1Heading}>Candles By Sarah B.</h2>
            <p className={section1Content}>
                {footerText}
            </p>
          </div>
          <div className={section2}>
            <h2 className={section2Heading}>
              <Link href={""}>About us</Link></h2>
            <ul className={section2ul}>
              {footerLinks.map((footerLink, i) => 
                <li></li>
              )}
            </ul>
          </div>
          <div className={section3}>
            <h2 className={section3Heading}>Contact us</h2>
            <p className={section3Content}>
            <ul className={section2ul}>
            <li>
                <Link href="#" className={sectionLink}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className={sectionLink}>
                  Refund Policy
                </Link>
              </li>
            </ul>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
