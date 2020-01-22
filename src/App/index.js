import React from 'react';
import './App.css';

import RoomEntry from '../RoomEntry';
import GameRoom from '../GameRoom';

/**
 * The root component for Letter Potato.
 * Mounts either the game entry screen or the game room
 * depending if a room code and player name was provided.
 */
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			playerName: '',
			roomCode: '',
			roomEntered: false,
		};
	}

	handleEnterRoom = () => {
		this.setState({ roomEntered: true });
	};

	handlePlayerNameChange = event => {
		this.setState({ playerName: event.target.value.toUpperCase() });
	};

	handleRoomCodeChange = event => {
		this.setState({ roomCode: event.target.value.toUpperCase() });
	};

	render() {
		const { playerName, roomCode, roomEntered } = this.state;

		return (
			<div className="App">
				<header className="App-header">Letter Potato</header>
				{roomEntered ? (
					<GameRoom playerName={playerName} roomCode={roomCode} />
				) : (
					<RoomEntry
						playerName={playerName}
						roomCode={roomCode}
						onEnterRoom={this.handleEnterRoom}
						onPlayerNameChange={this.handlePlayerNameChange}
						onRoomCodeChange={this.handleRoomCodeChange}
					/>
				)}
			</div>
		);
	}
}

App.propTypes = {};

export default App;
