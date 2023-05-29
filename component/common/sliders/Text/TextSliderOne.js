import Image from "next/image";
import Slider from "react-slick";

export default function TextSliderOne() {
	const settings = {
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 10000,
		cssEase: "linear",
		pauseOnHover: true,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className="zuzu-text-slider-section bg-dark">
			<div className="zuzu-text-slider">
				<Slider {...settings}>
					<div className="zuzu-text-slider-data">
						{/* <div className="zuzu-text-slider-icon">
							<img src="/images/all-img/v1/dollar.png" alt="" />
						</div> */}
						<Image width={100} height={100} src="/images/all-img/v1/love.png" alt="Love is Love" />
					</div>
					<div className="zuzu-text-slider-data">
						{/* <div className="zuzu-text-slider-icon">
							<Image width={40} height={40} src="/images/all-img/v1/dollar.png" alt="Dollar" />
						</div> */}
						<Image width={100} height={100} src="/images/all-img/v1/love.png" alt="Love is Love" />
					</div>
					<div className="zuzu-text-slider-data">
						{/* <div className="zuzu-text-slider-icon">
							<img src="/images/all-img/v1/dollar.png" alt="" />
						</div> */}
						<Image width={100} height={100} src="/images/all-img/v1/love.png" alt="Love is Love" />
					</div>
				</Slider>
			</div>
		</div>
	);
}
