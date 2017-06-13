import React from 'react';
import {Row, Col} from 'antd';
import {Tabs, Carousel} from 'antd';
const TabPane = Tabs.TabPane;

export default class BookGallery extends React.Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			autoplay: true
		};
		return (
			<div className="gallery">
				<Row>
					<Col span={8}></Col>
					<Col span={16} class="container">
						<div class="leftContainer">
							<div class="carousel">
								<Carousel {...settings}>
									<div><img src="./src/images/1.png"/></div>
									<div><img src="./src/images/2.png"/></div>
									<div><img src="./src/images/3.png"/></div>
									<div><img src="./src/images/4.png"/></div>
                  <div><img src="./src/images/5.png"/></div>
								</Carousel>
							</div>
						</div>
					</Col>
					<Col span={2}></Col>
				</Row>
			</div>
		);
	};
}
