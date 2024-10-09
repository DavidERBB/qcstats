
async function getHydraAccess(steamAuth) {
    try {
        const response = await fetch("https://raven-api.wbagora.com/access", {
            headers: {
                "Content-Type": "application/json",
                'x-hydra-api-key': '066e79be26eb42558957c1e34daabe67'
            },
            method: "POST",
            body: JSON.stringify({
                auth: { fail_on_missing: true, steam: steamAuth },
                options: [
                    'configuration',
                    'achievements',
                    'account',
                    'profile',
                    'notifications',
                    'maintenance',
                    'wb_network',
                ],
            })
        })
        const json = await response.json();
        return (json.token);
    } catch (e) {
        console.error(e);
    }
}

export { getHydraAccess }