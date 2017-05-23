import React from 'react';
import PubSub from 'pubsub-js';

const ObjectOverlay = ({ isVisible, close, data }) => {
	const { title, leftText, rightText, leftImgSrc, rightImgSrc, objectImgSrc, videoSrc } = data || {};

	return (
		<section className={`overlay object-overlay overlay--${isVisible ? 'visible' : 'hidden'}`} onClick={close} >
			<div className="overlay__inner">
				<h2 className="overlay__title">{ title }</h2>
				<img className="object-overlay__object-img" src={objectImgSrc} />
				<div className="object-overlay__section-wrapper">
					<div className="object-overlay__section object-overlay__section--left"> 
						<img className="object-overlay__img object-overlay__img--left" src={rightImgSrc} />
						<h3>Nature</h3>
						<span className="object-overlay__text object-overlay__text--left">{ leftText }</span>
					</div>
					<div className="object-overlay__section object-overlay__section--right"> 
						<img className="object-overlay__img object-overlay__img--right" src={leftImgSrc} />
						<h3>Technology</h3>
						<span className="object-overlay__text object-overlay__text--right">{ rightText }</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ObjectOverlay;

