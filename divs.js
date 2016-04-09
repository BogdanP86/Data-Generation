function addTitle(){
	var titles = ["Changelist", "Owner", "Time Started", "Build", "Unit Test", "Functional Test", "Status"];
	var content = document.getElementById("content");
	var aDiv = document.createElement("div");
	aDiv.className = "titleDiv";
	content.appendChild(aDiv);
	for(var j=0;j<7;j++){
			var title = document.createElement("div");
			aDiv.appendChild(title);
			title.className="itemTitle";
			title.innerHTML = titles[j];
		}
}	

//create divs and add data from the JSON file

function addDivsToPage(divs,myData){
	
	for (var i=0; i<myData.data.length;i++){
		//add divs for each row of data
		var content = document.getElementById("content");
		var div = document.createElement("div");
		div.setAttribute("id","item"+i);

		// add an onclick trigger

		div.setAttribute("onclick","expandOnClick("+div.id+","+i+");");

		content.appendChild(div);
		divs[i]=div.id;

		//add sub-divs for each piece of data in a row

		for(var j=0; j<myData.data[i].length; j++){
			var itemDiv = document.createElement("div");
			
			div.appendChild(itemDiv);

			// set the width of the div containing the svg
			itemDiv.setAttribute("class","itemDiv"+j);
			

			// add data to each div 
			itemDiv.innerHTML = myData.data[i][j];
			// add the SVG background drawing
			if (j == 3){
				itemDiv.innerHTML="";
				itemDiv.style.width = "510px";
				var keepSVG = createSVG(itemDiv);
				
				// add colored SVG draing based on status

				if (myData.data[i][4] == "Pending"){
					Pending(itemDiv);				
				}
				if (myData.data[i][4] == "Running"){
					Running(itemDiv);
				}
			    if (myData.data[i][4] == "Failed"){
					Failed(itemDiv);
				} 
				if (myData.data[i][4] == "Passed"){
					Passed(itemDiv);
				}
			}
			//change color of text according to status

			if (j == 4){
				if (myData.data[i][4] == "Pending"){
					itemDiv.style.color = "#F0A43A";
					itemDiv.style.fontWeight = "bold";	
				}
				if (myData.data[i][4] == "Running"){
					itemDiv.style.color = "#1765EB";
					itemDiv.style.fontWeight = "bold";	
				}
			    if (myData.data[i][4] == "Failed"){
					itemDiv.style.color = "#F21361";
					itemDiv.style.fontWeight = "bold";	
				} 
				if (myData.data[i][4] == "Passed"){
					itemDiv.style.color = "#35CCA6";
					itemDiv.style.fontWeight = "bold";	
				}
					
			}
		}
		// add a color for the left border of each div
		
		var color = myData.data[i][3];
		div.style.borderLeftColor = color;
		div.style.borderLeftWidth = "10px";
		div.style.borderLeftStyle = "solid";

	}
}

// expand divs on click

function expandOnClick(divID,i){

	// append the transition class to the div
		divID.className = "divTransition";
		divID.style.height = "180px";
		// set the grey right border for clicked div
		var longDiv = document.getElementsByClassName("itemDiv3");
		longDiv[i].style.borderRight = "1px solid #c3c3c3";
		
		// test if div exists
		
		var isDiv = document.getElementById("newDiv"+i);
		if (!isDiv){
			createSecondDiv(divID,i);
		}
		//close other divs

		for (var k=0;k<myData.data.length;k++){
			if (divID.id !== divs[k]){
				var otherDiv = document.getElementById(divs[k]);
				otherDiv.style.height = "70px";	
				longDiv[k].style.borderRight = "none";	
				otherDiv.style.webkitTransition = "all .5s";
				otherDiv.style.MozTransition = "all .5s";	
			}
		}
}

//create the second div that appears when clicked

function createSecondDiv(divID,i){
	var newDiv = document.createElement("div");
	// set style for each created div
	newDiv.setAttribute("id","newDiv"+i);
	newDiv.style.height = "110px";
	newDiv.style.position = "absolute";
	newDiv.style.left = "0";
	newDiv.style.top = "70px";
	newDiv.style.width = "99%";

	divID.appendChild(newDiv);

	
	
	// divide created din into 2 parts and add style

	var partDiv1 = document.createElement("div");
	var partDiv2 = document.createElement("div");
	partDiv1.className = "partDiv1";
	partDiv1.style.position = "relative";
	partDiv1.style.display = "inline-block";
	partDiv1.style.width = "40%";


	partDiv2.className = "partDiv2";
	partDiv2.style.position = "relative";
	partDiv2.style.display = "inline-block";
	partDiv2.style.width = "40%";

	//append the divs

	newDiv.appendChild(partDiv1);
	newDiv.appendChild(partDiv2);
	

	// create the 1st SVG

	addSecSVG(i,partDiv1);
	addOtherSecDiv(i,partDiv2);
}

// transform angle to radian

function angleTrans(cx,cy,radius,angleD){
	var angleRad = angleD*Math.PI/180;
	var pos = {	x : cx + radius * Math.cos(angleRad),
				y : cy + radius * Math.sin(angleRad)};
	return pos;
}