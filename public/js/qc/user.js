

class User{

    constructor(username, hydraAccess) {
        this.username = username;
        this.hydraAccess = hydraAccess;
    }

    async getUserID() {
    try {
        const response = await fetch('https://raven-api.wbagora.com/profiles/search_queries/pc-search/run?limit=20&name=' + this.username + '&account_fields=identity.username&account_fields=identity.alternate.wb_network&account_fields=identity.alternate.steam&account_fields=identity.alternate.epic&account_fields=presence&account_fields=presence_state&partial_response=1', {
            headers: {
                "Content-Type": "application/json",
                'x-hydra-access-token': this.hydraAccess,
                'x-hydra-api-key': '066e79be26eb42558957c1e34daabe67'
            }
        })
        const json = await response.json();
        var uid = json.results[0].result.account_id;
        this.id = uid;
        return (this.id);
    } catch (e) {
        console.log(e);
    }
}
    async getMMRData() {
    try {
        const response = await fetch("https://raven-api.wbagora.com/profiles/" + this.id, {
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
        return json;
    } catch (e) {
        console.error(e);
    }
}
    async getCurrentMatch() {
        try {
            const response = await fetch("https://raven-api.wbagora.com/matches/all/" + this.id + "?page=1&states=open&templates=FantasyQuidditchBotsTemplate&templates=FantasyQuidditchBotsTemplate-Team&fields=data&fields=server_data&partial_response=1", {

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

            this.currentPlayers = json.matches[0]['players.current'];
            this.matchID = json.matches[0].id
            
            var time = new Date();
        
            var startTime = json.matches[0].game_server_instance.created_at
            var currentTime = time.getHours() - 2 + ":" + time.getMinutes() + ":" + time.getSeconds()
            const st1 = startTime.slice(11)
            const st2 = st1.split("+")
            var st3 = st2[0].split(":");
            var ct3 = currentTime.split(":");
            var stseconds = (parseInt(st3[0], 10) * 60 * 60) + (parseInt(st3[1], 10) * 60) + parseInt(st3[2], 10)
            var ctseconds = (parseInt(ct3[0], 10) * 60 * 60) + (parseInt(ct3[1], 10) * 60) + parseInt(ct3[2], 10)
            this.timeElapsed = ctseconds - stseconds

            return json;
        } catch(e) {
            console.log(e);
        }
    }

    async getAllMatches(pageNumber) {
        try {
            const response = await fetch("https://raven-api.wbagora.com/matches/all/" + this.id + "?page=" + pageNumber, {

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
            return json;
        } catch (e) {
            console.log(e);
        }
    }

}

export {User}