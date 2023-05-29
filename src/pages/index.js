import Head from "next/head";
import HeroSection from "../../component/HomeOne/heroSection";
import SectionOne from "../../component/HomeOne/sectionOne";
import SectionTwo from "../../component/HomeOne/sectionTwo";
import SectionThree from "../../component/HomeOne/sectionThree";
import SectionFour from "../../component/HomeOne/sectionFour";
import CardSliderOne from "../../component/common/sliders/Card/CardSliderOne";
import TextSliderOne from "../../component/common/sliders/Text/TextSliderOne";
import CounterOne from "../../component/common/Counter/CounterOne";

export default function Home() {
	return (
		<>
			<Head>
				<title>$PRIDE🌈✨</title>
			</Head>
			<HeroSection />
			<CounterOne />
			<SectionOne />
			<SectionTwo />
			<SectionThree />
			<TextSliderOne />
			<SectionFour />
			<CardSliderOne />
		</>
	);
}

export async function getStaticProps() {
	return { props: { header: "one", footer: "one" } };
}
