export const API_KEY ='AIzaSyBsUTAoUJ0iOCuHQoJFJX5sltB4EnK7JbM';

 export const Value_Gen =(value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}