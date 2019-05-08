const hashes = (redis)=>{
 //hashset   
 //object that we can set for a particular key value pair
redis.hmset('user:450','firstName','tesstt','lastName','Henri');
redis.hgetall('user:450',(err,result)=>{
    console.log(result);
})
redis.hmset('user:450','incrementor',1)
redis.hincrby('user:450','incrementor',500)
redis.hmget('user:450','incrementor',(err,res)=>{
    console.log(res)
})
}

export default hashes