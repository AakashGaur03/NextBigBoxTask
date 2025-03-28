import React, { useState } from "react";

const BirdNutritionForm = () => {
	const [activeTab, setActiveTab] = useState("Pellets");

	const seedEatingBirds = [
		{ imgSrc: "/img/grani-1.svg", label: "Canaries & finches" },
		{ imgSrc: "/img/grani-2.svg", label: "Budgies & other small parakeets" },
		{ imgSrc: "/img/grani-3.svg", label: "Big parakeets" },
		{ imgSrc: "/img/grani-4.svg", label: "Parrots" },
	];

	const fruitInsectEatingBirds = [
		{ imgSrc: "/img/frugi-1.svg", label: "Small fruit- & insect-eating birds" },
		{ imgSrc: "/img/frugi-2.svg", label: "Medium fruit- & insect-eating birds" },
		{ imgSrc: "/img/frugi-3.svg", label: "Large fruit- & insect-eating birds" },
	];

	const nectarEatingBirds = [
		{ imgSrc: "/img/necta-1.svg", label: "Lories & lorikeets" },
		{ imgSrc: "/img/necta-2.svg", label: "Hummingbirds & nectar-eating birds" },
	];

	const omnivorousBirds = [{ imgSrc: "/img/omni-1.svg", label: "Hornbills" }];

	const lifeStages = [
		{ imgSrc: "/img/life-1.svg", label: "Maintenance" },
		{ imgSrc: "/img/life-2.svg", label: "Breeding" },
		{ imgSrc: "/img/life-3.svg", label: "Growth" },
	];

	const tabs = ["Pellets", "Soft food", "Hand-rearing", "Liquids"];

	return (
		<div>
			{/* Type of bird section */}
			<div className="questions__wrapper">
				<div className="question is-visible">
					<h3 className="question__title h4 l-anim">
						<span className="question__number">01.</span> Type of bird?
					</h3>
					<div className="question__wrapper">
						<div className="question__inner">
							<h4 className="question__list-title p1 l-anim">Seed-eating birds</h4>
							<ul className="question__list">
								{seedEatingBirds.map((item, index) => (
									<li className="question__item p3" key={index}>
										<figure className="question__icon c-anim">
											<picture className="lazy-image__container">
												<img src={item.imgSrc} alt="Nutribird" style={{ opacity: 1 }} />
											</picture>
										</figure>
										<span className="question__label l-anim">{item.label}</span>
									</li>
								))}
							</ul>
						</div>
						<div className="question__inner">
							<h4 className="question__list-title p1 l-anim">Fruit- & insect-eating birds</h4>
							<ul className="question__list">
								{fruitInsectEatingBirds.map((item, index) => (
									<li className="question__item p3" key={index}>
										<figure className="question__icon c-anim">
											<picture className="lazy-image__container">
												<img src={item.imgSrc} alt="Nutribird" style={{ opacity: 1 }} />
											</picture>
										</figure>
										<span className="question__label l-anim">{item.label}</span>
									</li>
								))}
							</ul>
						</div>
						<div className="question__inner">
							<h4 className="question__list-title p1 l-anim">Nectar-eating birds</h4>
							<ul className="question__list">
								{nectarEatingBirds.map((item, index) => (
									<li className="question__item p3" key={index}>
										<figure className="question__icon c-anim">
											<picture className="lazy-image__container">
												<img src={item.imgSrc} alt="Nutribird" style={{ opacity: 1 }} />
											</picture>
										</figure>
										<span className="question__label l-anim">{item.label}</span>
									</li>
								))}
							</ul>
						</div>
						<div className="question__inner">
							<h4 className="question__list-title p1 l-anim">Omnivorous birds</h4>
							<ul className="question__list">
								{omnivorousBirds.map((item, index) => (
									<li className="question__item p3" key={index}>
										<figure className="question__icon c-anim">
											<picture className="lazy-image__container">
												<img src={item.imgSrc} alt="Nutribird" style={{ opacity: 1 }} />
											</picture>
										</figure>
										<span className="question__label l-anim">{item.label}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>

			{/* Stage of life section */}
			<div className="questions__wrapper">
				<div className="question is-visible">
					<h3 className="question__title h4 l-anim">
						<span className="question__number">02.</span> Stage of life?
					</h3>
					<div className="question__wrapper">
						<div className="question__inner">
							<ul className="question__list">
								{lifeStages.map((item, index) => (
									<li className="question__item p3" key={index}>
										<figure className="question__icon c-anim">
											<picture className="lazy-image__container">
												<img src={item.imgSrc} alt="Nutribird" style={{ opacity: 1 }} />
											</picture>
										</figure>
										<span className="question__label l-anim">{item.label}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>

			{/* Form of nutrition section */}
			<div id="questions-tab" className="question question-tab is-visible">
				<div className="question-tab__title-wrapper">
					<div className="question-tab__inner">
						<h3 className="question__title h4 l-anim">
							<span className="question__number">03.</span> Form of nutrition?
						</h3>
						<div className="question-food">
							<figure>
								<picture className="lazy-image__container">
									<img src="/img/pellets.png" alt="Nutribird" style={{ opacity: 1 }} />
								</picture>
							</figure>
						</div>
					</div>
				</div>
				<div className="question-tab__container">
					<ul className="question-tab__nav">
						{tabs.map((tab) => (
							<li key={tab} className="question-tab__nav-item l-anim">
								<button
									className={`button p1 ${activeTab === tab ? "button--active" : ""}`}
									onClick={() => setActiveTab(tab)}
								>
									<span className="button__label">{tab}</span>
									<span className="button__border-abs button__ghost">{tab}</span>
									<span className="button__border-abs">
										<svg viewBox="0 0 162 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="button__border">
											<path
												d="M1 1H145C153.837 1 161 8.16344 161 17V49H17C8.16345 49 1 41.8366 1 33V1Z"
												strokeLinecap="square"
												strokeLinejoin="square"
											/>
										</svg>
										<svg
											viewBox="0 0 160 48"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="button__border button__border--active"
										>
											<path d="M0 1H143C151.837 1 159 8.16344 159 17V48" strokeWidth="2" className="button__path" />
											<path
												d="M159 47L17 47C8.16345 47 1 39.8365 1 31L1 -1.38128e-05"
												strokeWidth="2"
												className="button__path"
											/>
										</svg>
									</span>
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default BirdNutritionForm;
