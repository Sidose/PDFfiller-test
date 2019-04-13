function getElementsRandomBackgroundWidth() 
{
  var widthList = [25,50];
  var elementList = [];
  var elementWidth = null;
  var widthTotal = 0;
  while(widthTotal < 100)
  {
    elementWidth = widthList[getRandomNumber(0,1)];
    if(widthTotal + elementWidth <=100)
    {
      var elementColor = getRandomColor();
      elementList.push({background: elementColor,width: elementWidth});
      widthTotal += elementWidth;
    }
  }
  
  return elementList;
}

function getRandomColor() 
{
  var letterList = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) 
  {
    color += letterList[Math.floor(Math.random() * 16)];
  }
  
  return color;
}

function getRandomNumber(min,max) 
{ 
  return Math.round((max-min)*Math.random()+min);
}

function getLineHeight()
{
  return window.innerHeight/getRandomNumber(10,100);
}

function getLineList()
{
  var elementCount = getRandomNumber(10,20);
  var lineList = [];
  for(var i = 0; i < elementCount; ++i)
  {
    var elementList = getElementsRandomBackgroundWidth();
    var lineColor = getRandomColor();
    var updateTime = getRandomNumber(1,5)*1000; 
    lineList.push({'background': lineColor,'updateTime': updateTime,'elements':elementList});
  }

  return lineList;
}

function renderLines()
{
  var changeBackgroundColor = function(element)  
  { 
    return function()
    {
      element.style.backgroundColor = getRandomColor();
    } 
  };

  var getUpdateTime = function(line)
  {
    return line.updateTime;
  };
  
  var lineList = getLineList();
  for(var i in lineList)
  {
    if(!lineList.hasOwnProperty(i))
      continue;

    var div = document.createElement('div');
    div.style.background = lineList[i].background;
    div.style.height = document.documentElement.clientHeight/lineList.length+'px';
    div.style.width = '100%';
  
    for(var j in lineList[i].elements)
    {
      if(!lineList[i].elements.hasOwnProperty(j))
        continue;

      var divElement = document.createElement('div');
      divElement.style.display = 'inline-block';
      divElement.style.background = lineList[i].elements[j].background;
      divElement.style.height = '100%';
      divElement.style.width = lineList[i].elements[j].width+'%';

      setInterval(changeBackgroundColor(divElement),getUpdateTime(lineList[i])); 
      
      div.appendChild(divElement);
    }
    
    document.body.appendChild(div);
  }
}

renderLines();
