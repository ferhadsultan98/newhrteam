import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../main/onesection/onesection.css";
import Carousel1 from "../../../assets/mainimage/blueback.png";
import RecuirementImg from '../../../assets/mainimage/oneimg.png'
import PerformanceManagementImg from '../../../assets/mainimage/twosimg.png'
import PersonalManagementImg from '../../../assets/mainimage/threeimg.png'

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="CarouselPart-One">
        <img src={Carousel1} alt="" />
        <div className="OneCaption">
          <div className="oneTheme">
            <h1>İşə qəbul prosesi</h1>
            <h5>
              İnsan Resursları deyərkən ümumiyyətlə ilk hətta tək ağla gələn işə
              qəbul prosesidir deyərdim. Çünki doğru pozisiyaya doğru resursu
              təyin etmək bir şirkət üçün ən kritik işdir.
            </h5>
          </div>
          <div className="oneVector">
            <img src={RecuirementImg} alt="" />
          </div>
        </div>
      </div>
      <div className="CarouselPart-Two">
        <img src={Carousel1} alt="" />
        <div className="TwoCaption">
        <div className="twoTheme">
          <h1>Performansın idarə olunması</h1>
          <h5>
            Professional mütəxəssisi işə qəbul etmək hər şey demək deyil, eyni
            zamanda bu işçidən yüksək nəticələr də əldə etmək lazımdır. Şirkət
            mədəniyyətindən tutmuş iş saatlarına qədər çox fərqli və buna təsir
            göstərən bir çox mühüm amillər vardır.
          </h5>
        </div>
        <div className="twoVector">
          <img src={PerformanceManagementImg} alt="" />
        </div>
        </div>
       
      </div>
      <div className="CarouselPart-Three">
        <img src={Carousel1} alt="" />
        <div className="ThreeCaption">
          <div className="threeTheme">
            <h1>Personalın idarə olunması</h1>
            <h5>
              Bu başlığa İnsan Resurslarının idarə olunmasının “qaranlıq tərəfi”
              də deyə bilərik. Şəxsi işlərin toplanması, məzuniyyət-ezamiyyyət
              təqvimlərinin hazırlanması, əmək haqqı hesablanması və s. kimi
              sənədlərlə iş bölməsidir. İnsan Resurslarının idarə edilməsi
              sadəcə işçilər üçün deyil, eyni zamanda müəssisənin rəhbər
              vəzifələri üçün də əhəmiyyətlidir.
            </h5>
          </div>
          <div className="threeVector">
          <img src={PersonalManagementImg} alt="" />
          </div>
        </div>
      </div>
    </Slider>
  );
}
