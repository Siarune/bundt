const searchBox = document.getElementById("searchtxt");
const get = document.getElementById("phpaction");

//Command controller (paste-safe)
searchBox.addEventListener('keypress', (e) => {
	//Universals
	switch (e.code) {

		//Clears input field on search
		case 'Enter':
			setTimeout(() => { searchBox.value = "" }, 250);
			break;

		//Clears input field on \ for convenience
		case 'Backslash':
			setTimeout(() => { searchBox.value = "" }, 250);
			break;
	}

	//Only on modifier key (vim-like)
	if (searchBox.value.charAt(0) == ":") {
		switch (e.code) {

			//Switches provider to Google
			case 'KeyG':
				setTimeout(() => { searchBox.value = "" }, 500);
				setProvider('google');
				break;

			//Switches provider to DuckDuckgo
			case 'KeyD':
				setTimeout(() => { searchBox.value = "" }, 500);
				setProvider('duckduckgo');
				break;

			//Switches provider to Startpage
			case 'KeyS':
				setTimeout(() => { searchBox.value = "" }, 500);
				setProvider('startpage');
				break;

			// Switches provider to Wikipedia(not working yet)
			case 'KeyW':
				setTimeout(() => { searchBox.value = "" }, 500);
				setProvider('wikipedia');
				break;

			//Suppoed to change the layout, also not working
			// case 'bento':
			// 	CONFIG.bentoLayout = "bento";


		}
	}
});

//maybe add theme toggle command
//bookmark access
//layout change

const setProvider = (provider) => {
	switch (provider) {
		case 'google':
			searchBox.placeholder = "Search for anything on Google";
			get.action = "https://www.google.com/search";
			localStorage.setItem("defaultProvider", "google");
			break;

		case 'duckduckgo':
			searchBox.placeholder = "Search for anything on DuckDuckgo";
			get.action = "https://www.duckduckgo.com/";
			localStorage.setItem("defaultProvider", "duckduckgo");
			break;

		case 'startpage':
			searchBox.placeholder = "Search for anything on Startpage";
			get.action = "https://www.startpage.com/sp/search";
			localStorage.setItem("defaultProvider", "startpage");
			break;

		// case 'wikipedia':
		// 	searchBox.placeholder = "Search for anything on Wikipedia";
		// 	get.action = "https://www.wikipedia.org/wiki";
		// localStorage.setItem("defaultProvider", "wikipedia");
			// break;
	}

}

setProvider(localStorage.getItem("defaultProvider"));
