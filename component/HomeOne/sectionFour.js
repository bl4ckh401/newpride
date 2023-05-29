import Link from "next/link";

export default function SectionFour() {
	return (
		<div className="section bg-gray-500 zuzu-section-padding-bottom overflow-hidden extra-padding">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 order-lg-2">
						<div className="zuzu-circle-thumb wow fadeInUpX" data-wow-delay="0.1s">
							<img src="/images/all-img/v1/Heart.png" alt="" />
						</div>
					</div>
					<div className="col-lg-6 d-flex align-items-center">
						<div className="zuzu-default-content dark large font-cabin m_right">
							<h2>🌈 Tokenomics</h2>
								<p className="text-white">Total supply: 420 Trillion tokens minted and released.</p>
								<p className="text-white">10% reserved for CEX listing, marketing, and development to fuel the growth of our fabulous community.</p>
								<p className="text-white">Liquidity locked for six months, with plans for extensions to ensure a secure and stable journey.</p>
								<p className="text-white">0% buy and sell taxes, allowing you to trade and participate in the $Pride revolution without any additional fees.</p>
								<p className="text-white">Contract ownership renounced to ensure community governance and decentralization.</p>
								<p className="text-white">No airdrops given to the team; $Pride Token is all about fairness and equal opportunities.</p>
								<p className="text-white">No presale, as we believe in a fair launch for all to join the fabulous ride.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
