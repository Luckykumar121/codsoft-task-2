function valuein(value)
{
    let inp=document.getElementById("inp");
    inp.value+=value;
}
function elmclear()
{
    const inp=document.getElementById("inp");
    inp.value=inp.value.slice(0,-1);
    
    
}
function allclear()
{
    let inp=document.getElementById("inp");
    inp.value="";

}
function calculate()
{
    let inp=document.getElementById("inp");
    try{
    inp.value=eval(inp.value);
    }
    catch{
        inp.value="error";

    }

}