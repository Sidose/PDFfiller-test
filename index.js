var params = {
  lines: [{
    "background": '#f00',
    "elements": [
      {
        "background": '#00f',
        "updateTime": 5000,
        "width": 25
      },
      {
        "background": '#f00',
        "updateTime": 3000,
        "width": 25
      },
      {
        "background": '#00f',
        "updateTime": 2000,
        "width": 25
      },
      {
        "background": '#00f',
        "updateTime": 2000,
        "width": 25
      }
    ]
  },
  {
    "background": '#f00',
    "elements": [
      {
        "background": '#00f',
        "updateTime": 5000,
        "width": 25
      },
      {
        "background": '#f00',
        "updateTime": 3000,
        "width": 50
      },
      {
        "background": '#00f',
        "updateTime": 2000,
        "width": 25
      }
    ]
  },
  {
    "background": '#f00',
    "elements": [
      {
        "background": '#00f',
        "updateTime": 5000,
        "width": 25
      },
      {
        "background": '#f00',
        "updateTime": 3000,
        "width": 25
      },
      {
        "background": '#00f',
        "updateTime": 2000,
        "width": 25
      },
      {
        "background": '#00f',
        "updateTime": 2000,
        "width": 25
      }
    ]
  },
  {
    "background": '#f00',
    "elements": [
      {
        "background": '#00f',
        "updateTime": 5000,
        "width": 50
      },
      {
        "background": '#f00',
        "updateTime": 3000,
        "width": 50
      }
    ]
  },
  {
    "background": '#f00',
    "elements": [
      {
        "background": '#00f',
        "updateTime": 5000,
        "width": 25
      },
      {
        "background": '#f00',
        "updateTime": 3000,
        "width": 50
      },
      {
        "background": '#00f',
        "updateTime": 2000,
        "width": 25
      }
    ]
  }
]
};

function getRandomColor() {
  var letterList = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letterList[Math.floor(Math.random() * 16)];
  }

  return color;
}

function renderLines(params) {
  var changeBackgroundColor = function(element) {
    return function() {
      element.style.backgroundColor = getRandomColor();
    }
  };

  var lineList = params.lines;
  for(var i in lineList) {
    var div = document.createElement('div');
    div.style.background = lineList[i].background;
    div.style.height = 100/lineList.length+'%';
    div.style.width = '100%';

    for(var j in lineList[i].elements) {
      var divElement = document.createElement('div');
      divElement.style.display = 'inline-block';
      divElement.style.background = lineList[i].elements[j].background;
      divElement.style.height = '100%';
      divElement.style.width = lineList[i].elements[j].width+'%';

      setInterval(changeBackgroundColor(divElement),lineList[i].elements[j].updateTime);

      div.appendChild(divElement);
    }

    document.body.appendChild(div);
  }
}

renderLines(params);

