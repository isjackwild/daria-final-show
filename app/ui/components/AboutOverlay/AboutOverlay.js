import React from 'react';

const AboutOverlay = ({ isVisible, close }) => {
	return (
		<section className={`overlay about-overlay overlay--${isVisible ? 'visible' : 'hidden'}`} onClick={close} >
			<div className="overlay__inner">
				<h2 className="overlay__title">Technological Nature</h2>
			</div>
		</section>
	);
};

export default AboutOverlay;

