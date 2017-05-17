import React from 'react';
import PubSub from 'pubsub-js';

const ObjectOverlay = ({ isVisible, close }) => {
	return (
		<section className={`overlay about-overlay object-overlay--${isVisible ? 'visible' : 'hidden'}`} onClick={close} >
			<div className="overlay__inner">
				<h2 className="overlay__title">Technological Nature</h2>
			</div>
		</section>
	);
};

export default ObjectOverlay;

