import React from 'react';
import PubSub from 'pubsub-js';
import HoverTitle from '../components/HoverTitle/HoverTitle.js';
import ObjectOverlay from '../components/ObjectOverlay/ObjectOverlay.js';
import AboutOverlay from '../components/AboutOverlay/AboutOverlay.js';
import { OBJECT_DATA } from '../../3d/constants.js';

const view = ({ mousePressed, hoverTitle, targetFocused, aboutShown, overlayShown, overlayData, closeOverlay, closeAbout }) => {
	const cursor = (() => {
		if (overlayShown || aboutShown) return 'back';
		if (targetFocused) return 'pointer';
		if (mousePressed) return 'dragging';
		return 'drag';
	})();

	return (
		<main className={`master-layout cursor--${cursor}`}>
			<HoverTitle text={hoverTitle} />
			<ObjectOverlay isVisible={overlayShown} data={overlayData} close={closeOverlay} />
			<AboutOverlay isVisible={aboutShown} close={closeAbout} />
		</main>
	);
};

const data = Component => class extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			mousePressed: false,
			targetFocused: false,
			aboutShown: false,
			overlayShown: false,
			overlayData: null,
			hoverTitle: '',
		}
		this.subs = [];

		this.closeOverlay = this.closeOverlay.bind(this);
		this.closeAbout = this.closeAbout.bind(this);
	}

	closeOverlay() {
		this.setState({ overlayShown: false, overlayData: null });
		PubSub.publish('item.hide', true);
	}

	closeAbout() {
		this.setState({ aboutShown: false });
		PubSub.publish('about.hide', true);
	}

	componentDidMount() {
		PubSub.subscribe('target.focus', (e, { title }) => this.setState({ hoverTitle: title, targetFocused: true }));
		PubSub.subscribe('target.blur', e => this.setState({ hoverTitle: '', targetFocused: false }));
		PubSub.subscribe('item.show', (e, { id }) => this.setState({ overlayShown: true, overlayData: OBJECT_DATA[id], hoverTitle: '' }));
		PubSub.subscribe('about.show', e => this.setState({ aboutShown: true, hoverTitle: '' }));
		window.addEventListener('mousedown', e => this.setState({ mousePressed: true }));
		window.addEventListener('mouseup', e => this.setState({ mousePressed: false }));
	}

	render() {
		return <Component {...this.state} {...this.props} closeOverlay={this.closeOverlay} closeAbout={this.closeAbout} />
	}
};


const Master = data(view);

export default Master;

