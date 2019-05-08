const strings = (redis)=>{

    redis.set("name","ansh")
    redis.get("name",(err,name)=>{
        console.log(name)
    })
    //experies in 5 secound
    redis.set("test","doreer","EX",5);
    redis.set("gp",1);
    redis.incrby('gp',200)
    redis.get('gp',(err,result)=>{
        console.log(result)
    })
    redis.mset('asdcasd','csadca',"casdcasd",'casdc')
    redis.mget('name','test','gp',(err,result)=>{
        console.log(result)
    })
}
export default strings;