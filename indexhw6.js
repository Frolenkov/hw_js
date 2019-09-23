
	Frolenkov Kirill
	
	
		Первое задание
var tags=['div','nav','header','p',]


var classes=['div','nav','header','p']
for ( var tag of tags )
 {

        document.body.appendChild ( document.createElement (tag)
 )
       
        for ( var x in classes )
 	document.getElementsByTagName(x).className=[x]
 }


		Второе задание

var tags = [

        {
                
	name: "div",                
                
	style: "border: solid 3px #587; width: 100px; height: 100px; border-radius:50%;"
        
},       
        
{
       name: "h1",
 
       style: "font-family: monospace, Arial; color: #789; font-size: 20px;"

               
        },

        {

        name: "p",
        style: "font-family: monospace, Arial; color: #555; font-size: 16px;"

              
        },

        {

        name: "a",
        style: "font-family: monospace; color: #fa0; font-size: 14px;"
 
             
        }

	]


for ( var tag of tags ) {

        var elem = document.body.appendChild
 ( document.createElement(tag.name))

document.getElementsByTagName(tag.name).className=tag.style

     
}


	Третье задание

	
var tags = [ "header", "footer", "main", "div", "p" ]

for ( var x of tags ){

	document.getElementsByTagName(x)
	.background-color='red!important'

	} 




