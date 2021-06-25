import CurrentUsersName from "../current-user/current-users-name/current-users-name.component";
import CurrentUsersProfilePic from "../current-user/current-users-profile-pic/current-users-profile-pic.component";
import IconContainer from "../top-nav/icon-container/icon-container.component";
import "./left-nav.styles.scss";

import covidInfoIcon from "./icons/covid-information.png";
import messenger from "./icons/messenger.png";
import friends from "./icons/friends.png";
import friendList from "./icons/friendList.png";
import groups from "./icons/groups.png";
import memories from "./icons/memories.png";
import pages from "./icons/pages.png";
import saved from "./icons/saved.png";
import watch from "./icons/watch.png";
import weather from "./icons/weather.png";
import ItemContainer from "../item-container/item-container.component";
import { withRouter } from "react-router";

const LeftNav = ({ className, style, history, setDisplayLeftNav }) => {
	return (
		<div className={`left-nav ${className ? className : null}`} style={style}>
			<div className="content">
				<div className="item profile">
					<IconContainer>
						<CurrentUsersProfilePic />
					</IconContainer>
					<div className="other">
						<CurrentUsersName className="name" />
					</div>
				</div>

				<ItemContainer
					iconSrc={covidInfoIcon}
					itemName="COVID-19 Information Center"
				/>
				<ItemContainer
					iconSrc={friends}
					itemName="Find Friends"
					onClick={() => {
						history.push("/friends");
						setDisplayLeftNav();
					}}
				/>
				<ItemContainer
					iconSrc={watch}
					itemName="Watch"
					extra="9+ new videos"
					onClick={() => {
						history.push("/watch");
						setDisplayLeftNav();
					}}
				/>
				<ItemContainer iconSrc={groups} itemName="Groups" extra="7 new" />
				<ItemContainer
					iconSrc={messenger}
					itemName="Messenger"
					extra="1 new message"
				/>
				<ItemContainer iconSrc={memories} itemName="Memories" />
				<ItemContainer iconSrc={pages} itemName="Pages" extra="9+ updates" />
				<ItemContainer iconSrc={friendList} itemName="Friend Lists" />
				<ItemContainer iconSrc={weather} itemName="Weather" />
				<ItemContainer iconSrc={saved} itemName="Saved" />
				<ItemContainer iconSrc={friends} itemName="Find Friends" />
				<ItemContainer iconSrc={groups} itemName="Groups" extra="7 new" />
				<ItemContainer
					iconSrc={messenger}
					itemName="Messenger"
					extra="1 new message"
				/>
				<ItemContainer iconSrc={memories} itemName="Memories" />
				<ItemContainer iconSrc={pages} itemName="Pages" extra="9+ updates" />
				<ItemContainer iconSrc={friendList} itemName="Friend Lists" />
				<ItemContainer iconSrc={watch} itemName="Watch" extra="9+ new videos" />
				<ItemContainer iconSrc={weather} itemName="Weather" />
				<ItemContainer iconSrc={saved} itemName="Saved" />
			</div>
		</div>
	);
};

export default withRouter(LeftNav);
