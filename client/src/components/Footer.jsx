import React from 'react';

const FooterJSX = (props) => {
  const { style } = props;
  const { footerRoot, footerContainer, footerLink, footerLinks, footerTitle, linkRoot, footerGroup, footerColumn } = style;

  const customerServiceArr = [`Contact Us`, `FAQ`, `Shipping`, `Returns`, `Warranty`, `Buyers Guide`, `Care & Repair`, `Size Guide`, `Industry Pro Program`];
  const aboutFJArr = [`About Us`, `Sustainability`, `Our Materials`, `Careers`, `Press Room`];
  const legalArr = [`Terms & Conditions`, `Accessibility Statement`, `Privacy Policy`];
  const ourAdventuresArr = [`Fjallraven Polar`, `Fjallraven Classic`, `Opt-Out of Google Tracking`];

  const footerColumns = [[[`Customer Service`, customerServiceArr]], [[`About Fjallraven`, aboutFJArr], [`Legal`, legalArr]], [[`Our Adventures`, ourAdventuresArr]]];
  return (
    <footer className={footerRoot}>
      <div className={footerContainer}>

        {footerColumns.map((column, index) => {
          return <nav key={index} className={footerColumn}>
            {column.map((group, index) => {
              return <div key={index} className={footerGroup}>
                <label className={footerTitle}>{group[0]}</label>
                <ul className={footerLinks}>
                  {group[1].map((item, index) => {
                    return (
                      <li key={index} className={footerLink}>
                        <a className={linkRoot}>
                          <span>{item}</span>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>

            })}
          </nav>
        })}
      </div>
    </footer>
  )
}

export default FooterJSX;