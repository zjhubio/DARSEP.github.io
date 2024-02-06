function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function vocsanalysis(){
	var selectElement = document.getElementById('vocs');
    var selectedValue = selectElement.value;
	
	const client = new OSS({
       region: 'oss-cn-beijing',
       accessKeyId: 'LTAI5t5i8dSnEmqkzeZD26Vb',
       accessKeySecret: '4rJ7ryao3M1nn1fgJddNKFi7RxIzbM',
       bucket: "darsep",
    });
	
	if(selectedValue == 5){
		var img3 = "11.png";
		var img4 = "12.png";
		var img5 = "13.png";
		alert("请求已发送，请等待！")
		await sleep(10000);
		client.get(img3).then(function(result) {
			var imageUrl = URL.createObjectURL(new Blob([result.content]));
			document.getElementById('img6').src = imageUrl;
			document.getElementById('annotation6').innerHTML = "The mutation location of the RBD region of the Omicron variable strain BA.1.";
		}).catch(function(err) {
		  console.error('Error downloading image:', err);
		});
		
		client.get(img4).then(function(result) {
			var imageUrl = URL.createObjectURL(new Blob([result.content]));
			document.getElementById('img7').src = imageUrl;
			document.getElementById('annotation7').innerHTML = "Semantic variations and percentage rankings of mutation positions in the RBD region of the Omicron variable strain BA.1.";
		}).catch(function(err) {
		  console.error('Error downloading image:', err);
		});
		
		client.get(img5).then(function(result) {
			var imageUrl = URL.createObjectURL(new Blob([result.content]));
			document.getElementById('img8').src = imageUrl;
			document.getElementById('annotation8').innerHTML = "A violin chart of semantic changes in the Omicron variable strain BA.1.";
		}).catch(function(err) {
		  console.error('Error downloading image:', err);
		});
		
		document.getElementById('vocimgs').style.display = 'block';
	}
	
	if(selectedValue == 6){
		var img3 = "14.png";
		var img4 = "15.png";
		var img5 = "16.png";
		alert("请求已发送，请等待！")
		await sleep(10000);
		client.get(img3).then(function(result) {
			var imageUrl = URL.createObjectURL(new Blob([result.content]));
			document.getElementById('img6').src = imageUrl;
			document.getElementById('annotation6').innerHTML = "The mutation location of the RBD region of the OMICRON variable strain EG.5.";
		}).catch(function(err) {
		  console.error('Error downloading image:', err);
		});
		
		client.get(img4).then(function(result) {
			var imageUrl = URL.createObjectURL(new Blob([result.content]));
			document.getElementById('img7').src = imageUrl;
			document.getElementById('annotation7').innerHTML = "Semantic variation and percentage ranking of the RBD region of the OMICRON variation strain EG.5.";
		}).catch(function(err) {
		  console.error('Error downloading image:', err);
		});
		
		client.get(img5).then(function(result) {
			var imageUrl = URL.createObjectURL(new Blob([result.content]));
			document.getElementById('img8').src = imageUrl;
			document.getElementById('annotation8').innerHTML = "A violin chart of semantic changes in the OMICRON variable strain EG.5";
		}).catch(function(err) {
		  console.error('Error downloading image:', err);
		});
		document.getElementById('vocimgs').style.display = 'block';
	}
}