var num = 0;
var elem = document.getElementsByClassName("sliderbox");
function _display()
{
    for(var k=0;k<elem.length;k++)
    {
        elem[k].style.visibility="hidden";
    }
    elem[num].style.visibility="visible";
    // setTimeout(_right,3000);
}
function _right()
{
    num++;
    if(num>=elem.length)
    {
        num=0;
    }
    elem[num].style.transform="rotateY(0deg)";
    // elem[num].style.transition = "transform 0.5s ease";
    _display();
}
function _left()
{
    num--;
    if(num<0)
    {
        num=elem.length-1;
    }
    elem[num].style.transform="rotateY(-180deg)";
    // elem[num].style.transition = "transform 0.5s ease";
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