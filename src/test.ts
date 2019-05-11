import {getWilliamHillMatches} from './get-william-hill-matches';
import {WilliamHillBoxingOddsInterface} from './william-hill-boxing-odds.interface';

// Outputs the array of results
(async () => {
    const results: WilliamHillBoxingOddsInterface[] = await getWilliamHillMatches();
    // tslint:disable
    for (const result of results) {
        console.log(result.name);
        console.log(result.odds.firstBoxer);
        console.log(result.odds.secondBoxer);
    }
})();
