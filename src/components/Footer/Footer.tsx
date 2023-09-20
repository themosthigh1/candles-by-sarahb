import Link from "next/link";

import footerClassNames from "./footerClassNames";

const footerText = '"The Redolence of Country Life."'

const footerLinks = [
  {name: 'Shipping', link: '/shipping'},
  {name: 'Returns and Exchanges', link: '/returns-and-exchanges'},
  {name: 'FAQ', link: 'faq'},
  {name: 'Privacy Policy', link: '/privacy-policy'},
  {name: 'Refund Policy', link: '/refund-policy'},
]

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

  return (
    <footer className={footer}>
      <div className={container}>
        <div className={section}>
          <div className={section1}>
            <h2 className={section1Heading}>
              <Link href={"/studio"}>Candles By Sarah B.</Link>
            </h2>
            <p className={section1Content}>
             {footerText}
            </p>
          </div>
          <div className={section2}>
            <h2 className={section2Heading}>
              <Link href={'/about'}>About us</Link></h2>
            <ul className={section2ul}>
              {footerLinks.map((footerLink, i) => (
                i < 3 ? (
                  <li key={i}><Link href={footerLink.link}>{footerLink.name}</Link></li>):("")
              ))}
            </ul>
          </div>
          <div className={section3}>
            <h2 className={section3Heading}>
              <Link href={'/contact'}>Contact us</Link></h2>
              <ul className={section2ul}>
                {footerLinks.map((footerLink, i) => (
                  i > 2 ? (
                    <li key={i}><Link href={footerLink.link}>{footerLink.name}</Link></li>):("")
                ))}
              </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
