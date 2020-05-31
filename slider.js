var currentpageIndex = 0;
var elem = document.getElementsByClassName("pages");
var prevpageButton = document.getElementsByClassName("left");
function _display()
{
    for(var k=0;k<elem.length;k++)
    {
        //hide all the slides
        elem[k].style.display="none";
        elem[k].style.transform="rotate(0deg)";
    }
    //left button hidden if the page is no more to turn
    prevpageButton[0].style.zIndex="0";
    //display all the slides one by one
    elem[currentpageIndex].style.display="block";    
    // if currentpage is displayed and previous page is rotated 
    if(currentpageIndex>0)
    {
        prevpageButton[0].style.zIndex="1";
        elem[currentpageIndex].style.transform="rotateY(0deg)"; 
        elem[currentpageIndex-1].style.transform="rotateY(-125deg)";
        elem[currentpageIndex-1].style.display="block";
        if(currentpageIndex==elem.length-1)
        {
            elem[currentpageIndex].style.transform="rotateY(0deg)";
            elem[currentpageIndex].style.display="block";
        }
    }
    //setInterval(_right,10000);
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