import Redis from 'ioredis';
import Strings from './strings';
import hashes from './hashes'
import Lists from './list'
import Sets from './sets'
import SortedSets from './sortedset'
// creating redis instance
const redis = new Redis();
Strings(redis);
hashes(redis);
Lists(redis);
Sets(redis)
SortedSets(redis)

