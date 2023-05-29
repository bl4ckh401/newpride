import CountUp from "react-countup";

export default function CounterOne({ light }) {
	return (
		<div className={`${light ? "section zuzu-counter-light" : "zuzu-counter-section bg-gray-500"}`}>
			<div id="zuzu-counter" />
			<div className="container">
				<div className="zuzu-counter-wrap">
					<div className="zuzu-counter-data wow fadeInUpX" data-wow-delay="0s">
						<h2>
							<span className="zuzu-counter">
								<CountUp start={0} end={420} />
							</span>
							<strong>T</strong>
						</h2>
						<p>Total Supply</p>
					</div>
					<div className="zuzu-counter-data wow fadeInUpX" data-wow-delay="0.10s">
						<h2>
							<span className="zuzu-counter">
								<CountUp start={0} end={10} />
							</span>
							<strong>%</strong>
						</h2>
						<p>10% reserved for CEX listing, marketing, and development</p>
					</div>
					<div className="zuzu-counter-data wow fadeInUpX" data-wow-delay="0.20s">
						<h2>
							<span className="zuzu-counter">
								<CountUp end={0} />
							</span>
							<strong>%</strong>
						</h2>
						<p>Buy and Sell taxes</p>
					</div>
					{/* <div className="zuzu-counter-data wow fadeInUpX" data-wow-delay="0.30s">
						<h2>
							<span className="zuzu-counter">
								<CountUp end={78} />
							</span>
							<strong>+</strong>
						</h2>
						<p>Currencies supported</p>
					</div> */}
				</div>
			</div>
		</div>
	);
}
