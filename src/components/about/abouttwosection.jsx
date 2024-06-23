import React from "react";
import "../about/about.css";
import aboutVector from "../../assets/about image.jpg";

let AboutTwoSection = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutVector">
        <img src={aboutVector} alt="" />
      </div>
      <div className="aboutinfo">
        <h2>
          HR Team şirkəti Azərbaycanda Biznes Proseslərinin Autsorsinqi üzrə ən
          öndə gələn müəssisələrdən biridir. Müəssisəmiz 2022-ci ildən bəri
          uğurla fəaliyyət göstərməkdədir.
        </h2>
        <h3>Bizim xidmətlərimiz aşağıdakılardır:</h3>
        <ul>
          <li>İnsan Resurslarının Autsorsinqi</li>
          <li>İşə qəbul Autsorsinqi</li>
          <li>Autstaffinq və İşçi qüvvəsi təchizatı</li>
          <li>Satınalma Autsorsinqi</li>
          <li>Əmək haqqının hesablanması Autsorsinqi</li>
          <li>Mühasibatlıq Autsorsinqi</li>
          <li>İmmiqrasiya və Səyahət Autsorsinqi</li>
          <li>Təlim və qiymətləndirmə</li>
          <li>Hüquq məsləhətləri</li>
        </ul>
        <h2>Niyə biz?</h2>
        <p>
          Siz HR team şirkətini seçməklə rahatlıqla öz biznesinizin inkişafı
          haqqında düşünə bilərsiniz, əlavə olaraq bununla siz yüksək məvacibli
          işçi heyətindən, ofis xərclərindən və digər məsrəflərdən azad
          olursunuz. Şirkətimiz sizin güvəninizə və etibarınıza arxalanaraq
          biznesinizin inkişafı üçün yüksək ixtisaslı komandası ilə xidmət
          göstərməyi özünə başlıca missiya seçmişdir.
        </p>
      </div>
    </div>
  );
};

export default AboutTwoSection;
