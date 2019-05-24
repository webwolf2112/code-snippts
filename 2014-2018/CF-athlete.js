var customApp
 = {

	// Global Variables
	athleteUrls : [
		{
			url: 'fName_lName',
			loadAthleteFunction: 'loadContentfName'
		},
		{
			url: 'fName_lName',
			loadAthleteFunction: 'loadContentfName'
		},
		{
			url: 'fName_name',
			loadAthleteFunction: 'loadContentfName'
		},
		{
			url: 'fname_lname',
			loadAthleteFunction: 'loadContentfname'
		},
	],
	largeImageSlider : null,
	sliderQuestions : null,
	sliderInstagramPhotos : null,
	statsCarouselInfo : null,
	nameAndStats : null,
	prevAndNextLinks : null,
	articleNumbers : null,



	// Functions
	loadContentfName : function(mainLocation, photoLocation) {

		// large Photo Size 800 X 610
		// Thumbnail Photo Size 150 X 150
		customApp
		.largeImageSlider = [
			{
				largeImage: photoLocation + 'sample-1.jpg',
				thumbnailImage: photoLocation + 'sample-1-thumb.jpg"',
				altTitle: 'fName lName',
				videoLink: '',
				videoTitle:''
			},
			{
				largeImage: photoLocation + 'sample-2.jpg',
				thumbnailImage: photoLocation + 'sample-2-thumb.jpg"',
				altTitle: 'fName lName',
				videoLink: '',
				videoTitle: ''
			},
			{
				largeImage: photoLocation + 'sample-3.jpg',
				thumbnailImage: photoLocation + 'sample-3-thumb.jpg"',
				altTitle: 'fName lName',
				videoLink: '',
				videoTitle: ''
			},
			{
				largeImage: photoLocation + 'sample-4.jpg',
				thumbnailImage: photoLocation + 'sample-4-thumb.jpg"',
				altTitle: 'fName lName',
				videoLink: '',
				videoTitle: ''
			},
			{
				largeImage: photoLocation + 'sample-5.jpg',
				thumbnailImage: photoLocation + 'sample-5-thumb.jpg"',
				altTitle: 'fName lName',
				videoLink: '',
				videoTitle: ''
			},
			{
				largeImage: photoLocation + 'sample-6.jpg',
				thumbnailImage: photoLocation + 'sample-6-thumb.jpg"',
				altTitle: 'fName lName',
				videoLink: '',
				videoTitle: ''
			}
		];//end largeImageSlider array

		customApp
		.sliderQuestions = [
			{
				question: 'What is your favorite color?',
				answer: 'Black'
			},
			{
				question: 'Who is your favorite Athlete?',
				answer: 'Julie Foucher or Josh Bridges'
			},
			{
				question: 'What’s your favorite Meal?',
				answer: 'Cheeseburgers and fries.'
			},
			{
				question: 'What’s your favorite Movie?',
				answer: 'Man there are way too many to name or just only 1!!!'
			},
			{
				question: 'Favorite place you have visited?',
				answer: 'The bahamas'
			},
			{
				question: 'Cats or Dogs?',
				answer: 'Dogs'
			},
			{
				question: 'Beach or Mountains?',
				answer: 'Mountains'
			},
			{
				question: 'What’s your biggest pet peve?',
				answer: 'When people have excuses for everything'
			},
			{
				question: '3 things you would want to have on a deserted island?',
				answer: 'Barbell, wife, bible'
			},
			{
				question: 'What’s your biggest guilty pleasure?',
				answer: 'I guess donuts'
			},
			{
				question: 'What’s your favorite sport?',
				answer: 'Baseball'
			},
			{
				question: 'What’s your favorite activity outside of the box?',
				answer: 'Sports, I play baseball in a league and roller hockey'
			},
			{
				question: 'What did you want to be when you were growing up?',
				answer: 'Firefighter'
			},
			{
				question: 'What’s one thing you can’t live without?',
				answer: 'My wife Hillary'
			}

		];//end quotes array

		customApp
		.sliderInstagramPhotos = [
			{
				photo: photoLocation + 'instagram1.jpg',
				link: 'https://instagram.com/p/3B9ZqGs0F6/?taken-by=fNamelName',
				altTitle :'fName\'s Instagram',
				videoLink: '',
				videoTitle:''
			},{
				photo: photoLocation + 'instagram2.jpg',
				link: 'https://instagram.com/p/47zR0rs0N1/?taken-by=fNamelName',
				altTitle :'fName\'s Instagram',
				videoLink: '',
				videoTitle:''
			},{
				photo: photoLocation + 'instagram3.jpg',
				altTitle :'fName\'s Instagram',
				link: 'https://instagram.com/p/2rqDZBM0DU/?taken-by=fNamelName',
				videoLink: 'https://instagram.com/fNamelName/',
				videoTitle:'' //fName\'s Ring Workout
			}

			//**Add the video link if you want the play button icon to appear over the photo

		];//end customApp
		.sliderInstagramPhotos

		customApp
		.statsCarouselInfo = [
			{
				icon: photoLocation + 'icon-clock.png',
				title: 'Workouts',
				stats: [
					{
						stat:'Fran:',
						amount:'2:13'
					},
					{
						stat:'Grace:',
						amount:'1:11'
					},
					{
						stat:'Fight Gone Bad:',
						amount:'508'
					}
				]
			},
			{
				icon: photoLocation + 'icon-weight.png',
				title: 'Max Weight',
				stats: [
					{
						stat:'Clean & Jerk:',
						amount:'370 lb'
					},
					{
						stat:'Snatch:',
						amount:'305 lb'
					},
					{
						stat:'Deadlift:',
						amount:'570 lb'
					},
					{
						stat:'Back Squat:',
						amount:'475 lb'
					}
				]
			},
			{
				icon: photoLocation + 'icon-reps.png',
				title: 'Max Reps',
				stats: [
					{
						stat:'Max Pullups:',
						amount:'75'
					}
				]
			}
		]; // end customApp
		.statsCarouselInfo

		customApp
		.nameAndStats = {
			nameFirst: 'fName',
			nameLast:'lName',
			tagLine: 'Servant of Christ. Husband of @hillarylName. Father. Galatians 6:14.',
			/**IMPORTANT  ALWAYS USE A \ IN FRONT OF ANY QUOTES THAT APPEAR ON THE PAGE  ex height: 5\'9\" **/
			/** Also add the <sup></sup> tag for any register symbols**/
			titleStats: 'Age: 28 | Height: 5\'9\" | Weight: 198 lbs | Affiliate: Crossfit<sup>&reg;</sup>Mayhem',
			twitterLink: 'https://twitter.com/fNamelName',
			instagramLink: 'https://instagram.com/fNamelName/'
		};

		customApp
		.prevAndNextLinks = {
			prevAthleteLink: '/fName_name',
			prevAthletePhoto: photoLocation + 'fName-small.jpg',
			prevAthleteName:'fName name',
			nextAthleteLink: 'http://www.staging.store.crossfit.com/fName_lName',
			nextAthletePhoto: photoLocation + 'fName-leblanc-bazinet.jpg',
			nextAthleteName: 'fName Leblanch-Bazinet'
		};

		// Products to feature
		customApp
		.articleNumbers = ["V68758","S48465","B87245","B02716","B87915","Z86617","AA1103","AB4943","AA1133","AA1137","AB4945","AK0104"];

	},

	loadContentfName : function(mainLocation, photoLocation) {

		// large Photo Size 800 X 610
		// Thumbnail Photo Size 150 X 150
		customApp
		.largeImageSlider = [
			{
				largeImage: photoLocation + '2015_CFREGIONALS_South_Day2_Women_Event45_Web-4.jpg',
				thumbnailImage: photoLocation + '2015_CFREGIONALS_South_Day2_Women_Event45_Web-4-small.jpg',
				altTitle: 'fName Leblanc-Bazinet',
				videoLink: '',
				videoTitle:''
			},
			{
				largeImage: photoLocation + '2015_CFREGIONALS_South_Day2_Women_Event45_Web-8.jpg',
				thumbnailImage: photoLocation + '2015_CFREGIONALS_South_Day2_Women_Event45_Web-8-small.jpg',
				altTitle: 'fName Leblanc-Bazinet',
				videoLink: '',
				videoTitle:''
			},
			{
				largeImage: photoLocation + '2015_CFREGIONALS_South_Day2_Women_Event45_Web-11.jpg',
				thumbnailImage: photoLocation + '2015_CFREGIONALS_South_Day2_Women_Event45_Web-11-small.jpg',
				altTitle: 'fName Leblanc-Bazinet',
				videoLink: '',
				videoTitle:''
			},
			{
				largeImage: photoLocation + 'crossfit-games-screengrab.jpg',
				thumbnailImage: photoLocation + 'crossfit-games-screengrab-small.jpg',
				altTitle: 'Crossfit Games.jpg',
				videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/RV7O17rsyDE" frameborder="0" allowfullscreen></iframe>',
				videoTitle:'Story in the South'
			},
			{
				largeImage: photoLocation + '2015_CFREGIONALS_South_Day2_Women_Event45_Web-12.jpg',
				thumbnailImage: photoLocation + '2015_CFREGIONALS_South_Day2_Women_Event45_Web-12-small.jpg',
				altTitle: 'fName Leblanc-Bazinet',
				videoLink: '',
				videoTitle:''
			},
			{
				largeImage: photoLocation + 'crossfit-open-wod.jpg',
				thumbnailImage: photoLocation + 'crossfit-open-wod-small.jpg',
				altTitle: 'fName Leblanc-Bazinet',
				videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Z78zvmQhQVg" frameborder="0" allowfullscreen></iframe>',
				videoTitle:'CrossFit Open WOD 15.5'
			},
			{
				largeImage: photoLocation + '2015_CFREGIONALS_South_Day2_Women_Event45_Web-15.jpg',
				thumbnailImage: photoLocation + '2015_CFREGIONALS_South_Day2_Women_Event45_Web-15-small.jpg',
				altTitle: 'fName Leblanc-Bazinet',
				videoLink: '',
				videoTitle:''
			},
			{
				largeImage: photoLocation + '2015_CFREGIONALS_South_Day3_Women_Event6_Web-3.jpg',
				thumbnailImage: photoLocation + '2015_CFREGIONALS_South_Day3_Women_Event6_Web-3-small.jpg',
				altTitle: 'fName Leblanc-Bazinet',
				videoLink: '',
				videoTitle:''
			},
			{
				largeImage: photoLocation + '2015_CFREGIONALS_South_Day3_Women_Event6_Web-4.jpg',
				thumbnailImage: photoLocation + '2015_CFREGIONALS_South_Day3_Women_Event6_Web-4-small.jpg',
				altTitle: 'fName Leblanc-Bazinet',
				videoLink: '',
				videoTitle:''
			},
			{
				largeImage: photoLocation + '2015_CFREGIONALS_South_Day3_Women_Event6_Web-6.jpg',
				thumbnailImage: photoLocation + '2015_CFREGIONALS_South_Day3_Women_Event6_Web-6-small.jpg',
				altTitle: 'fName Leblanc-Bazinet',
				videoLink: '',
				videoTitle:''
			},
			{
				largeImage: photoLocation + '2015_CFREGIONALS_South_Women_Event1_Web-2.jpg',
				thumbnailImage: photoLocation + '2015_CFREGIONALS_South_Women_Event1_Web-2-small.jpg',
				altTitle: 'fName Leblanc-Bazinet',
				videoLink: '',
				videoTitle:''
			},
			{
				largeImage: photoLocation + '2015_CFREGIONALS_South_Women_Event1_Web-3.jpg',
				thumbnailImage: photoLocation + '2015_CFREGIONALS_South_Women_Event1_Web-3-small.jpg',
				altTitle: 'fName Leblanc-Bazinet',
				videoLink: '',
				videoTitle:''
			},
			{
				largeImage: photoLocation + '2015_CFREGIONALS_South_Women_Event1_Web-5.jpg',
				thumbnailImage: photoLocation + '2015_CFREGIONALS_South_Women_Event1_Web-5-small.jpg',
				altTitle: 'fName Leblanc-Bazinet',
				videoLink: '',
				videoTitle:''
			},
			{
				largeImage: photoLocation + '2015_CFREGIONALS_South_Women_Event1_Web-10.jpg',
				thumbnailImage: photoLocation + '2015_CFREGIONALS_South_Women_Event1_Web-10-small.jpg',
				altTitle: 'fName Leblanc-Bazinet',
				videoLink: '',
				videoTitle:''
			},
			{
				largeImage: photoLocation + '2015_CFREGIONALS_South_Women_Event1_Web-11.jpg',
				thumbnailImage: photoLocation + '2015_CFREGIONALS_South_Women_Event1_Web-11-small.jpg',
				altTitle: 'fName Leblanc-Bazinet',
				videoLink: '',
				videoTitle:''
			},
			{
				largeImage: photoLocation + '2015_CFREGIONALS_South_Women_Event2_Web-8.jpg',
				thumbnailImage: photoLocation + '2015_CFREGIONALS_South_Women_Event2_Web-8-small.jpg',
				altTitle: 'fName Leblanc-Bazinet',
				videoLink: '',
				videoTitle:''
			},
			{
				largeImage: photoLocation + 'RCF15_South_DAY2_Women_Event3_Web_007.jpg',
				thumbnailImage: photoLocation + 'RCF15_South_DAY2_Women_Event3_Web_007-small.jpg',
				altTitle: 'fName Leblanc-Bazinet',
				videoLink: '',
				videoTitle:''
			},
			{
				largeImage: photoLocation + 'RCF15_South_DAY2_Women_Event3_Web_008.jpg',
				thumbnailImage: photoLocation + 'RCF15_South_DAY2_Women_Event3_Web_008-small.jpg',
				altTitle: 'fName Leblanc-Bazinet',
				videoLink: '',
				videoTitle:''
			},
			{
				largeImage: photoLocation + 'RCF15_South_DAY2_Women_Event3_Web_011.jpg',
				thumbnailImage: photoLocation + 'RCF15_South_DAY2_Women_Event3_Web_011-small.jpg',
				altTitle: 'fName Leblanc-Bazinet',
				videoLink: '',
				videoTitle:''
			},
			{
				largeImage: photoLocation + 'RCF15_South_DAY3_Women_Event7_-656-JS.jpg',
				thumbnailImage: photoLocation + 'RCF15_South_DAY3_Women_Event7_-656-JS-small.jpg',
				altTitle: 'fName Leblanc-Bazinet',
				videoLink: '',
				videoTitle:''
			},
			{
				largeImage: photoLocation + 'RCF15_South_DAY3_Women_Event7_-703-JS.jpg',
				thumbnailImage: photoLocation + 'RCF15_South_DAY3_Women_Event7_-703-JS-small.jpg',
				altTitle: 'fName Leblanc-Bazinet',
				videoLink: '',
				videoTitle:''
			},
			{
				largeImage: photoLocation + 'RCF15_South_DAY3_Women_Event7_-762-JS.jpg',
				thumbnailImage: photoLocation + 'RCF15_South_DAY3_Women_Event7_-762-JS-small.jpg',
				altTitle: 'fName Leblanc-Bazinet',
				videoLink: '',
				videoTitle:''
			}
		];//end largeImageSlider array

		customApp
		.sliderQuestions = [
			{
				question: 'What is your favorite color?',
				answer: 'Green'
			},
			{
				question: 'Who is your favorite Athlete?',
				answer: 'George St. Pierre'
			},
			{
				question: 'What’s your favorite Meal?',
				answer: 'Ribs'
			},
			{
				question: 'What’s your favorite Movie?',
				answer: 'Elf'
			},
			{
				question: 'Favorite place you have visited?',
				answer: 'Boulder, CO'
			},
			{
				question: 'Vanilla or chocolate?',
				answer: 'Chocolate'
			},
			{
				question: 'Cats or Dogs?',
				answer: 'Cats'
			},
			{
				question: 'Beach or Mountains?',
				answer: 'Mountains'
			},
			{
				question: 'What’s your biggest pet peve?',
				answer: 'People biting their nails'
			},
			{
				question: '3 things you would want to have on a deserted island?',
				answer: 'Dave, Chocolate, Tool Box'
			},
			{
				question: 'What’s your biggest guilty pleasure?',
				answer: 'The New Girl tv show'
			},
			{
				question: 'What’s your favorite sport?',
				answer: 'CrossFit'
			},
			{
				question: 'What’s something most people don’t know about you?',
				answer: 'I sing in the car'
			},
			{
				question: 'What’s your favorite activity outside of the box?',
				answer: 'Movies'
			},
			{
				question: 'What did you want to be when you were growing up?',
				answer: 'Coroner'
			},
			{
				question: 'If you could have one superhuman power, what would it be?',
				answer: 'Mind Control'
			},
			{
				question: 'If you won the lottery, what’s the first thing you would buy?',
				answer: 'College fund for my children'
			},
			{
				question: 'If you were an animal what would you be?',
				answer: 'Tiger'
			},
			{
				question: 'What’s the last book you have read?',
				answer: 'Unstoppable'
			},
			{
				question: 'What do you hate doing?',
				answer: 'Pairing socks'
			},
			{
				question: 'What’s one thing you can’t live without?',
				answer: 'Dave'
			}

		];//end quotes array

		customApp
		.sliderInstagramPhotos = [
			{
				photo: photoLocation + '10554061_933479083358557_743688060_n.jpg',
				link: 'https://instagram.com/fNamelbaz/',
				altTitle :'fName\'s Instagram',
				videoLink: '',
				videoTitle:''
			},
			{
				photo: photoLocation + '11189613_863433147063436_529761022_n.jpg',
				link: 'https://instagram.com/fNamelbaz/',
				altTitle :'fName\'s Instagram',
				videoLink: '',
				videoTitle:''
			},
			{
				photo: photoLocation + '11199627_707353359386820_2111915981_n.jpg',
				link: 'https://instagram.com/fNamelbaz/',
				altTitle :'fName\'s Instagram',
				videoLink: '',
				videoTitle:''
			},
			{
				photo: photoLocation + '11253909_100947010243065_1512541281_n.jpg',
				link: 'https://instagram.com/fNamelbaz/',
				altTitle :'fName\'s Instagram',
				videoLink: '',
				videoTitle:''
			},
			{
				photo: photoLocation + '11263401_634103706725294_639885515_n.jpg',
				link: 'https://instagram.com/fNamelbaz/',
				altTitle :'fName\'s Instagram',
				videoLink: '',
				videoTitle:''
			},
			{
				photo: photoLocation + '11269150_753999478001403_1217888330_n.jpg',
				link: 'https://instagram.com/fNamelbaz/',
				altTitle :'fName\'s Instagram',
				videoLink: '',
				videoTitle:''
			},
			{
				photo: photoLocation + '11349126_136345010032164_825209554_n.jpg',
				link: 'https://instagram.com/fNamelbaz/',
				altTitle :'fName\'s Instagram',
				videoLink: '',
				videoTitle:''
			},
			{
				photo: photoLocation + '11385252_599240883512075_1394385852_n.jpg',
				link: 'https://instagram.com/fNamelbaz/',
				altTitle :'fName\'s Instagram',
				videoLink: '',
				videoTitle:''
			}

			//**Add the video link if you want the play button icon to appear over the photo

		];//end customApp
		.sliderInstagramPhotos

		customApp
		.statsCarouselInfo = [
			{
				icon: photoLocation + 'icon-clock.png',
				title: 'Workouts',
				stats: [
					{
						stat:'Fran:',
						amount:'2:04'
					},{
						stat:'Helen:',
						amount:'7:20'
					},{
						stat:'Grace:',
						amount:'1:40'
					},{
						stat:'Sprint 400m:',
						amount:'1:20'
					}
				]
			},{
				icon: photoLocation + 'icon-weight.png',
				title: 'Max Weight',
				stats: [
					{
						stat:'Clean & Jerk:',
						amount:'230 lb'
					},{
						stat:'Snatch:',
						amount:'190 lb'
					},{
						stat:'Deadlift:',
						amount:'300 lb'
					},{
						stat:'Back Squat:',
						amount:'310 lb'
					}
				]
			},{
				icon: photoLocation + 'icon-reps.png',
				title: 'Max Reps',
				stats: [
					{
						stat:'Max Pullups:',
						amount:'80'
					}
				]
			}
		]; // end customApp
		.statsCarouselInfo

		customApp
		.nameAndStats = {
			nameFirst: 'fName',
			nameLast:'LEBLANC-BAZINET',
			tagLine: 'Live for my passions and to share them... I am a student in chemical engineering and full time crossfiter...',
			/**IMPORTANT  ALWAYS USE A \ IN FRONT OF ANY QUOTES THAT APPEAR ON THE PAGE  ex height: 5\'9\" **/
			/** Also add the <sup></sup> tag for any register symbols**/
			titleStats: 'Age: 26 | Height: 5\'2\" | Weight: 130 lbs | Affiliate: Crossfit<sup>&reg;</sup> Roots',
			twitterLink: 'https://twitter.com/fNamelbaz',
			instagramLink: 'https://instagram.com/fNamelbaz/?hl=en'
		};

		customApp
		.prevAndNextLinks = {
			prevAthleteLink: '/fName_lName',
			prevAthletePhoto: photoLocation + 'sample-1.jpg',
			prevAthleteName:'fName lName',
			nextAthleteLink: '/fname_lname',
			nextAthletePhoto: photoLocation + 'fname-small.jpg',
			nextAthleteName: 'fname lname'
		};

		// Products to feature
		customApp
		.articleNumbers = ["M49798","M45045","B86917","AA1140","B82905","AC5710","AC4185","AA1082","AI0495","AB4185","AB6029","Z81853"];

	},

	loadContentfName : function(mainLocation, photoLocation) {

		// large Photo Size 800 X 610
		// Thumbnail Photo Size 150 X 150
		customApp
		.largeImageSlider = [
			{
				largeImage: photoLocation + '2015_CFREGIONALS_Atlantic_Men_Event1_Web_2.jpg',
				thumbnailImage: photoLocation + '2015_CFREGIONALS_Atlantic_Men_Event1_Web_2-small.jpg',
				altTitle: 'fName name',
				videoLink: '',
				videoTitle:''
			},{
				largeImage: photoLocation + 'fName-new-video.jpg',
				thumbnailImage: photoLocation + 'fName-new-video-small.jpg',
				altTitle: 'fName name',
				videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Uu7ZqjIzfvQ" frameborder="0" allowfullscreen></iframe>',
				videoTitle:'Before the Games'
			},
			{
				largeImage: photoLocation + '2015_CFREGIONALS_Atlantic_Men_Event1_Web_9.jpg',
				thumbnailImage: photoLocation +  '2015_CFREGIONALS_Atlantic_Men_Event1_Web_9-small.jpg',
				altTitle: 'fName name',
				videoLink: '',
				videoTitle:''
			},
			{
				largeImage: photoLocation +  '2015_CFREGIONALS_Atlantic_Registration_20150514_007.jpg',
				thumbnailImage: photoLocation +  '2015_CFREGIONALS_Atlantic_Registration_20150514_007-small.jpg',
				altTitle: 'fName name',
				videoLink: '',
				videoTitle:''
			},
			{
				largeImage: photoLocation +  'RCF15_Atlantic_DAY2_Men_Event3_Web_004.jpg',
				thumbnailImage: photoLocation +  'RCF15_Atlantic_DAY2_Men_Event3_Web_004-small.jpg',
				altTitle: 'fName name',
				videoLink: '',
				videoTitle:''
			},
			{
				largeImage: photoLocation +  'RCF15_Atlantic_DAY3_Men_Event6_Web_002.jpg',
				thumbnailImage: photoLocation +  'RCF15_Atlantic_DAY3_Men_Event6_Web_002-small.jpg',
				altTitle: 'fName name',
				videoLink: '',
				videoTitle:''
			},
			{
				largeImage: photoLocation +  'crossfit-games-screengrab.jpg',
				thumbnailImage: photoLocation +  'crossfit-games-screengrab-small.jpg',
				altTitle: 'fName name',
				videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/DsXKQlaF_28" frameborder="0" allowfullscreen></iframe>',
				videoTitle:'Story in the Atlantic'
			}
		];//end largeImageSlider array

		customApp
		.sliderQuestions = [
			{
				question: 'What’s your favorite color?',
				answer: 'Green'
			},
			{
				question: 'Who is your favorite Athlete?',
				answer: 'Jason Khalipa'
			},
			{
				question: 'What’s your favorite Meal?',
				answer: 'Sweet potato and a big ole burger'
			},
			{
				question: 'What’s your favorite Movie?',
				answer: 'Warrior'
			},
			{
				question: 'Favorite place you have visited?',
				answer: 'Dominican republic'
			},
			{
				question: 'Vanilla or chocolate?',
				answer: 'Chocolate'
			},
			{
				question: 'Cats or Dogs?',
				answer: 'Dogs'
			},
			{
				question: 'Beach or Mountains?',
				answer: 'Beach'
			},
			{
				question: 'What’s your biggest pet peve?',
				answer: 'Someone touching my nose!'
			},
			{
				question: '3 things you would want to have on a deserted island?',
				answer: 'Barbell, my girlfriend Joanne and my dog Max'
			},
			{
				question: 'What’s your biggest guilty pleasure?',
				answer: 'Eating ice cream every night'
			},
			{
				question: 'What’s your favorite sport?',
				answer: 'CrossFit'
			},
			{
				question: 'What’s something most people don’t know about you?',
				answer: 'I never go to sleep before midnight'
			},
			{
				question: 'What’s your favorite activity outside of the box?',
				answer: 'Going to doggy beach with Max'
			},
			{
				question: 'What did you want to be when you were growing up?',
				answer: 'Don’t remember'
			},
			{
				question: 'If you could have one superhuman power, what would it be?',
				answer: 'Super speed, flash speed'
			},
			{
				question: 'If you won the lottery, what’s the first thing you would buy?',
				answer: 'Huge house'
			},
			{
				question: 'If you were an animal what would you be?',
				answer: 'Max is my spirit animal, dog'
			},
			{
				question: 'What’s the last book you have read?',
				answer: 'The champions mind'
			},
			{
				question: 'What do you hate doing?',
				answer: 'Warming up'
			},
			{
				question: 'What’s one thing you can’t live with out?',
				answer: 'Fitness'
			}

		];//end quotes array

		customApp
		.sliderInstagramPhotos = [
			{
				photo: photoLocation +  '925607_350518158491079_629861331_n.jpg',
				link: 'https://instagram.com/nname',
				altTitle :'fName\'s Instagram',
				videoLink: '',
				videoTitle:''
			},{
				photo: photoLocation +  '10946545_1564199197190251_928839734_n.jpg',
				link: 'https://instagram.com/nname',
				altTitle :'fName\'s Instagram',
				videoLink: '',
				videoTitle:''
			},{
				photo: photoLocation +  '11084845_839993456054256_617573915_n.jpg',
				altTitle :'fName\'s Instagram',
				link: 'https://instagram.com/nname',
				videoLink: '', //<iframe width="560" height="315" src="https://www.youtube.com/embed/wIYdqXNpoTA" frameborder="0" allowfullscreen></iframe>
				videoTitle:'' //fName\'s Ring Workout
			},{
				photo: photoLocation +  '11282172_106830132986488_1029421040_n.jpg',
				link: 'https://instagram.com/nname',
				altTitle :'fName\'s Instagram',
				videoLink: '',
				videoTitle:''
			},{
				photo: photoLocation +  '11326314_706571372781203_49500339_n.jpg',
				link: 'https://instagram.com/nname',
				altTitle :'fName\'s Instagram',
				videoLink: '',
				videoTitle:''
			},{
				photo: photoLocation +  '11355740_735532619891677_149944773_n.jpg',
				altTitle :'fName\'s Instagram',
				link: 'https://instagram.com/nname',
				videoLink: '', //<iframe width="560" height="315" src="https://www.youtube.com/embed/wIYdqXNpoTA" frameborder="0" allowfullscreen></iframe>
				videoTitle:'' //fName\'s Ring Workout
			},{
				photo: photoLocation +  'instagram-screenshot-1.jpg',
				altTitle :'fName\'s Instagram',
				link: 'https://instagram.com/nname',
				videoLink: '', //<iframe width="560" height="315" src="https://www.youtube.com/embed/wIYdqXNpoTA" frameborder="0" allowfullscreen></iframe>
				videoTitle:'' //fName\'s Ring Workout
			}

			//**Add the video link if you want the play button icon to appear over the photo

		];//end customApp
		.sliderInstagramPhotos

		customApp
		.statsCarouselInfo = [
			{
				icon: photoLocation +  'icon-clock.png',
				title: 'Workouts',
				stats: [
					{
						stat:'Fran:',
						amount:'2:12'
					},{
						stat:'Grace:',
						amount:'1:46'
					},{
						stat:'Filthy 50:',
						amount:'19:05'
					},{
						stat:'Fight Gone Bad:',
						amount:'421'
					},{
						stat:'Sprint 400m:',
						amount:'0:59'
					}
				]
			},{
				icon: photoLocation +  'icon-weight.png',
				title: 'Max Weight',
				stats: [
					{
						stat:'Clean & Jerk:',
						amount:'345 lb'
					},{
						stat:'Snatch:',
						amount:'280 lb'
					},{
						stat:'Deadlift:',
						amount:'490 lb'
					},{
						stat:'Back Squat:',
						amount:'425 lb'
					}
				]
			},{
				icon: photoLocation +  'icon-reps.png',
				title: 'Max Reps',
				stats: [
					{
						stat:'Max Pullups:',
						amount:'72'
					}
				]
			}
		]; // end customApp
		.statsCarouselInfo

		customApp
		.nameAndStats = {
			nameFirst: 'fName',
			nameLast:'name',
			tagLine: 'CrossFit Games athlete @Peak360CrossFit. Masters in Strength & Cond. from UM.',
			/**IMPORTANT  ALWAYS USE A \ IN FRONT OF ANY QUOTES THAT APPEAR ON THE PAGE  ex height: 5\'9\" **/
			/** Also add the <sup></sup> tag for any register symbols**/
			titleStats: 'Age: 24 | Height: 5\'7\" | Weight: 188 lbs | Affiliate: Peak 360 Crossfit<sup>&reg;</sup>',
			twitterLink: 'https://twitter.com/fNamelbaz',
			instagramLink: 'https://instagram.com/fNamelbaz/?hl=en'
		};

		customApp
		.prevAndNextLinks = {
			prevAthleteLink: '/fname_lname',
			prevAthletePhoto: photoLocation + 'fname-small.jpg',
			prevAthleteName: 'fname lname',
			nextAthleteLink: '/fName_lName',
			nextAthletePhoto: photoLocation + 'sample-1.jpg',
			nextAthleteName:'fName lName',
		};


		// Products to feature
		customApp
		.articleNumbers = ["V65893","AA1105","AB0648","B84642","AA1081","AA1203","AB4907","AK0104","B84642","M45044","AO0523","AB4900"];

	},

	loadContentfname : function(mainLocation, photoLocation) {

		// large Photo Size 800 X 610
		// Thumbnail Photo Size 150 X 150
		customApp
		.largeImageSlider = [
			{
				largeImage: photoLocation + 'RCF15_Pacific_DAY-1_Women_Event1_017.jpg',
				thumbnailImage: photoLocation + 'RCF15_Pacific_DAY-1_Women_Event1_017-small.jpg',
				altTitle: 'fname lname',
				videoLink: '',
				videoTitle:''
			},
			{
				largeImage: photoLocation + 'RCF15_Pacific_DAY-1_Women_Event2_029.jpg',
				thumbnailImage: photoLocation + 'RCF15_Pacific_DAY-1_Women_Event2_029-small.jpg',
				altTitle: 'fname lname',
				videoLink: '',
				videoTitle:''
			},
			{
				largeImage: photoLocation + 'fname-day2.jpg',
				thumbnailImage: photoLocation + 'fname-day2-small.jpg',
				altTitle: 'fname lname',
				videoLink: '',
				videoTitle:''
			},
			{
				largeImage: photoLocation + 'RCF15_Pacific_DAY-2_Women_Event5_2180.jpg',
				thumbnailImage: photoLocation + 'RCF15_Pacific_DAY-2_Women_Event5_2180-small.jpg',
				altTitle: 'fname lname',
				videoLink: '',
				videoTitle:''
			},
			{
				largeImage: photoLocation + 'RCF15_Pacific_DAY-3_General_Awards_2149.jpg',
				thumbnailImage: photoLocation + 'RCF15_Pacific_DAY-3_General_Awards_2149-small.jpg',
				altTitle: 'fname lname',
				videoLink: '',
				videoTitle:''
			},
			{
				largeImage: photoLocation + 'RCF15_Pacific_DAY-3_Women_Event6_1479.jpg',
				thumbnailImage: photoLocation + 'RCF15_Pacific_DAY-3_Women_Event6_1479-small.jpg',
				altTitle: 'fname lname',
				videoLink: '',
				videoTitle:''
			},
			{
				largeImage: photoLocation + 'RCF15_Pacific_DAY-3_Women_Event7_2041.jpg',
				thumbnailImage: photoLocation + 'RCF15_Pacific_DAY-3_Women_Event7_2041-small.jpg',
				altTitle: 'fname lname',
				videoLink: '',
				videoTitle:''
			},
			{
				largeImage: photoLocation + 'thumbnail-1.jpg',
				thumbnailImage: photoLocation + 'thumbnail-1-small.jpg',
				altTitle: 'fname lname',
				videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/3MdH4TCWU1w" frameborder="0" allowfullscreen></iframe>',
				videoTitle:'Story in the Pacific'
			},
			{
				largeImage: photoLocation + 'thumbnail-2.jpg',
				thumbnailImage: photoLocation + 'thumbnail-2-small.jpg',
				altTitle: 'fname lname',
				videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/-2g3BjUYUMk" frameborder="0" allowfullscreen></iframe>',
				videoTitle:'Catching Up With fname lname'
			},
			{
				largeImage: photoLocation + 'thumbnail-3.jpg',
				thumbnailImage: photoLocation + 'thumbnail-3-small.jpg',
				altTitle: 'fname lname',
				videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Uo0AnaTp1xc" frameborder="0" allowfullscreen></iframe>',
				videoTitle:'fname lname does 15.5 at CrossFit Roar'
			},
			{
				largeImage: photoLocation + 'thumbnail-4.jpg',
				thumbnailImage: photoLocation + 'thumbnail-4-small.jpg',
				altTitle: 'fname lname',
				videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/kYO7btGmjKA" frameborder="0" allowfullscreen></iframe>',
				videoTitle:'fname lname 15.3 (624 reps)'
			},
			{
				largeImage: photoLocation + 'thumbnail-5.jpg',
				thumbnailImage: photoLocation + 'thumbnail-5-small.jpg',
				altTitle: 'fname lname',
				videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/jkr-PDoC1Fk" frameborder="0" allowfullscreen></iframe>',
				videoTitle:'Snatch / Clean and Jerk'
			},
			{
				largeImage: photoLocation + 'thumbnail-6.jpg',
				thumbnailImage: photoLocation + 'thumbnail-6-small.jpg',
				altTitle: 'fname lname',
				videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/RtCN424a01c" frameborder="0" allowfullscreen></iframe>',
				videoTitle:'fname lname 15.1'
			}
		];//end largeImageSlider array

		customApp
		.sliderQuestions = [
			{
				question: 'What’s your favorite color?',
				answer: 'Mostly neutrals but I like navy blue too'
			},
			{
				question: 'Who is your favorite Athlete?',
				answer: 'Favourite athlete is still Mikko Salo. Not sure if that fits the criteria but I love his no bullshit approach to life and his work ethic.'
			},
			{
				question: 'What’s your favorite Meal?',
				answer: 'Favourite meal is anything that consists of slow cooked meat. My papa Mauricio used to always cook every meat you can imagine slow. I will ALWAYS pick it on a menu over anything else to this day.'
			},
			{
				question: 'What’s your favorite Movie?',
				answer: 'Stepbrothers. I can’t resist that inappropriate and ridiculous humour.'
			},
			{
				question: 'Favorite place you have visited?',
				answer: 'Queenstown New Zealand. It is absolutely stunning and full of outdoor adventure activities'
			},
			{
				question: 'Vanilla or chocolate?',
				answer: 'Chocolate'
			},
			{
				question: 'Cats or Dogs?',
				answer: 'Dogs'
			},
			{
				question: 'Beach or Mountains?',
				answer: 'Mountains'
			},
			{
				question: 'What’s your biggest pet peve?',
				answer: 'Negative Nancy’s. People who turn any situation into a negative'
			},
			{
				question: '3 things you would want to have on a deserted island?',
				answer: 'My family, my dog, some music'
			},
			{
				question: 'What’s your biggest guilty pleasure?',
				answer: 'I dream of eating cake without cutting it. Just me, a whole cake, in my Pj’s, and a fork. My husband and I have done it maybe twice. '
			},
			{
				question: 'What’s your favorite sport?',
				answer: 'I don’t have one. I have never been one to pick favourites. I hate cricket though haha.'
			},
			{
				question: 'What’s something most people don’t know about you?',
				answer: 'I can wiggle my ears'
			},
			{
				question: 'What’s your favorite activity outside of the box?',
				answer: 'I would happily spend my life renovating homes and decorating them. I am what I call a "nester".'
			},
			{
				question: 'What did you want to be when you were growing up?',
				answer: 'According to all of my school books, a race car driver.'
			},
			{
				question: 'If you could have one superhuman power, what would it be?',
				answer: 'To change people’s thoughts and put them in a good head space. I think the world really needs some better, happy people.'
			},
			{
				question: 'If you won the lottery, what’s the first thing you would buy?',
				answer: 'My dream is to buy a huge block of land that could fit houses on it for myself and my husband, my mum, my grandparents, and anyone in my family who wants to join in. It would be big enough that we would all have our own space, in the country, but everyone would be together.'
			},
			{
				question: 'If you were an animal what would you be?',
				answer: 'A goat. They seem like they are having so much fun all the time and hang outside in the sunshine all day.'
			},
			{
				question: 'What’s the last book you have read?',
				answer: '"That Sugar Book"'
			},
			{
				question: 'What do you hate doing?',
				answer: 'Running in extreme weather conditions - super cold or super hot. They both suck.'
			},
			{
				question: 'What’s one thing you can’t live with out?',
				answer: 'My loved ones'
			}

		];//end quotes array

		customApp
		.sliderInstagramPhotos = [
			{
				photo: photoLocation + '11092983_437661433074824_241324060_n.jpg',
				link: 'https://instagram.com/fnamelname1/',
				altTitle :'fname\'s Instagram',
				videoLink: '',
				videoTitle:''
			},
			{
				photo: photoLocation + '11116792_1569479249996816_1744518400_n.jpg',
				link: 'https://instagram.com/fnamelname1/',
				altTitle :'fname\'s Instagram',
				videoLink: '',
				videoTitle:''
			},
			{
				photo: photoLocation + '11190844_1381289772169523_556543023_n.jpg',
				link: 'https://instagram.com/fnamelname1/',
				altTitle :'fname\'s Instagram',
				videoLink: '',
				videoTitle:''
			},
			{
				photo: photoLocation + '11203377_1646974578858688_875351753_n.jpg',
				link: 'https://instagram.com/fnamelname1/',
				altTitle :'fname\'s Instagram',
				videoLink: '',
				videoTitle:''
			},
			{
				photo: photoLocation + '11267070_1643189739228516_1524950810_n.jpg',
				link: 'https://instagram.com/fnamelname1/',
				altTitle :'fname\'s Instagram',
				videoLink: '',
				videoTitle:''
			},
			{
				photo: photoLocation + '11275187_250747935119691_2040472835_n.jpg',
				link: 'https://instagram.com/fnamelname1/',
				altTitle :'fname\'s Instagram',
				videoLink: '',
				videoTitle:''
			},
			{
				photo: photoLocation + '11311181_993011670724199_1306822656_n.jpg',
				link: 'https://instagram.com/fnamelname1/',
				altTitle :'fname\'s Instagram',
				videoLink: '',
				videoTitle:''
			},
			{
				photo: photoLocation + '11312015_475706112585538_136286902_n.jpg',
				link: 'https://instagram.com/fnamelname1/',
				altTitle :'fname\'s Instagram',
				videoLink: '',
				videoTitle:''
			},
			{
				photo: photoLocation + '11355173_659739814156996_1417048234_n.jpg',
				link: 'https://instagram.com/fnamelname1/',
				altTitle :'fname\'s Instagram',
				videoLink: '',
				videoTitle:''
			},
			{
				photo: photoLocation + '11355862_1450446351938972_1636616367_n.jpg',
				link: 'https://instagram.com/fnamelname1/',
				altTitle :'fname\'s Instagram',
				videoLink: '',
				videoTitle:''
			},
			{
				photo: photoLocation + '11377947_663500607114481_469386325_n.jpg',
				link: 'https://instagram.com/fnamelname1/',
				altTitle :'fname\'s Instagram',
				videoLink: '',
				videoTitle:''
			}

			//**Add the video link if you want the play button icon to appear over the photo

		];//end customApp
		.sliderInstagramPhotos

		customApp
		.statsCarouselInfo = [
			{
				icon: photoLocation + 'icon-clock.png',
				title: 'Workouts',
				stats: [
					{
						stat:'Fran:',
						amount:'2:33'
					},{
						stat:'Run 5k:',
						amount:'20:10'
					}
				]
			},{
				icon: photoLocation + 'icon-weight.png',
				title: 'Max Weight',
				stats: [
					{
						stat:'Clean & Jerk:',
						amount:'253 lb'
					},{
						stat:'Snatch:',
						amount:'205 lb'
					},{
						stat:'Deadlift:',
						amount:'341 lb'
					},{
						stat:'Back Squat:',
						amount:'330 lb'
					}
				]
			},{
				icon: photoLocation + 'icon-reps.png',
				title: 'Max Reps',
				stats: [
					{
						stat:'Max Pullups:',
						amount:'62'
					}
				]
			}
		]; // end customApp
		.statsCarouselInfo

		customApp
		.nameAndStats = {
			nameFirst: 'fname',
			nameLast:'lname',
			tagLine: '3 x CrossFit Games athlete',
			/**IMPORTANT  ALWAYS USE A \ IN FRONT OF ANY QUOTES THAT APPEAR ON THE PAGE  ex height: 5\'9\" **/
			/** Also add the <sup></sup> tag for any register symbols**/
			titleStats: 'Age: 25 | Height: 5\'3\" | Weight: 154 lbs | Affiliate: Crossfit<sup>&reg;</sup> Roar',
			twitterLink: 'https://twitter.com/fnamelname01',
			instagramLink: 'http://ink361.com/app/users/ig-174307446/fnamelname1/photos'
		};

		customApp
		.prevAndNextLinks = {
			prevAthleteLink: '/fName_lName',
			prevAthletePhoto: photoLocation + 'fName-leblanc-bazinet.jpg',
			prevAthleteName: 'fName Leblanch-Bazinet',
			nextAthleteLink:  '/fName_name',
			nextAthletePhoto: photoLocation + 'fName-small.jpg',
			nextAthleteName: 'fName name'
		};

		// Products to feature
		customApp
		.articleNumbers = ["V65896","M45047","AB4191","AI0504","B86881","AB4207","AA1109","AC4186","B89554","AC6058","Z81854","AB4142"];

	},

	dynamicAddContent : function(){

		// Load the athlete depending on the matching URL
		for (var i=0; i<customApp
			.athleteUrls.length; i++) {

			// See if this URL matches one of our athletes
			if (window.location.href.indexOf(customApp
				.athleteUrls[i].url) != -1) {

				var functionName = customApp
			.athleteUrls[i].loadAthleteFunction;
				var loadAthlete = customApp
				[functionName];

				// Do we have data for this athlete in a function?
				if(typeof loadAthlete === 'function') {

					//get the css loction of the file for demandware
					var cssLocation = $('#js-athletes-location').attr('href');

					mainLocation = cssLocation.substr(0,cssLocation.indexOf('/css/'));
					mainLocation += "/";
					photoLocation =  mainLocation + '/img/';

					// Load the athlete's data
					loadAthlete(mainLocation, photoLocation);

					break;
				}
			}
		}


		// Move the data into the HTML

		//append the name and titles

		$fullName = $('#athletes .js-fullName').html(customApp
			.nameAndStats.nameFirst + ' ' + customApp
		.nameAndStats.nameLast);
		$fullName = $('#athletes .js-firstName').html(customApp
			.nameAndStats.nameFirst);
		$titleStats = $('#athletes .js-titleStats').html(customApp
			.nameAndStats.titleStats);
		$tagLine = $('#athletes .js-tagLine').html(customApp
			.nameAndStats.tagLine);
		$twitter = $('#athletes .js-twitterLink').attr('href', customApp
			.nameAndStats.twitterLink);
		$instagram = $('#athletes .js-instagramLink').attr('href', customApp
			.nameAndStats.instagramLink);

		//append the next and Prev Links

		$prevAthleteLink = $('#athletes .js-prevAthleteLink');
		$prevAthleteName = $('#athletes .js-prevAthleteName');
		$prevAthletePhoto = $('#athletes .js-prevAthletePhoto');

		$nextAthleteLink = $('#athletes .js-nextAthleteLink');
		$nextAthleteName = $('#athletes .js-nextAthleteName');
		$nextAthletePhoto = $('#athletes .js-nextAthletePhoto');

		$prevAthleteLink.attr('href', customApp
			.prevAndNextLinks.prevAthleteLink);
		$prevAthleteName.html(customApp
			.prevAndNextLinks.prevAthleteName);
		$prevAthletePhoto.attr('src', customApp
			.prevAndNextLinks.prevAthletePhoto).attr('alt' , customApp
		.prevAndNextLinks.prevAthleteName);;

		$nextAthleteLink.attr('href', customApp
			.prevAndNextLinks.nextAthleteLink);
		$nextAthleteName.html(customApp
			.prevAndNextLinks.nextAthleteName);
		$nextAthletePhoto.attr('src', customApp
			.prevAndNextLinks.nextAthletePhoto).attr('alt' , customApp
		.prevAndNextLinks.nextAthleteName);


		//append the stats to the carousel
		$statCarousel = $('#athletes .js-statsCarousel');

		for(var i=0; i< customApp
			.statsCarouselInfo.length; i++){
			var statList = '<div><ul><li><div class="icon"><img src="' +customApp
		.statsCarouselInfo[i].icon + '"/></div><h3>'+ customApp
			.statsCarouselInfo[i].title +'</h3></li>';

			for(var x = 0; x < customApp
				.statsCarouselInfo[i].stats.length; x++){
				statList += '<li>'+ customApp
			.statsCarouselInfo[i].stats[x].stat +'<span>'+ customApp
				.statsCarouselInfo[i].stats[x].amount + '</span></li>';
			}

			statList +="</ul></div>";
			$statCarousel.append(statList);
		}


		//append the images to the thumbnail carousel
		$thumbnailCarousel = $('#athletes .js-athleteThumbnailGallery');
		$largeImageContainer = $('#athletes .js-athletelargeGalleryContainer');
		var imageClass = "photo",
			activeClass = false;


		//set the video class if it is a video
		if(customApp
			.largeImageSlider[0].videoLink !== ''){
			imageClass = 'video';
			$largeImageContainer.addClass('video');
		}

		//append the first large image to the slider
		$largeImageContainer.append('<img class="'+ imageClass + '" src="'+customApp
			.largeImageSlider[0].largeImage +'" alt"'+ customApp
		.largeImageSlider[0].altTitle +'" />');

		for(var i=0; i< customApp
			.largeImageSlider.length; i++){

			//append the video link and the video class or just the straight photo
			if(customApp
				.largeImageSlider[i].videoLink !== ''){
				$thumbnailCarousel.append('<div class="video" data-youtube=\''+ customApp
					.largeImageSlider[i].videoLink + '\' data-youtubeTitle="' + customApp
				.largeImageSlider[i].videoTitle +'" data-large-image="'+customApp
				.largeImageSlider[i].largeImage +'" class="js-imageadd"><div class="slider-img-wrapper"><div class="play-button small"><span></span></div><img src="'+customApp
				.largeImageSlider[i].thumbnailImage+'" alt="'+ customApp
				.largeImageSlider[i].altTitle +'"></div></div>');
			}else{
				$thumbnailCarousel.append('<div class="photo" data-youtube=\''+ customApp
					.largeImageSlider[i].videoLink + '\' data-youtubeTitle="' + customApp
				.largeImageSlider[i].videoTitle +'" data-large-image="'+customApp
				.largeImageSlider[i].largeImage +'" class="js-imageadd"><div class="slider-img-wrapper"><img src="'+customApp
				.largeImageSlider[i].thumbnailImage+'" alt="'+ customApp
				.largeImageSlider[i].altTitle +'"></div></div>');
			}
		}//end for large Image Slider

		$thumbnailCarousel.find('.slider-img-wrapper').eq(0).addClass('active first');
		//append the question and answers to the slider
		$QACarousel = $('#athletes .js-athleteQACarousel');

		//shuffle the array so the questions are random
		function shuffleArray(o) {
			for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
			return o;
		};

		customApp
		.sliderQuestions = shuffleArray(customApp
			.sliderQuestions);

		for(var i=0; i < customApp
			.sliderQuestions.length ; i++){
			$QACarousel.append('<div><p class="qa-q">'+ customApp
				.sliderQuestions[i].question +'</p><p class="qa-a">'+ customApp
			.sliderQuestions[i].answer +'</p></div>');
		}

		//append the Instagram Section
		$instagramCarousel = $('#athletes .js-athleteInstagramCarousel');
		var imageClass, youtubeTitle, youtubeLink;

		for(var i=0; i< customApp
			.sliderInstagramPhotos.length; i++){
			imageClass = 'photo';
			youtubeTitle = customApp
			.sliderInstagramPhotos[i].videoTitle;
			youtubeLink = customApp
			.sliderInstagramPhotos[i].videoLink;

			//add slashes to title.
			youtubeTitle = (youtubeTitle + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');

			//adding the video class if it exists
			if(customApp
				.sliderInstagramPhotos[i].videoLink !== ''){
				imageClass = 'video';
			}
			$instagramCarousel.append('<div class='+ imageClass +' data-youtube=\''+ youtubeLink +'\' data-youtubetitle=\''+ youtubeTitle +'\'><a href="'+ customApp
				.sliderInstagramPhotos[i].link +'" target="blank"><img src="'+ customApp
			.sliderInstagramPhotos[i].photo +'" ></a></div>');
		}

	},
	slickCarousel : function(outerCarouselContainer,numberSlidesToShow,numberSlidesToScroll, dots){
		var thisLink;
		$carouselDiv = $(outerCarouselContainer);

		$carouselDiv.slick({
			slidesToShow: numberSlidesToShow,
			slidesToScroll: numberSlidesToScroll,
			dots: dots
		});
	},
	slickCarouselLinkClicks : function(){
		$carouselLinks = $('#athletes .js-athleteGalleryLinks div');
		$carouselDiv = $('#athletes .js-athleteThumbnailGallery');
		$largeImageContainer = $('#athletes .js-athletelargeGalleryContainer');
		$largeImage = $('#athletes .js-athletelargeGalleryContainer img');

		$carouselLinks.on('click', function(){

			//remove the video class
			$largeImageContainer.removeClass('video');

			$this = $(this);
			//get the data attribute
			thisLink = $this.data('link');

			//show all the slides
			$carouselDiv.slick('slickUnfilter');

			$carouselLinks.removeClass('active');
			$this.addClass('active');

			//filter depending on the data link
			if(thisLink !== "all-media"){
				thisLink = "."+thisLink;
				$carouselDiv.slick('slickFilter', thisLink);
			}

			//add the active Class to the slider Item

			$carouselDiv.find('.slider-img-wrapper').removeClass('active');

			//some sort of glitch with the unfilter so you must use the .first class to call the first item
			if(thisLink !== "all-media"){
				$firstItem = $carouselDiv.find('.slider-img-wrapper').eq(0);
			}else{
				$firstItem = $carouselDiv.find('.slider-img-wrapper.first');
			}

			$firstItem.addClass('active');

			//swap the image and add the video info if it is a video
			var largeImagePath = $firstItem.parent().data('large-image');
			$largeImage.attr('src', largeImagePath);

			if($firstItem.parent().hasClass('video')){
				$largeImageContainer.addClass('video');
				videoEmbedLink = $firstItem.parent().attr('data-youtube');
				videoTitle = $firstItem.parent().attr('data-youtubetitle');
				$largeImage.removeClass('photo video');
				$largeImage.attr('data-youtube', videoEmbedLink);
				$largeImage.attr('data-youtubetitle', videoTitle);

			}

			$firstItem.click();

		});
	},
	largeImageCarouselPhotoSwitch : function(){
		var largeImgPath, videoEmbedLink, videoTitle;
		$largeImageContainer = $('#athletes .js-athletelargeGalleryContainer')
		$largeImage = $('#athletes .js-athletelargeGalleryContainer img');
		$thumbnail = $('#athletes .slider-img-wrapper');

		//swap the image on the gallery when clicked on the thumbnail
		$thumbnail.on('click', function(){

			$thumbnail.removeClass('active');
			$this = $(this);
			$this.addClass('active');
			largeImagePath = $this.parent().data('large-image');
			$largeImage.attr('src', largeImagePath);
			//if it's a video add the embed code and videoPopUpLink class
			if($this.parent().hasClass('video')){
				videoEmbedLink = $this.parent().attr('data-youtube');
				videoTitle = $this.parent().attr('data-youtubetitle');
				$largeImage.removeClass('photo video');
				$largeImage.attr('data-youtube', videoEmbedLink);
				$largeImage.addClass('videoPopUpLink').attr('data-youtubetitle', videoTitle);
				$largeImageContainer.addClass('video');
			}else{
				//remove any attr
				$largeImage.removeAttr('data-youtube data-video-link').removeClass('videoPopUpLink');
				$largeImageContainer.removeClass('video');
			}

		});
	},
	videoPopUp : function(){
		$('body').on('click', '#athletes #large-gallery-container',function(){
			$("body").addClass("videoPopupActive");

			$this = $(this);
			if($this.hasClass('video')){

				// Get the video link / Title
				var videoEmbedLink = $this.attr('data-youtube');
				var videoTitle = $this.attr('data-youtubetitle');

				//If it isn't on the direct object, it'll be in a child element
				videoEmbedLink = videoEmbedLink || $this.find('img').attr('data-youtube');
				videoTitle = videoTitle || $this.find('img').attr('data-youtubetitle');

				if($('#videoPopUpContainer').length === 0){
					$(document.body).append('<div id="videoPopUpContainer"><div class="top-section">' + videoTitle + '</div><div class="bottom-section"><div class="close-button">close</div>'+videoEmbedLink+'</div></div');
				}

				if(videoTitle === undefined){
				 videoTitle = null;
				}

				$videoContainer = $('#videoPopUpContainer');
				// $videoContainer.html(videoEmbedLink);

				$videoContainer.dialog({
					title: videoTitle,
					dialogClass: 'athletes-video',
					bgiframe: true,
					autoOpen: true,
					modal: true,
					height: "auto",
					width: "auto",
					close: function(){
						$videoContainer.remove();
					}
				});

			}

			return false;
		});
	},
	mobileStatsCarousel : function(){

		//get the current window width
		var windowWidth = $(window).width();

		if(!$('body').hasClass('mobile')){
			$('#athletes .athlete-stats').addClass('carousel');
			$('#athletes .athlete-stats .carousel-inner').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				responsive: [
					{
					  breakpoint: 1300,
					  settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true,
					  }
					},
					{
					  breakpoint: 640,
					  settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: true,
					  }
					}
				]
			});
		}else{
			$('#athletes .athlete-stats').addClass('carousel');
			this.slickCarousel('#athletes .athlete-stats .carousel-inner', 3,1);
		}
	},
	statsSectionSize : function(){
		$statDiv = $('#athletes .athlete-stats .carousel-inner > div');
		var statLength = $statDiv.length;
		if(statLength > 3){
			$statDiv.addClass('longerLength');
			//add in a clear div to ensure the columns will float correctly
			$statDiv.eq(1).after('<div class="clear test"></div>');
		}
	},
	emailPopUp : function(){

		//move the code to the container div so it will cover the header z-index
		$popUpForm = $('#emailAthletePageForm');

		$('#athletes .send-message .athlete-button').on('click', function(){
			$popUpForm.prependTo('#container');
			$popUpForm.dialog({
					dialogClass: 'emailAthleteDialog',
					bgiframe: true,
					autoOpen: true,
					modal: true,
					height: "auto",
					width: "auto",
					close: function(){
						$popUpForm.remove();
					}
				});
		});

		//submit form and close model
		// $('body').on('click','#athleteFormSubmitButton' , function(){
		// 		$popUpForm.dialog('close');
		// });
		//close the model from custom close button
		$('body').on('click','.close-button' , function(){
				$popUpForm.dialog('close');
				$('#videoPopUpContainer').dialog('close');
		});

	},
	formselectBoxes : function(){
		//select boxes
		$('.custom-select-container select').on('change', function(){
			var $this = $(this);
			var value = $this.find("option:selected").text();

			var defaultValue = $this.find('.defaultValue').text();

			if(value !== ''){
				$this.next('span').html(value).css('color', '#000');
			}else{
				$this.next('span').removeAttr('style').html(defaultValue);
			}

		});
	},
	formValidation : function(){

		//form validation
		$formId = $('#emailAthletePageForm #form');
		var $submitId = $('#emailAthletePageForm #athleteFormSubmitButton');
		var $emailId = $('#emailAthletePageForm #athleteFormEmail');

			$submitId.on('click', function(){
				$('#emailAthletePageForm .input-error-text').hide();
				var email = $emailId.val();

				//validate email
				function validateEmail($email) {
					var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
					if( !emailReg.test( $email ) ) {
						return false;
					} else {
						return true;
					}
				}

				if( email === '' || !validateEmail(email) ){

					$('#emailAthletePageForm .input-error-text.email-error').show();

					$emailId.focus();
					return false;
				}

				//validate birthday
				var month = $('#athletes-form-month').val();
				var day = $('#athletes-form-day').val();
				var year = $('#athletes-form-year').val();

				if(month === '' || day === '' || year === ''){
					$('#emailAthletePageForm .input-error-text.age-error-empty').show();
					return false;
				}

				//check if they are over 18
				function getAge(dateString)
				{
					var today = new Date();
					var birthDate = new Date(dateString);
					var age = today.getFullYear() - birthDate.getFullYear();
					var m = today.getMonth() - birthDate.getMonth();
					if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
					{
						age--;
					}
					return age;
				}

				var yourbirthday = new Date(year,month,day);

				if (getAge(yourbirthday) < 18 ) {

					$('#emailAthletePageForm .input-error-text.age-error').show();
					return false;
				}

				var message = $('#athleteFormTextarea').val();
				if(message === ""){
					$('#emailAthletePageForm .input-error-text.message-error').show();
					return false;
				}


				email = encodeURI(email);

				// var url = "http://fitness.reebok.com/api/QuickRegistration/Newslettersignup?emailPageId=7466&year="+year+"&month="+month+"&day="+day+"&email="+email+"&firstname=noname&noname=test&gender=M&newsletters=&scvsourceid=2067&newsletterparentid=12&newsletterserviceid=200003&addressspecified=false&contestoptin=&amf=true";
				var url = 'http://ebm.cheetahmail.com/r/regf2?';;

				// To do: make sure month is 2 digit
				var urlString = 'BIRTH_MONTH='+ month +'&BIRTH_DAY='+ day + '&BIRTH_YEAR=' + year + '&email=' + email + '&n=3&aid=2096881079&fsub=2097223807&CUSTOM_1=YES';

				// Submit form via AJAX
				$.ajax({
					type: 'POST',
					url: url,
					data: urlString,
					crossDomain: true,

					success: function(result) {
						// $formId.remove(); // Remove form from document
						$('#emailAthletePageForm #formHideSection').hide();
						$('#emailAthletePageForm #thankyou').fadeIn(200);

					},
					error: function(xhr, ajaxOptions, thrownError) {
						// $formId.remove(); // Remove form from document
						$('#emailAthletePageForm #formHideSection').hide();
						$('#emailAthletePageForm #thankyou').fadeIn(200);
						setTimeout(function(){
							$('#emailAthletePageForm #thankyou').hide();
							$('#emailAthletePageForm #formHideSection').show();
							$('#emailAthletePageForm').dialog('close');


						}, 2000);
					}

				});



			}); //end submit function
	},
	ie8StyleFix : function(){
		//check if ie 8
		if (!jQuery.support.leadingWhitespace){
		//adding last class for ie8
		$('body').addClass('ie8');
		}
	},
	productGenerator: function(elementId){
		//will want to add a product spinner
		var queryString = '?articleNumbers=';

		for (var i=0; i<customApp
			.articleNumbers.length; i++) {
			queryString += customApp
		.articleNumbers[i] + '|';
		}
		queryString += '&imagesize=medium&showaddtocart=false'; // Set to true if we ever figure out hockeycard bindings
			try {
			$.ajax({
				url : '//' + window.location.host + '/on/demandware.store/Sites-Reebok-CF-Site/en_CY/Product-GetTiles' + queryString,
				dataType : 'html',
				success : function(data) {
					$data = $('<div class="instagram-product-container">' + data + '</div>');
					$data = $(data);
					$data.addClass('athelete-product-container');

					// Re-size the images
					$data.find('.image img').each(function() {
						var imgsrc = $(this).data('original');
						var srcArray = imgsrc.split('?');
						// Optional: set width to 640 for retina mobile devices
						imgsrc = srcArray[0] + '?sw=320&amp;sfrm=jpg';
						$(this).attr('src', imgsrc);
						$(this).data('original', imgsrc);
						$(this).removeAttr('width');
						$(this).removeAttr('height');
					});

					// Wrap all hockey cards
					$data.find('.hockeycard').wrap('<div class="gear-wrapper"></div>');
					$data.find('.gear-wrapper').eq(0).clone().appendTo('#product-gallery-container .full-product');

					$data.appendTo('#product-gallery-container .thumb-container');

				},
				error: function(xhr, status, error) {
					var err = eval("(" + xhr.responseText + ")");
				}
			});
		} catch (err) {
		}
	},
	productGearSwitch : function(){

		$('body').on('click', '#athletes .thumb-container .gear-wrapper', function(event){
			event.preventDefault();
			$this = $(this);
			$('#athletes .full-product .gear-wrapper').remove();
			$this.clone().appendTo('#athletes .full-product');
			return false;

			alert('aclicked');

		});

	},
	isSlickSliderLoaded : function(){

		if (!jQuery.fn.slick) {
			setTimeout(customApp
				.isSlickSliderLoaded, 200);
			return;
		}

		//Image Thumbnail Carousel
		customApp
		.slickCarousel('#athletes .sliding-div-container', 5, 2, false);

		//Q & A Carousel
		customApp
		.slickCarousel('#athletes .js-athleteQACarousel', 1,1, false);

		//Instagram Carousel
		customApp
		.slickCarousel('#athletes .js-athleteInstagramCarousel', 3,1, false);

		//run the stats carousel funciton if body is mobile
		customApp
		.mobileStatsCarousel();

		//making the click links work on the top of the image slider
		customApp
		.slickCarouselLinkClicks();

	}
};


$(document).ready(function(){

	//add the dynamic content
	customApp
	.dynamicAddContent();

	//The large image Carousel Swap
	customApp
	.largeImageCarouselPhotoSwitch();

	//add the video PopUp
	customApp
	.videoPopUp();

	//emailForm
	customApp
	.emailPopUp();

	//ie8fixes
	customApp
	.ie8StyleFix();

	//generate the hockey cards
	customApp
	.productGenerator('product-gallery-container');

	//form submit, onchange custom select, and validation
	customApp
	.formselectBoxes();

	//form Validation
	customApp
	.formValidation();

	//swap the products on click
	customApp
	.productGearSwitch();

	//Make sure the slick slider is loaded before running the slider functions
	/* ***** IMPORTANT **** The slider calls and options are all within this function */

	customApp
	.isSlickSliderLoaded();
});
