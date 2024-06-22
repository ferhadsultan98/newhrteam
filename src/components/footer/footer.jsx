import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import LogoImage from "../../assets/hrteamlogo.png";
import "../footer/footer.css";

let Footer = () => {
  return (
    <div className="footerstart">
      <div className="footer-flex">
        <div className="information">
          <h1>Əlaqə</h1>
          <p>
            <a href="https://maps.app.goo.gl/txWq2nTwBBEc9zzQ8" target="_blank">
              Abdulvahab Salamzadə küçəsi ev 65a
            </a>
          </p>
          <p>
            <a href="mailto:someone@info@hrteam.az">info@hrteam.az</a>
          </p>
          <p>
            <a href="tel:+994703308607">+994 70-330-86-07</a>
          </p>
          <div className="socialmedias">
            <div className="fb">
              <FaFacebookF />
            </div>
            <div className="insta">
              <FaInstagram />
            </div>
            <div className="linkedin">
              <FaLinkedinIn />
            </div>
          </div>
        </div>
        <div className="usefullinks">
          <h1>Vacib keçidlər</h1>
          <p>
            <a href="#">Haqqımızda</a>
          </p>
          <p>
            <a href="#">Yeniliklər</a>
          </p>
          <p>
            <a href="#">Xidmətlərimiz</a>
          </p>
          <p>
            <a href="#">Dəstək</a>
          </p>
        </div>
        <div className="ourservices">
          <h1>Xidmətlərimiz</h1>
          <div className="services">
            <div className="servicesone">
              <p>
                <a href="">İnsan Resurslarının Autsorsinqi</a>
              </p>
              <p>
                <a href="">İşə qəbul Autsorsinqi</a>
              </p>
              <p>
                <a href="">İşçi qüvvəsi təchizatı</a>
              </p>
              <p>
                <a href="">Satınalma Autsorsinqi</a>
              </p>
            </div>
            <div className="servicestwo">
              <p>
                <a href="">Əmək haqqının hesablanması Autsorsinqi</a>
              </p>
              <p>
                <a href="">Mühasibatlıq Autsorsinqi</a>
              </p>
              <p>
                <a href="">İmmiqrasiya Autsorsinqi</a>
              </p>
              <p>
                <a href="">Təlim və qiymətləndirmə</a>
              </p>
            </div>
          </div>
        </div>
        <div className="latestupdate">
          <h1>Son yeniliklər</h1>
          <p>Yeniliklərdən xəbərdar olmaq üçün abunə olun</p>
          <form className="subscribelatest" action="#">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email yazın"
              required
              autoComplete="off"
              maxLength={25}
            />
            <input type="submit" id="subscribebutton" value={"Abunə ol"} />
          </form>
        </div>
      </div>
      <hr />
      <p>
        Copyright © 2024 | Powered by{" "}
        <a href="https://www.instagram.com/ferhad.sultann" target="_blank">
          Sultanov
        </a>
      </p>
    </div>
  );
};

export default Footer;
