function yell(msg) {
    try{
        console.log(msg.toUpperCase());
    } catch (e){
        console.log("pls type in string");
    }
}