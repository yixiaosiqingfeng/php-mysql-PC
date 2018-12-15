//设置cookie
function setCookie(cookieName,cookieValue,date,path){
    //包装数据
    var data={
        "val":cookieValue
    }
    //编码
    var str=decodeURIComponent(cookieName+"="+JSON.stringify(data));
    //过期时间
    if(date){
        var dt=new Date();
        dt.setDate(dt.getDate()+date);
        str +=";expires="+dt.toGMTString();

    }
    //path属性
    if(path){
        str +=";path="+path;

    }
    //设置cookie
    document.cookie=str;
}
//获取cookie
function getCookie(cookieName){
    var str=decodeURIComponent( document.cookie);
    var arr=str.split("; ");
    for(var i=0,len=arr.length;i<len;i++){
        var tmp=arr[i];
        var ind=tmp.indexOf("=")
        var _name=tmp.substring(0,ind);
        var _value=tmp.substring(ind+1);
        if(cookieName==_name){
            return JSON.parse(_value).val;
        }

    }
}