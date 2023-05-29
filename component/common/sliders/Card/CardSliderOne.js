import Slider from "react-slick";

export default function CardSliderOne() {
	const settings = {
		infinity: true,
		centerMode: true,
		centerPadding: "180px",
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		autoplay: false,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1499,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					centerPadding: "100px",
				},
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					centerPadding: "70px",
				},
			},
			{
				breakpoint: 850,
				settings: {
					slidesToShow: 1,
					centerPadding: "70px",
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					centerPadding: "0",
				},
			},
		],
	};
	return (
		<div className="section bg-gray-500 zuzu-section-padding2">
			<div className="container">
				<div className="zuzu-section-title">
					<div className="zuzu-default-content dark large font-cabin">
						<h2>
						OUR ROADMAP <br />
						</h2>
						<p>
						Here's a suggested roadmap for the $Pride Token project:
						</p>
					</div>
				</div>
			</div>
			<div className="zuzu-testimonial-slider">
				<Slider {...settings}>
					<div className="zuzu-testimonial-card">
						<div className="zuzu-iconbox-icon2">
							<h2>💎</h2>
						</div>
						<h4>Phase 1</h4>
						<p>
						Establish the core team and community
						</p>
						<p>
						Solidify tokenomics and smart contract development
						</p>
						<p>
						Conduct a fair and transparent token launch on the Binance Smart Chain (BSC)
						</p>
						<p>
						List $Pride Token on decentralized exchanges (DEX) for trading and liquidity
						</p>
					</div>
					<div className="zuzu-testimonial-card">
						<div className="zuzu-iconbox-icon2">
							<h2>🎉</h2>
						</div>
						<h4>Phase 2</h4>
						<p>
						Collaborate with influencers, LGBTQ+ advocates, and organizations to raise awareness
						</p>
						<p>
						Expand the $Pride Token community through targeted marketing and outreach campaigns
						</p>
						<p>
						Regularly engage with the community through social media, AMA sessions, and events
						</p>
						<p>
						Implement referral and reward programs to incentivize community participation
						</p>
					</div>
					<div className="zuzu-testimonial-card">
						<div className="zuzu-iconbox-icon2">
							<h2>💃</h2>
						</div>
						<h4>Phase 3</h4>
						<p>
						Forge strategic partnerships with LGBTQ+ organizations, charities, and initiatives
						</p>
						<p>
						Develop real-world use cases for $Pride Token, such as funding LGBTQ+ programs and events
						</p>
						<p>
						Explore collaborations with LGBTQ+ artists, creators, and businesses for mutual growth
						</p>
						<p>
						Enhance utility by integrating $Pride Token into payment systems and merchant adoption
						</p>
					</div>
					<div className="zuzu-testimonial-card">
						<div className="zuzu-iconbox-icon2">
							<h2>🌟</h2>
						</div>
						<h4>Phase 4</h4>
						<p>
						Build a robust and user-friendly pride dApp for fundraising, merchandise sales, and donations
						</p>
						<p>
						Continuously improve the dApp based on user feedback and community needs
						</p>
						<p>
						Expand the dApp's features to include additional functionality and integration with external platforms
						</p>
						<p>
						Explore partnerships with existing crypto platforms for increased accessibility and usability
						</p>
					</div>
					<div className="zuzu-testimonial-card">
						<div className="zuzu-iconbox-icon2">
							<h2>✨</h2>
						</div>
						<h4>Phase 5</h4>
						<p>
						Expand the reach of $Pride Token to global LGBTQ+ communities and emerging markets
						</p>
						<p>
						Actively support LGBTQ+ rights advocacy and initiatives worldwide
						</p>
						<p>
						Foster collaborations with regulatory bodies to ensure compliance and transparency
						</p>
						<p>
						Establish $Pride Token as a recognized symbol of support for LGBTQ+ rights and inclusivity
						</p>
					</div>
				</Slider>
			</div>
		</div>
	);
}
