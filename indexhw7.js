
	Frolenkov Kirill
	
	
		Первое задание
var obj=document.body.appendChild(
    document.createElement('p'))

obj.innerText='HW'

obj.onclick = function(event) {
    let img = document.body.appendChild(
        document.createElement('img')
    ).id='myimg'
    myimg.style.height = '100px'
  	myimg.style.weight = '100px'
    myimg.src = 	'https://cdn.shopify.com/s/files/1/0941/8552/products/Warhammer-40K---Ork-Waaagh-_Converted.jpg'
}

myimg.onmouseenter = function(event){
    myimg.style.transform = 'scale(2)'
}

myimg.onmouseleave = function(event){
    myimg.style.transform = 'scale(1)'
}

myimg.onclick = function(event) {
    myimg.parentNode.removeChild(myimg)
}

		Второе задание

var elems = ["main", "section", "article", "div", "button"]
var container = document.body
for ( var elem of elems ) {
    currentElem = container.appendChild(
        document.createElement(elem)
     )
     currentElem.style = `
         padding: 20px;
         dotted 1px yellow;
         background-color: #ff00ff50;

     `
	
container = currentElem
     currentElem.onmouseover  = function(event) {
         event.stopPropagation()
         event.target.style.backgroundColor = "#ffff0050"
		document.body.appendChild(
        	document.createElement('span')
      		).id='mytooltip'
    	mytooltip.style=`
      	weihgt:50px;
      	height:50px;
      	border:1px solid black;`
      	mytooltip.innerText = event.target.tagName
		
     }

     currentElem.onmouseout  = function(event) {
         event.stopPropagation()
         event.target.style.backgroundColor = "#ff00ff50"
		 mytooltip.parentNode.removeChild(mytooltip) 
     }

     currentElem.onclick = function(event) {
         event.stopPropagation()		 
         event.target.parentNode.removeChild( event.target )
     }
}


