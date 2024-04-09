function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function cluster(){
	var selectElement = document.getElementById('trainingset');
    var selectedValue = selectElement.value;
	
	if(selectedValue == 1){
		var img1 = "./images/1.png";
		var img2 = "./images/2.png";
		alert("The request has been sent, please wait！")
		await sleep(1000);
	
		document.getElementById('img1').src = img1;
		document.getElementById('annotation1').innerHTML = "Semantic embedding clustering plot for the training sequence dataset";
		
		
			
		document.getElementById('img2').src = img2;
		document.getElementById('annotation2').innerHTML = "Semantic embedding clustering plot for the training sequence dataset, coloured by year";

		document.getElementById('clusterimgs').style.display = 'block';
	}
	
	if(selectedValue == 2){
		var img3 = "./images/3.png";
		var img4 = "./images/4.png";
		alert("The request has been sent, please wait！")
		await sleep(1000);
		
		document.getElementById('img1').src = img3;
		document.getElementById('annotation1').innerHTML = "Semantic embedding clustering plot for the training vs. optimised dataset";

		

		document.getElementById('img2').src = img4;
		document.getElementById('annotation2').innerHTML = "Semantic embedding clustering plot for the training vs. optimised dataset, coloured by year";

		document.getElementById('clusterimgs').style.display = 'block';
	}
}
