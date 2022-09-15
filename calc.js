alert("welcome to the pratham's calculator");
var buttons=document.getElementsByClassName("button");
var prev=document.getElementById("prev");
var current=document.getElementById("current");
var operand1=0,operand2=null,operator=null;
for(var i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener("click",solve);
}
function solve()
{
    var text=current.innerText.trim();
    var value=this.getAttribute('data-value');
    if(value=='plus')
    {
        operator='+';
        operand1=parseFloat(text);
        prev.innerText=text+"+";
        current.innerText="";
    }else if(value=='divide')
    {
        operator='/';
        operand1=parseFloat(text);
        prev.innerText=text+'/';
        current.innerText="";
    }else if(value=='minus')
    {
        operator='-';
        operand1=parseFloat(text); 
        prev.innerText=text+'-';
        current.innerText="";
    }else if(value=='multiply')
    {
        operator='*';
        operand1=parseFloat(text);
        prev.innerText=text+'*';
        current.innerText="";
    }else if(value=='AC')
    {
        current.textContent="";
        prev.textContent="";
    }else if(value=='DEL')
    {
        current.innerText=text.toString().slice(0,-1);
    }
    else if(value=='dot')
    {
        if(text.includes('.')==false)
        {
            current.textContent=text+'.';
        }
    }else if(value=='equal')
    {
        operand2=parseFloat(text);
        var result=eval(operand1+' '+operator+' '+operand2);
        if(result)
        {
            current.innerText=result;
            operand1=result;
            prev.innerText=result;
            operator=null;
            operand2=null;
        }
    }else {
        current.innerText+=value;
    }   
}
var num=['0','1','2','3','4','5','6','7','8','9'];
var events=['/','+','-','*','Enter','.','Delete']
document.addEventListener("keydown",(e)=>{
    if(num.includes(e.key))current.innerText+=e.key;
    else if(events.includes(e.key))
    {
        var text=current.innerText.trim();
        if(e.key=='+')
        {
            operator='+';
            operand1=parseFloat(text);
            prev.innerText=text+'+';
            current.innerText="";
        }else if(e.key=='/')
        {
            operator='/';
            operand1=parseFloat(text);
            prev.innerText=text+'/';
            current.innerText="";
        }else if(e.key=='-')
        {
            operator='-';
            operand1=parseFloat(text); 
            prev.innerText=text+'-';
            current.innerText="";
        }else if(e.key=='*')
        {
            operator='*';
            operand1=parseFloat(text);
            prev.innerText=text+'*';
            current.innerText="";
        }else if(e.key=='Delete')
        {
            current.innerText=text.toString().slice(0,-1);
        }
        else if(e.key=='.')
        {
            if(text.includes('.')==false)
            {
                current.textContent=text+'.';
            }
        }else if(e.key=='Enter')
        {
            operand2=parseFloat(text);
            var result=eval(operand1+' '+operator+' '+operand2);
            if(result)
            {
                current.innerText=result;
                operand1=result;
                prev.innerText=result;
                operator=null;
                operand2=null;
            }
        }
    }
});
document.onkeydown=function(e){
    if(e.key=='Enter' && e.ctrlKey)
    {
        current.innerText="";
        prev.innerText="";
        operand1=0;
        operator=null;
        operand2=null;
    }
}