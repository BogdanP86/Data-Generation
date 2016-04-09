//create the background SVG drawing - the gray one

function createSVG(item){
	var svgNS = "http://www.w3.org/2000/svg";

	//create SVG element

	var creSVG = document.createElementNS(svgNS,"svg");
	creSVG.setAttribute("id","mySvg");

	// create circle

	var desen = createCircle(svgNS,50,30,"#e6e6e6",20);

	//create line between circles

	var bara = createLine(svgNS,45,30,250,30,"#e6e6e6",15);

	// create 2nd circle
	var desen2 = createCircle(svgNS,260,30,"#e6e6e6",20);

	// 2nd line

	var bara2 = createLine(svgNS,270,30,450,30,"#e6e6e6",15);

	// last circle

	var desen3 = createCircle(svgNS,460,30,"#e6e6e6",20);

	// add created SVG elements to the div

	creSVG.appendChild(desen);
	creSVG.appendChild(bara);
	creSVG.appendChild(desen2);
	creSVG.appendChild(bara2);
	creSVG.appendChild(desen3);

	//append items to te div

	item.appendChild(creSVG);

	return creSVG;
}

function createCircle(svgNS,x,y,color, radius){
	var circle = document.createElementNS(svgNS,"circle");

	circle.setAttributeNS(null,"id","desen");
	circle.setAttributeNS(null,"cx",x);
	circle.setAttributeNS(null,"cy",y);
	circle.setAttributeNS(null,"r",radius);
	circle.setAttributeNS(null,"stroke","none");
	circle.setAttributeNS(null,"fill",color);

	return circle;
}

function createLine(svgNS,x1,y1,x2,y2,color, width){
	var line = document.createElementNS(svgNS,"line");

	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2); 
	line.setAttribute("stroke", color);
	line.setAttribute("stroke-width", width);

	return line;
}

//add SVG for items with "Pending" status

function Pending(item){
	var svgNS = "http://www.w3.org/2000/svg";

	var theSVG = document.createElementNS(svgNS,"svg");
	theSVG.setAttribute("id","theSVG");

	//create SVG element

	var desenP = createCircle(svgNS,50,30,"#F0A43A",15);
	
	//append items to te div
	theSVG.appendChild(desenP);

	item.appendChild(theSVG);
}

// add SVG for items with "Running" status

function Running(item){
	var svgNS4 = "http://www.w3.org/2000/svg";

	var theSVG2 = document.createElementNS(svgNS4,"svg");
	theSVG2.setAttribute("id","theSVG2");

	//create SVG element

	var desenP = createCircle(svgNS4,50,30,"#1765EB",15);
	var linie = createLine(svgNS4,50,30,180,30,"#1765EB",7);
	
	
	//append items to te div
	theSVG2.appendChild(desenP);
	theSVG2.appendChild(linie);

	item.appendChild(theSVG2);
}

//add SVG for items with "Failed" status

function Failed(item){
	var svgNS2 = "http://www.w3.org/2000/svg";

	var theSVG3 = document.createElementNS(svgNS2,"svg");
	theSVG3.setAttribute("id","theSVG3");

	//create SVG element

	var desenP = createCircle(svgNS2,50,30,"#F21361",15);
		
	//append items to te div
	theSVG3.appendChild(desenP);

	item.appendChild(theSVG3);
}

//add SVG for items with "Passed" status

function Passed(item){
	var svgNS3 = "http://www.w3.org/2000/svg";

	//create SVG element

	var theSVG4 = document.createElementNS(svgNS3,"svg");
	theSVG4.setAttribute("id","theSVG4");

	// create circle

	var desen = createCircle(svgNS3,50,30,"#35CCA6",15);

	//create line between circles

	var bara = createLine(svgNS3,55,30,280,30,"#35CCA6",7);

	// create 2nd circle
	var desen2 = createCircle(svgNS3,260,30,"#35CCA6",15);

	// 2nd line

	var bara2 = createLine(svgNS3,280,30,450,30,"#35CCA6",7);

	// last circle

	var desen3 = createCircle(svgNS3,460,30,"#35CCA6",15);

	// add created SVG elements to the div

	theSVG4.appendChild(desen);
	theSVG4.appendChild(bara);
	theSVG4.appendChild(desen2);
	theSVG4.appendChild(bara2);
	theSVG4.appendChild(desen3);

	//append items to te div

	item.appendChild(theSVG4);
}

//add the svg drawing created with data from JSON file

function addSecSVG(i,partDiv){
	var genSVG = "http://www.w3.org/2000/svg";

	var aSVG = document.createElementNS(genSVG,"svg");
	aSVG.setAttribute("id","innerSVGText");
	aSVG.setAttribute("height","110px");
	aSVG.setAttribute("width","80%");

	// create 1st block of text

	var text1 = createText(genSVG,20,50,15,"black","Unit Test");
	var text2 = createText(genSVG,25,80,25,"#35CCA6",myData.test_data[i][0]+"%");

	aSVG.appendChild(text1);
	aSVG.appendChild(text2);

	//create second block of text

	var rectG = createSmallRect(genSVG,240,40,"#35CCA6");
	var rectO = createSmallRect(genSVG,240,60,"#F0A43A");
	var textTime = createText(genSVG,220,100,15,"black",myData.data[i][2]);
	var data1 = createText(genSVG,255,50,15,"#35CCA6",myData.test_data[i][0]);
	var data2 = createText(genSVG,255,70,15,"#F0A43A",myData.test_data[i][1]);

	aSVG.appendChild(rectG);
	aSVG.appendChild(rectO);
	aSVG.appendChild(textTime);
	aSVG.appendChild(data1);
	aSVG.appendChild(data2);

	// create the pie chart 
	var prc = myData.test_data[i][0];
	var pie1 = createPie(genSVG,prc);
	var pie2 = createCircle(genSVG,150,60,"#35CCA6",35);

	
	aSVG.appendChild(pie2);
	aSVG.appendChild(pie1);


	partDiv.appendChild(aSVG);
}

// create the other second Div

function addOtherSecDiv(i,partDiv){
	var genSVG = "http://www.w3.org/2000/svg";

	var bSVG = document.createElementNS(genSVG,"svg");
	bSVG.setAttribute("id","otherInnerSVG");
	bSVG.setAttribute("height","110px");
	bSVG.setAttribute("width","80%");

	var Stext = createText(genSVG,0,50,15,"black","Functional Test");
	var Stext2 = createText(genSVG,25,80,25,"#35CCA6",myData.test_data[i][4]+"%");

	bSVG.appendChild(Stext);
	bSVG.appendChild(Stext2);

	var rectG = createSmallRect(genSVG,240,40,"#35CCA6");
	var rectO = createSmallRect(genSVG,240,60,"#F0A43A");
	var textTime = createText(genSVG,220,100,15,"black",myData.data[i][2]);
	var data1 = createText(genSVG,255,50,15,"#35CCA6",myData.test_data[i][2]);
	var data2 = createText(genSVG,255,70,15,"#F0A43A",myData.test_data[i][3]);

	bSVG.appendChild(rectG);
	bSVG.appendChild(rectO);
	bSVG.appendChild(textTime);
	bSVG.appendChild(data1);
	bSVG.appendChild(data2);

	var prc = myData.test_data[i][4];
	var pie1 = createPie2(genSVG,prc);
	var pie2 = createCircle(genSVG,150,60,"#35CCA6",35);

	bSVG.appendChild(pie2);
	bSVG.appendChild(pie1);

	partDiv.appendChild(bSVG);
}

function createText(genSVG,x,y,size,color,textCont){
	var textS = document.createElementNS(genSVG,"text");

	textS.setAttribute("x",x);
	textS.setAttribute("y",y);
	textS.setAttribute("font-size",size);
	textS.setAttribute("fill",color);
	textS.textContent = textCont;

	return textS;
}

function createSmallRect(genSVG,x,y,color){
	var sRect = document.createElementNS(genSVG,"rect");

	sRect.setAttribute("x",x);
	sRect.setAttribute("y",y);
	sRect.setAttribute("width",10);
	sRect.setAttribute("height",10);
	sRect.setAttribute("fill",color);

	return sRect;
}

//create pie cart with given percentage

function createPie(genSVG,perc){
	var pie = document.createElementNS(genSVG,"path");
	var pos = angleTrans(150,60,35,perc);
	pie.setAttribute("d","M115,60,A35,35,0,0,0,"+pos.x+","+pos.y+",L150,60,Z");
	pie.setAttribute("fill","#F0A43A");
	
	return pie;
}

//create the second pie chart

function createPie2(genSVG,perc){
	var pie2 = document.createElementNS(genSVG,"path");
	
		var pos = angleTrans(150,60,35,88);
		
		pie2.setAttribute("d","M115,60,A35,35,0,0,0,"+pos.x+","+pos.y+",L150,60,Z");
		pie2.setAttribute("fill","#F0A43A");
	return pie2;
}