const searchBox = document.getElementById("searchtxt");
const get = document.getElementById("phpaction");

searchBox.addEventListener('keypress', (e) => {
    // if (e.code == "Enter") {
    //     setTimeout(() => {searchBox.value=""}, 1000);
    // }

    switch (e.code) {
        case 'Enter':
            setTimeout(() => {searchBox.value=""}, 250);
            break;
        case 'Backslash':
            setTimeout(() => {searchBox.value=""}, 250);
            break;
    }
});


//commands
//currently only to switch search engine, but will likely add other stuff like changing the layout
searchBox.addEventListener('keydown', (e) => {
        switch (e.key) {
            case '`g':
                setTimeout(() => {searchBox.value=""}, 500);
                searchBox.placeholder = "Search for anything on Google";
                get.action = "https://www.google.com/";
                break;

            case '`d':
                setTimeout(() => {searchBox.value=""}, 500);
                searchBox.placeholder = "Search for anything on DuckDuckgo";
                get.action = "https://www.duckduckgo.com/";
                break;

            // case '`w':
            //     setTimeout(() => {searchBox.value=""}, 500);
            //     searchBox.placeholder = "Search for anything on Wikipedia";
            //     get.action = "https://www.wikipedia.org/wiki";
            //     searchBox.name = "";
            //     break;

            case '`s':
                setTimeout(() => {searchBox.value=""}, 500);
                searchBox.placeholder = "Search for anything on Startpage";
                get.action = "https://www.startpage.com/sp/search";
                break;

            case '`l':
                setTimeout(() => {searchBox.value=""}, 500);

                case 'bento':
                    CONFIG.bentoLayout = "bento";
                    
                
        }
});