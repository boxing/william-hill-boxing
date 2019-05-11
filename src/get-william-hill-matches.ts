import * as rp from 'request-promise';

import {Selection, WilliamHillBoxingMatch} from './william-hill.boxing-match.interface';
import {OddsObj, WilliamHillBoxingOddsInterface} from './william-hill-boxing-odds.interface';

export async function getWilliamHillMatches(): Promise<WilliamHillBoxingOddsInterface[]> {
    const url = 'http://sports.williamhill.com/bet/en-ca/betting/c/10/mh/Boxing.html';

    let williamhillBody;

    try {
        williamhillBody = await rp({
            method: 'POST',
            followAllRedirects: true,
            headers: {
                Cookie: 'cust_prefs=ca|ODDS|form|TYPE|PRICE|||1556432002-0|SB|0|0||0|ca|1|TIME|TIME|0|21|A|1||1|0||TYPE||-|0.00;',
            },
            formData: {
                action: 'GoSetPref',
                pref: 'matches',
                value: 'TYPE',
            },
            url,
        });
    } catch (e) {
        throw new Error('Something happened during the request to William Hill');
    }

    williamhillBody = williamhillBody
        .replace(/\t+/g, '')
        .replace(/\r?\n|\r/g, '')
        .replace(/\s{2,}/g, '');

    // terribly dangerous regex
    const matches: string[] = williamhillBody.match(/prebuilt_event\(\{([\"\w\:\s\-\_\{\}\,\/\\\.\%\[\]\|\‘\’\']+)/g);

    if (!matches) {
        throw new Error('Regex is not working properly');
    }

    return matches.map((item: string): WilliamHillBoxingOddsInterface => {
        item = item.replace('prebuilt_event(', '');
        const parsedWillHillObject: WilliamHillBoxingMatch = JSON.parse(item);
        const {name, start_time: startTime, secs_to_start_time: secondsToStart} = parsedWillHillObject;

        const odds: OddsObj = {
            firstBoxer: {
                name: null,
                odds: [],
            },
            secondBoxer: {
                name: null,
                odds: [],
            },
            draw: {
                name: null,
                odds: [],
            },
        };

        // first `selections` is draw, then first boxer, then second boxer
        parsedWillHillObject.selections.forEach((itemSelection: Selection) => {
            const obj = {
                name: itemSelection.name,
                odds: [parseInt(itemSelection.lp_num, 10), parseInt(itemSelection.lp_den, 10)],
            };

            if (itemSelection.name === 'Draw') {
                odds.draw = obj;
                return;
            }

            if (odds.firstBoxer.name === null) {
                odds.firstBoxer = obj;
                return;
            }

            if (odds.secondBoxer.name === null) {
                odds.secondBoxer = obj;
                return;
            }
        });

        const secondsToStartNumber = parseInt(secondsToStart, 10);

        return {
            name,
            odds,
            startTime,
            secondsToStart: secondsToStartNumber,
        };
    });

}
