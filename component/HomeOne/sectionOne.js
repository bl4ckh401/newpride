import Image from "next/image";

export default function SectionOne() {
	return (
		<div className="section bg-gray-500 zuzu-section-padding">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="zuzu-thumb wow fadeInUpX" data-wow-delay="0.2s">
							<Image width={400} height={600} src="/images/all-img/v1/equalityposter.png" alt="Equality for All" />
						</div>
					</div>
					<div className="col-lg-6 d-flex align-items-center">
						<div className="zuzu-default-content dark large font-cabin">
							<h2>ABOUT $PRIDE</h2>
							<p>
							By investing in $Pride Token, you're embracing the power of financial empowerment.
							 Let's break the chains of inequality and pave the way for a future where our community thrives in all its glorious colors.
							</p>
							<p>
							Our mission is to empower individuals within the LGBTQ+ community through financial empowerment. 
							We firmly believe in breaking the chains of inequality and creating a future where every member of our community thrives in all their glorious colors. By investing in $Pride Token, you become a catalyst for change and join us on this empowering journey.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
