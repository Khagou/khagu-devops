import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="reseaux">
        <div className="title">
          <h6>Réseaux sociaux</h6>
        </div>
        <div className="social">
          <ul>
            <li>
              <a
                href="https://github.com/Khagou"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <div className="img">
                  <img
                    src="./images/logoGit.png"
                    alt="https://github.com/Khagou"
                    width={50}
                  />
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/maxence-verdom-a241b4249/"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <div className="img">
                  <img
                    src="./images/linkedin.png"
                    alt="https://www.linkedin.com/in/maxence-verdom-a241b4249/"
                    width={50}
                  />
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://learn.unity.com/u/5fb84012edbc2a530d1912ec?tab=profile"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <div className="img">
                  <img
                    src="./images/unity.png"
                    alt="https://learn.unity.com/u/5fb84012edbc2a530d1912ec?tab=profile"
                    width={50}
                  />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
