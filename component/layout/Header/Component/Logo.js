import Image from "next/image";
import Link from "next/link";

export default function Logo({ logo_name }) {
	return (
		<Link href={"/"}>
			<Image src={`/images/all-img/v1/${logo_name}`} width={100} height={100} alt="EQUALITY FOR ALL" />
		</Link>
	);
}
