import React from 'react';

const FooterJSX = (props) => {
  const { style } = props;
  const customerServiceArr = [`Contact Us`, `FAQ`, `Shipping`, `Returns`, `Warranty`, `Buyers Guide`, `Care & Repair`, `Size Guide`, `Industry Pro Program`];
  const aboutFJArr = [`About Us`, `Sustainability`, `Our Materials`, `Careers`, `Press Room`];
  const legalArr = [`Terms & Conditions`, `Accessibility Statement`, `Privacy Policy`];
  const ourAdventuresArr = [`Fjallraven Polar`, `Fjallraven Classic`, `Opt-Out of Google Tracking`];

  const footerColumns = [[[`Customer Service`, customerServiceArr]], [[`About Fjallraven`, aboutFJArr], [`Legal`, legalArr]], [[`Our Adventures`, ourAdventuresArr]]];
  return (
    <footer className={style.footerRoot}>
      <div className={style.footerContainer}>

        {footerColumns.map((column, index) => {
          return <nav key={index} className={style.footerColumn}>
            {column.map((group, index) => {
              return <div key={index} className={style.footerGroup}>
                <label className={style.footerTitle}>{group[0]}</label>
                <ul className={style.footerLinks}>
                  {group[1].map((item, index) => {
                    return (
                      <li key={index} className={style.footerlink}>
                        <a className={style.linkRoot}>
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