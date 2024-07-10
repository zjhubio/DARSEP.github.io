function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function vocsanalysis(){
	var selectElement = document.getElementById('vocs');
    var selectedValue = selectElement.value;
	
	
	if(selectedValue == 5){
		var img3 = "./images/11.png";
		var img4 = "./images/12.png";
		var img5 = "./images/13.png";
		alert("The task has been submitted. Please wait a moment...")
		await sleep(5000);

		document.getElementById('img6').src = img3;
		document.getElementById('annotation6').innerHTML = "The mutation location of the RBD region of the Omicron variable strain BA.1.";
		

		document.getElementById('img7').src = img4;
		document.getElementById('annotation7').innerHTML = "Semantic variations and percentage rankings of mutation positions in the RBD region of the Omicron variable strain BA.1.";

		

		document.getElementById('img8').src = img5;
		document.getElementById('annotation8').innerHTML = "A violin chart of semantic changes in the Omicron variable strain BA.1.";
		
		document.getElementById('vocimgs').style.display = 'block';
	}
	
	if(selectedValue == 6){
		var img3 = "./images/14.png";
		var img4 = "./images/15.png";
		var img5 = "./images/16.png";
		alert("The task has been submitted. Please wait a moment...")
		await sleep(5000);

		document.getElementById('img6').src = img3;
		document.getElementById('annotation6').innerHTML = "The mutation location of the RBD region of the OMICRON variable strain EG.5.";

		

		document.getElementById('img7').src = img4;
		document.getElementById('annotation7').innerHTML = "Semantic variation and percentage ranking of the RBD region of the OMICRON variation strain EG.5.";

		

		document.getElementById('img8').src = img5;
		document.getElementById('annotation8').innerHTML = "A violin chart of semantic changes in the OMICRON variable strain EG.5";

		document.getElementById('vocimgs').style.display = 'block';
	}
}
