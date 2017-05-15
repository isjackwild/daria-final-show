import React from 'react';
import PubSub from 'pubsub-js';
import VideoOverlay from '../components/VideoOverlay/VideoOverlay.js';

const view = ({ mousePressed, videoShown, targetFocused, isVR, toggleVr }) => {
	const cursor = (() => {
		if (videoShown) return 'back';
		if (targetFocused) return 'pointer';
		if (mousePressed) return 'dragging';
		return 'drag';
	})();

	return (
		<main className={`master-layout cursor--${cursor}`}>
			<VideoOverlay />
		</main>
	);
};

const data = Component => class extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			mousePressed: false,
			videoShown: false,
			targetFocused: false,
			isVR: false,
		}
		this.subs = [];
	}

	componentDidMount() {
		PubSub.subscribe('video.show', e => this.setState({ videoShown: true }));
		PubSub.subscribe('video.hide', e => this.setState({ videoShown: false }));
		PubSub.subscribe('target.focus', e => this.setState({ targetFocused: true }));
		PubSub.subscribe('target.blur', e => this.setState({ targetFocused: false }));
		window.addEventListener('mousedown', e => this.setState({ mousePressed: true }));
		window.addEventListener('mouseup', e => this.setState({ mousePressed: false }));
	}

	render() {
		return <Component {...this.state} {...this.props} />
	}
};


const Master = data(view);

export default Master;

