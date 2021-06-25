import FriendRequest from "../friend-request/friend-request.component";
import { Component } from "react";
import { requestToGraphQl } from "../../graphql/graphql";

class RequestList extends Component {
	state = {
		users: [],
	};

	componentDidMount = () => {
		requestToGraphQl({
			query: `{
				friendRequests {
					displayName
					userName
					photoURL
				}
			}`,
		})
			.then((result) => {
        console.log(result.data.friendRequests);
        this.setState({users: result.data.friendRequests})
      })
      .catch(error => console.log)
	};

	removeUser = (targetUserName) => {
		this.setState((prevState) => ({
			users: prevState.users.filter((user) => user.userName !== targetUserName),
		}));
	};

	render() {
		return !this.state.users.length ? null : (
			<div className="user-list">
				<h1>People Sent You Friend Request</h1>
				<div className="list">
					{this.state.users.map((user) => (
						<FriendRequest
							key={user.userName}
							user={user}
							removeUser={this.removeUser}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default RequestList;
