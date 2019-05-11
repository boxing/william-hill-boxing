# WilliamHill Boxing
Returns upcoming boxing matches, the start time and odds

## How to use
```typescript
import {getWilliamHillMatches} from '@pugilism/william-hill-boxing';

// Outputs the array of results
(async () => {
    const results = await getWilliamHillMatches();
    console.log(results);
})();
```

## Note
Not affiliated with WilliamHill
