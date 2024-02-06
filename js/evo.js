function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function evo(){
	var selectElement = document.getElementById('trainingdataset');
    var selectedValue = selectElement.value;
	
	const client = new OSS({
       region: 'oss-cn-beijing',
       accessKeyId: 'LTAI5t5i8dSnEmqkzeZD26Vb',
       accessKeySecret: '4rJ7ryao3M1nn1fgJddNKFi7RxIzbM',
       bucket: "darsep",
    });
	
	if(selectedValue == 3){
		var img3 = "5.png";
		var img4 = "6.png";
		var img5 = "7.png";
		alert("请求已发送，请等待！")
		await sleep(10000);
		client.get(img3).then(function(result) {
			var imageUrl = URL.createObjectURL(new Blob([result.content]));
			document.getElementById('img3').src = imageUrl;
			document.getElementById('annotation3').innerHTML = "Flow chart of RBD sequence evolution for 2019-2023";
		}).catch(function(err) {
		  console.error('Error downloading image:', err);
		});
		
		client.get(img4).then(function(result) {
			var imageUrl = URL.createObjectURL(new Blob([result.content]));
			document.getElementById('img4').src = imageUrl;
			document.getElementById('annotation4').innerHTML = "Prediction plot of start sampling pseudo-times";
		}).catch(function(err) {
		  console.error('Error downloading image:', err);
		});
		
		client.get(img5).then(function(result) {
			var imageUrl = URL.createObjectURL(new Blob([result.content]));
			document.getElementById('img5').src = imageUrl;
			document.getElementById('annotation5').innerHTML = "Prediction plot of end sampling pseudo-times";
		}).catch(function(err) {
		  console.error('Error downloading image:', err);
		});
		
		document.getElementById('clusterimgs').style.display = 'block';
	}
	
	if(selectedValue == 4){
		var img3 = "8.png";
		var img4 = "9.png";
		var img5 = "10.png";
		alert("请求已发送，请等待！")
		await sleep(10000);
		client.get(img3).then(function(result) {
			var imageUrl = URL.createObjectURL(new Blob([result.content]));
			document.getElementById('img3').src = imageUrl;
			document.getElementById('annotation3').innerHTML = "Flow chart of RBD sequence evolution for the total sequence set (2019-2023 and post-optimisation)";
		}).catch(function(err) {
		  console.error('Error downloading image:', err);
		});
		
		client.get(img4).then(function(result) {
			var imageUrl = URL.createObjectURL(new Blob([result.content]));
			document.getElementById('img4').src = imageUrl;
			document.getElementById('annotation4').innerHTML = "Prediction plot of start sampling pseudo-times for the total sequence set (2019-2023 and post-optimisation)";
		}).catch(function(err) {
		  console.error('Error downloading image:', err);
		});
		
		client.get(img5).then(function(result) {
			var imageUrl = URL.createObjectURL(new Blob([result.content]));
			document.getElementById('img5').src = imageUrl;
			document.getElementById('annotation5').innerHTML = "Prediction plots of end point sampling pseudo-times for the total sequence set (2019-2023 and post-optimisation)";
		}).catch(function(err) {
		  console.error('Error downloading image:', err);
		});
		document.getElementById('clusterimgs').style.display = 'block';
	}
}