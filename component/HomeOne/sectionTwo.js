import Image from "next/image";
import Link from "next/link";

export default function SectionTwo() {
	return (
		<div className="section bg-gray-500 zuzu-section-padding3 position-relative" id="how-to-buy">
			<div className="container">
				<div className="zuzu-section-title">
					<div className="zuzu-default-content dark font-grotesk">
						<h2>
							<span>How do I be part of $PRIDE?</span>{" "}
						</h2>
						{/* <h2>Metaverse offers a variety of activities for users</h2> */}
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6">
						<div className="zuzu-iconbox-wrap6 wow fadeInUpX" data-wow-delay="0s">
							<div className="zuzu-iconbox-icon6">
								<Image width={40} height={40} src="/images/all-img/v5/icon1.svg" alt="" />
							</div>
							<div className="zuzu-iconbox-data6">
								<h4>Get a Wallet</h4>
								<p>
								Before you can buy Pride, you will need to have a cryptocurrency wallet that supports Binance Smart Chain. 
								There are many different wallets available, so do your research and choose one that is right for you.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="zuzu-iconbox-wrap6 wow fadeInUpX" data-wow-delay=".40s">
							<div className="zuzu-iconbox-icon6">
								<Image width={40} height={40} src="/images/all-img/v5/icon6.svg" alt="" />
							</div>
							<div className="zuzu-iconbox-data6">
								<h4>Buy BNB</h4>
								<p>
								In order to buy $PRIDE, you will need to first buy (BNB) from a cryptocurrency exchange. 
								There are many exchanges to choose from, including Coinbase, Binance, and Kraken.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="zuzu-iconbox-wrap6 wow fadeInUpX" data-wow-delay=".40s">
							<div className="zuzu-iconbox-icon6">
								<Image width={40} height={40} src="/images/all-img/v5/icon4.svg" alt="" />
							</div>
							<div className="zuzu-iconbox-data6">
								<h4>Exchange BNB for $PRIDE</h4>
								<p>
								Once you have BNB in your wallet, you can exchange it for PRIDE Coin on a decentralized exchange (DEX) such as Pancake Swap. 
								Simply connect your wallet to the DEX and place a buy order for PRIDE Coin.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="zuzu-iconbox-wrap6 wow fadeInUpX" data-wow-delay=".30s">
							<div className="zuzu-iconbox-icon6">
								<Image width={40} height={40} src="/images/all-img/v5/icon3.svg" alt="" />
							</div>
							<div className="zuzu-iconbox-data6">
								<h4>Hold or Trade $PRIDE Coin</h4>
								<p>
								Once you have PRIDE Coin in your wallet, you can choose to hold it for the long-term or trade it for other cryptocurrencies or fiat currencies. 
								Remember that cryptocurrency prices can be volatile, so always do your own research and invest responsibly.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="zuzu-shape1">
				<Image width={400} height={400} src="/images/all-img/v1/letPride.png" alt="" />
			</div>
		</div>
	);
}
