import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import DropdownMenu from "./dropdown-menu";
import Link from "../../common/sliders/Link";

export default function NavItem({ navItemText, menuItems = false, megaMenu = false }) {
	const [isOpenDropDown, setIsOpenDropDown] = useState(false);
	const handleClick = (e) => {
		setIsOpenDropDown(!isOpenDropDown);
	};

	function GenerateLinkHrefContent(menuItems, navItemText) {
		if (!menuItems) {
			return navItemText.split(" ").join("-").toLowerCase();
		} else {
			return "#";
		}
	}

	return (
		<li className={`nav-item ${menuItems ? "nav-item-has-children" : ""}`}>
			{/* <Link href={GenerateLinkHrefContent(menuItems, navItemText)} legacyBehavior> */}
				<Link href={GenerateLinkHrefContent(menuItems, navItemText)} className="nav-link-item drop-trigger" onClick={handleClick}>
					{navItemText}
					{menuItems && <FontAwesomeIcon icon={faAngleDown} />}
				</Link>
			{/* </Link> */}

			{!megaMenu ? (
				<DropdownMenu isOpenDropDown={isOpenDropDown} menuItems={menuItems} />
			) : // <MegaMenu menuItems={menuItems} />
			null}
		</li>
	);
}
