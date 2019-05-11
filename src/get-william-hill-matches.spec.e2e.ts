import {getWilliamHillMatches} from './get-william-hill-matches';
import {WilliamHillBoxingOddsInterface} from './william-hill-boxing-odds.interface';

describe('function getWilliamHillMatches', () => {

    let results: WilliamHillBoxingOddsInterface[] = [];

    beforeAll(async () => {
        results = await getWilliamHillMatches();
    });

    it('should return an array with names', () => {
        expect(results[0].name).not.toBeNull();
    });

    it('should have `firstBoxer` odds', () => {
        expect(results[0].odds.firstBoxer).toEqual({
            name: jasmine.any(String),
            odds: jasmine.any(Array),
        });
    });

    it('should have `draw` odds', () => {
        expect(results[0].odds.draw).toEqual({
            name: jasmine.any(String),
            odds: jasmine.any(Array),
        });
    });

    it('should have `secondBoxer` odds', () => {
        expect(results[0].odds.secondBoxer).toEqual({
            name: jasmine.any(String),
            odds: jasmine.any(Array),
        });
    });

    it('should have separate odds for each', () => {
        expect(results[0].odds.firstBoxer).not.toEqual(results[0].odds.secondBoxer);
    });

    it('should return the start time', () => {
        expect(results[0].startTime).toMatch(/\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}/);
    });

    it('should return the number of seconds until the time of the match', () => {
        expect(results[0].secondsToStart).toEqual(jasmine.any(Number));
    });

});
