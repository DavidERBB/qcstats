import { getHydraAccess } from './qc/hydra.js'
import { User } from './qc/user.js'
import { Match } from './qc/matches.js';

var hydraAccess;

async function test() {
    hydraAccess = await getHydraAccess('080210BBEF9892011800205A2A9001BD7819A1883B9F33899985F05ADE1BE6BA5BA977788F453C44E4BABF9DC341A67441D22C4F3E86ACE98E87212EB2C82938F6890D890B90F95DCBC0D37F1A7C753C4DEEA8BD0427A2B86B3C301AA486F2F074A2CB889A7FDF5B3E57DCB3812A56A984CC40080E3FA8E616A433B539C021CE1E308370BA12BBEF4913907551FB1F77699EF81B0B101E684079D44C86650D');
    let test = new User('DavidERB', hydraAccess);
    await test.getUserID();
    const MMRData = await test.getMMRData();
    console.log(MMRData.server_data.Matches.FantasyQuidditchBotsTemplate.OverallBaseMMR);
    //console.log(MMRData)
    const MatchData = await test.getCurrentMatch();
    console.log(MatchData);
    console.log(test.timeElapsed)
}

test();