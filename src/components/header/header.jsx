import LogoImg from "../../assets/hrteamlogo.png";
import "../header/header.css";
import { Link } from "react-router-dom";
import { GoClockFill } from "react-icons/go";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

let Header = () => {

  return (
    <header>
      <div className="topheader">
        <div className="timer">
        <GoClockFill />
        <h3>İş saatları: 	I - V - 8:30 - 17:30</h3>
        </div>
        <div className="contactsu">
          <div className="phone">
          <h3><IoCall />+994 12 599 99 99</h3>
          </div>
          <div className="mails">
            <h3><MdEmail />info@hrteam.az</h3>
          </div>
          <div className="socials">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
          </div>
        </div>
      </div>
    <div className="bottomheader">
      <div className="LogoAndNavbar">
        <Link to="/">
          <img src={LogoImg} alt="LogoImg.png" />
        </Link>
        <div className="Menu">
          <ul>
            <Link className="link" to="/">
              <li>Ana Səhifə</li>
            </Link>
            <Link className="link" to="/about">
              <li>Haqqımızda</li>
            </Link>
            <Link className="link">
              <li>
                Xidmətlər
                <div className="dropdown-content">
                  <Link to="/services/oneservice">
                    <h3>İnsan Resurslarının Autsorsinqi</h3>
                  </Link>
                  <Link to="/services/twoservice">
                    <h3>İşə qəbul Autsorsinqi</h3>
                  </Link>
                  <Link to="/services/threeservice">
                    <h3>İşçi qüvvəsi təchizatı</h3>
                  </Link>
                  <Link to="/services/fourservice">
                    <h3>Satınalma Autsorsinqi</h3>
                  </Link>
                  <Link to="/services/fiveservice">
                    <h3>Əmək haqqının hesablanması</h3>
                  </Link>
                  <Link to="/services/sixservice">
                    <h3>Mühasibatlıq Autsorsinqi</h3>
                  </Link>
                  <Link to="/services/sevenservice">
                    <h3>İmmiqrasiya Autsorsinqi</h3>
                  </Link>
                  <Link to="/services/eightservice">
                    <h3>Təlim və qiymətləndirmə</h3>
                  </Link>
                </div>
              </li>
            </Link>
            <Link className="link" to="/vacancies">
              <li>Vakansiyalar</li>
            </Link>
            <Link className="link" to="/contact">
              <li>Əlaqə</li>
            </Link>
          </ul>
        </div>
        <button className="StartButton">İşə başlayın</button>
      </div>
      </div>
      </header>
  );
};

export default Header;
