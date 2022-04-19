//confirms bugs and logs them in the terminal
'strict'

//creating a variable for the key obtained from open weather map webisite
class Fetch {
    async getCurrent(input) {
        const myKey = "a7d2e2249e5c96fb03fbcbbd0ecbf0f0";

        //fetch command used to request data from URL using variable key above
        const response = await fetch(
            'https://api.openweathermap.org/data/2.5/weather?q${input}&appid=${myKey}'
        );

        const data = await response.json();

        console.log(data);

        return data;


    }
}