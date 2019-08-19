import React from 'react';

import { Fade } 		from 'react-reveal';
import ScrollableAnchor from 'react-scrollable-anchor';


const SelectedWritings = (props) => {
	return(
		<Fade left opposite >
			<div className='selected-writings'>
				<h1>writing</h1>
				<ScrollableAnchor id={'writing'} >
					<div className='writing-header'>
						<p>for three years, I was a writer and reporter—mostly about fun stuff, mostly in Chicago—for <i>Chicago</i> magazine, the <i>Chicago Tribune</i> and ApartmentTherapy.com. Here are, in no particular order, a few personal-favorite stories I worked on in that time.</p>
					</div>
				</ScrollableAnchor>
				<Fade left cascade  >
					<ul className='writing-links'>
						<li>
							<a href='https://www.chicagotribune.com/dining/restaurants/ct-hot-dog-day-unexpected-places-food-0719-20170714-story.html'
							target="_blank">
								Chicago's Best Hidden HotDogs</a> - <i>Chicago Tribune</i>
						</li>
						<li>
							<a href='https://www.chicagomag.com/city-life/March-2017/Happy-100th-Birthday-to-the-Best-Damn-City-Flag-Ever/'
							target="_blank">
								Happy 100th Birthday to the Best Damn City Flag Ever</a> - <i>Chicago</i> magazine
						</li>
						<li>
							<a href='https://www.apartmenttherapy.com/best-movie-houses-261790'
							target="_blank">
							7 Under-the-Radar Movies Every Home-Obsessive Should Watch</a> - ApartmentTherapy.com
						</li>
						<li>
							<a href='https://www.chicagomag.com/Chicago-Magazine/February-2017/Michael-Jarecki-wrestling/'
							target="_blank">
								The Grit and the Glory: Chicago's Amateur Wrestling League</a> - <i>Chicago</i> magazine
						</li>
						<li>
							<a href='https://www.chicagomag.com/Chicago-Magazine/March-2018/Hidden-Chicago-2018/Eight-Museums-Where-Youll-Never-See-a-Tour-Bus/'
							target="_blank">
								The Absolute Dumbest Fireworks You'll Find in Northwest Indiana</a> - <i>Chicago</i> magazine
						</li>
						<li>
							<a href='https://www.chicagomag.com/Chicago-Magazine/March-2018/Hidden-Chicago-2018/Eight-Museums-Where-Youll-Never-See-a-Tour-Bus/'
							target="_blank">
								8 Chicago Museums Where You'll Never See a Tour Bus</a> - <i>Chicago</i> magazine
						</li>
						<li>
							<a href='https://www.chicagomag.com/Chicago-Magazine/June-2017/Welcome-to-Refugee-High/Life-of-Khup/'
							target="_blank">
								The New Life of a Former Refuge</a> - <i>Chicago</i> magazine
						</li>
						<li>
							<a href='https://www.chicagomag.com/Chicago-Magazine/January-2017/Heres-Your-Comedy-Calendar/'
							target="_blank">
								The Perfect Chicago Comedy Week</a> - <i>Chicago</i> magazine
						</li>
					</ul>
				</Fade>
				<div className='writing-footer'>
					<p>If you for some reason want to see EVERYTHING I've done (hi dad), hang tight: I'm currently porting that longer list over from my old site to a FireStore database, and I'm hoping to have a visually pleasing way to share it with you real soon.</p>
				</div>
			</div>
		</Fade>
	)
}
export default SelectedWritings;
