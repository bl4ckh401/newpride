import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";
import Image from "next/image";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

export default function HeroSection() {
	const [isOpen, setOpen] = useState(false);
	return (
		<div id="home">
			<div
				className="zuzu-hero-section bg-cover"
				style={{ backgroundImage: "url(/images/all-img/v1/hero-bg.png)" }}
			>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 align-items-center">
							<div className="zuzu-hero-content zuzu-dark-content font-cabin">
								<h1 className="wow fadeInUpX" data-wow-delay="0s">
								Welcome to the World of $Pride! 🌈✨
								</h1>
								<p className="wow fadeInUpX" data-wow-delay="0.25s">
								Step into a realm where empowerment, fabulousness, and financial freedom intersect. $Pride Token is here to celebrate the LGBTQ+ community and ignite the rainbow revolution! Are you ready to join the most fabulous movement in the crypto sphere? Let's dive in!
								</p>
								<p className="" data-wow-delay="0.25s">0x1066D6d936C9DE443707C3113107e6<br/>E23a3c3ee8</p>
								<div className="zuzu-hero-btn-wrap">
									<Link href={"https://pancakeswap.finance/swap?outputCurrency=0x1066D6d936C9DE443707C3113107e6E23a3c3ee8"} legacyBehavior>
										<a className="zuzu-btn btn-white pill wow fadeInUpX" data-wow-delay="0.40s">
											Get started now
										</a>
									</Link>
									<Link href={"#"} legacyBehavior>
										<a className="zuzu-popup zuzu-popup-hero" onClick={() => setOpen(true)}>
											<Image width={60} height={60} src="/images/all-img/v1/play-button.png" alt="" />
											<div className="waves wave-1" />
											<div className="waves wave-2" />
											<div className="waves wave-3" />
										</a>
									</Link>
								</div>
								<div className="zuzu-hero-btn-wrap">
									<Link href="https://twitter.com/pride_token" className=''>
									<Image src='/twitterIcon.webp' width={60} height={60} alt='twitter'/>
									</Link>
									<Link href="https://t.me/pride_token" className='mx-1'>
									<Image src='/telegramIcon.webp' width={60} height={60} alt='telegram'/>
									</Link>
									<Link href="https://www.dextools.io/app/en/bnb/pair-explorer/0xecb9ebe5002286e80e6d5442ca4502ff280dd7ed" className='mx-1'>
									<Image src='/dexTool.webp' width={60} height={60} alt='dexTool'/>
									</Link>
									<Link href="https://bscscan.com/token/0x1066d6d936c9de443707c3113107e6e23a3c3ee8" className='mx-1'>
									<Image src='/bscscanIcon.png' width={60} height={60} alt='etherscan'/>
									</Link>
									<Link href="https://pancakeswap.finance/swap?outputCurrency=0x1066D6d936C9DE443707C3113107e6E23a3c3ee8" className='mx-1'>
									<Image src='/pancakeSwap.png' width={60} height={60} alt='pancake'/>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="zuzu-hero-card1">
								<Image width={400} height={400} src="/images/all-img/v1/love.png" alt="Love is Love" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<ModalVideo
				channel="youtube"
				autoplay
				isOpen={isOpen}
				videoId="wV26Pxw0NxU"
				onClose={() => setOpen(false)}
			/>
		</div>
	);
}
