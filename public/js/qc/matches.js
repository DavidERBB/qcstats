class Match {
    constructor(matchID, hydraAccess) {
        this.matchID = matchID
        this.hydraAccess = hydraAccess
    }
    async getMatch() {
    try {
        const response = await fetch("https://raven-api.wbagora.com/matches/" + this.matchID, {

            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'x-hydra-access-token': this.hydraAccess,
                'x-hydra-api-key': '066e79be26eb42558957c1e34daabe67'
            }
        })
        if (!response.ok) { // Check for HTTP errors
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json = await response.json();
        this.match = json;
        return json;
    } catch (e) {
        console.log(e);
    }
}
}

export {Match}