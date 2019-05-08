//unsorted sets
const Sets = (redis)=>{
redis.sadd('groceries:dairies','milk','chese','yogourt');
redis.sadd('groceries:seafood','salmon','calamari','lobster');
redis.sadd('groceries:fruits','apples','grapes','pears','orange');
redis.smembers('groceries:fruits',(err,result)=>{
    console.log(result,'smemberssssssssssssssss')
});
redis.spop('groceries:fruits');
redis.smembers('groceries:fruits',(err,result)=>{
    console.log(result,'smemberssssssssssssssssssssss2')
})
}
export default Sets