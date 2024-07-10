function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function evo(){
	var selectElement = document.getElementById('trainingdataset');
    var selectedValue = selectElement.value;
	
	
	if(selectedValue == 3){
		var img3 = "./images/5.png";
		var img4 = "./images/6.png";
		var img5 = "./images/7.png";
		alert("The task has been submitted. Please wait a moment...")
		await sleep(5000);
		
		document.getElementById('img3').src = img3;
		document.getElementById('annotation3').innerHTML = "Flow chart of RBD sequence evolution for 2019-2023";
	
		

		document.getElementById('img4').src = img4;
		document.getElementById('annotation4').innerHTML = "Prediction plot of start sampling pseudo-times";

		

		document.getElementById('img5').src = img5;
		document.getElementById('annotation5').innerHTML = "Prediction plot of end sampling pseudo-times";

		
		document.getElementById('evoimgs').style.display = 'block';
	}
	
	if(selectedValue == 4){
		var img3 = "./images/8.png";
		var img4 = "./images/9.png";
		var img5 = "./images/10.png";
		alert("The task has been submitted. Please wait a moment...！")
		await sleep(5000);

		document.getElementById('img3').src = img3;
		document.getElementById('annotation3').innerHTML = "Flow chart of RBD sequence evolution for the total sequence set (2019-2023 and post-optimisation)";

		

		document.getElementById('img4').src = img4;
		document.getElementById('annotation4').innerHTML = "Prediction plot of start sampling pseudo-times for the total sequence set (2019-2023 and post-optimisation)";

		

		document.getElementById('img5').src = img5;
		document.getElementById('annotation5').innerHTML = "Prediction plots of end point sampling pseudo-times for the total sequence set (2019-2023 and post-optimisation)";

		document.getElementById('evoimgs').style.display = 'block';
	}
}
