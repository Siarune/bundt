// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Aidan',
	openInNewTab: false,
	twelveHourFormat: false,
	title: 'New Tab',

	//Theme
	theme: 'sweetpop',
	imageBackground: false,
	imageUrl: './assets/background.jpg',

	//use {name} to substitute for your name
	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good Afternoon!',
	greetingEvening: 'Good evening!',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'lists', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'd7e6152d9006fc67552789107e7efaf8', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White', 'Moe'
	weatherUnit: 'F', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '34.596720',
	defaultLongitude: '-83.762880',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// Autochange automatically based on location (sunrise/sunset). Openweathermap API key required.
	changeThemeByLocation: false,

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.google.com/mail/u/0/#inbox',
		},
		{
			id: '3',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '4',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://youtube.com/',
		},
		{
			id: '5',
			name: 'Crunchyroll',
			icon: 'japanese-yen',
			link: 'https://crunchyroll.com/',
		},
		{
			id: '6',
			name: 'Messages',
			icon: 'message-square',
			link: 'https://messages.google.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com/',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'youtube',
			id: '1',
			links: [
				{
					name: 'Youtube',
					link: 'https://www.youtube.com/',
				},
				{
					name: 'Crunchyroll',
					link: 'https://beta.crunchyroll.com/',
				},
				{
					name: 'Kaasi',
					link: 'https://kaa.si/',
				},
				{
					name: 'Messages',
					link: 'https://messages.google.com/web/',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'Sourcehut',
					link: 'https://sr.ht/',
				},
				{
					name: 'Github',
					link: 'https://github.com/',
				},
				{
					name: 'Vercel',
					link: 'https://vercel.com/dashboard/',
				},
				{
					name: 'Supabase',
					link: 'https://app.supabase.com/',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'inbox',
			id: '1',
			links: [
				{
					name: 'Gmail',
					link: 'https://mail.google.com/',
				},
				{
					name: 'Calendar',
					link: 'https://calendar.google.com/',
				},
				{
					name: 'Ig',
					link: 'https://www.instagram.com/direct/',
				},
				{
					name: 'Wikipedia',
					link: 'https://www.widipedia.org/',
				},
			],
		},
		{
			icon: 'apple',
			id: '2',
			links: [
				{
					name: 'Google Classroom',
					link: 'https://classroom.google.com/h',
				},
				{
					name: 'AP Classroom',
					link: 'https://apstudents.collegeboard.org/',
				},
				{
					name: 'Quizlet',
					link: 'https://quizlet.com/',
				},
				{
					name: 'Millerwelds',
					link: 'https://www.millerwelds.com/resources/welding-guides/presentations-and-quizzes',
				},
			],
		},
	],
};
