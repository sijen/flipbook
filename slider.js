var currentpageIndex = 0;
var elem = document.getElementsByClassName("pages");
var currentpage=1;
function _display()
{
    for(var k=0;k<elem.length;k++)
    {
        //hide all the slides
        elem[k].style.display="none";
        elem[k].style.transform="rotate(0deg)";
    }
    //display all the slides one by one
    elem[currentpageIndex].style.display="block";    
    // if currentpage is 
    if(currentpageIndex>0)
    {
        elem[currentpageIndex].style.transform="rotateY(-125deg)"; 
        elem[currentpageIndex-1].style.transform="rotateY(0deg)";
        elem[currentpageIndex-1].style.display="block";
        if(currentpageIndex==elem.length-1)
        {
            elem[currentpageIndex].style.transform="rotateY(0deg)";
            elem[currentpageIndex].style.display="block";
        }
    }
    // setTimeout(_right,3000);
}
function _right()
{
    currentpageIndex++;
    if(currentpageIndex>=elem.length)
    {
        currentpageIndex=0;
    }
    _display();
}
function _left()
{
    currentpageIndex--;
    if(currentpageIndex<0)
    {
        currentpageIndex=elem.length-1;
    }
    _display();
}
function _textdesign()
{
    var n = 0;
    var k = document.getElementById("content");
    switch(n){
        case 0 :
            {
                k.style.textShadow = "10px 0px 0px red";
                n=1;
                break;
            }
        case 1 :
            {
                k.style.textShadow = "10px 0px 0px blue";
                n=2;
                break;
            }
        case 2 :
            {
                k.style.textShadow = "10px 0px 0px green";
                n=3;
                break;
            }
        case 3 :
            {
                k.style.textShadow = "10px 0px 0px yellow";
                n=0;
                break;
            }
    }
}