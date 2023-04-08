import "./SubscriptionPlanCarousel.scss";

import React, { useEffect, useRef, useState } from "react";

import carouselImg from "../../../images/carousel.png";

function SubscriptionPlanCarousel() {
	const [no, setNo] = useState(1);
	const carouselRef = useRef();
	const [totalLength, setTotalLength] = useState();

	useEffect(() => {
		const scroll = carouselRef.current;
		const width = scroll.offsetWidth;

        setTotalLength(Object.keys(scroll?.childNodes));

		if (scroll) {
			const interval = setInterval(() => {
				if (scroll.scrollLeft + width >= scroll.scrollWidth) {
					scroll.scrollLeft = 0;
					setNo(1);
				} else {
					scroll.scrollLeft = scroll.scrollLeft + width;
					setNo(no + 1);
				}
			}, 3000);

			return () => {
				clearInterval(interval);
			};
		}
	}, [no]);


	return (
		<div className={`carousel-div`}>
			<div className={`carousel-title`}>
				{`Buy Subscription Plan to Apply`}
			</div>
			<div className={`carousel-wrapper`} ref={carouselRef}>
				<CarouselFrame />
				<CarouselFrame />
				<CarouselFrame />
				<CarouselFrame />
				<CarouselFrame />
			</div>
			<div className={`carousel-indicator`}>
                {
                    totalLength?.map((items,index)=>{
                        
                        return <div key={items+"_"+index} className={`${no===index+1?"active":"unactive"}`}></div>
                    })
                }
            </div>
		</div>
	);
}

export const CarouselFrame = () => {
	return (
		<div className="carousel-frame">
			<img src={carouselImg} />
			<div className={`title`}>
				Get a chance to apply a jobs which asking experience
			</div>
			<div className={`subtitle`}>
				Using our gold subscription package, one can also apply to the
				job which asking experienced candidate
			</div>
		</div>
	);
};

export default SubscriptionPlanCarousel;
