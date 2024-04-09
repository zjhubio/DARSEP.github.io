function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function cluster(){
	var selectElement = document.getElementById('trainingset');
    var selectedValue = selectElement.value;
	
	const client = new OSS({
       region: 'oss-cn-beijing',
       bucket: "darsep",
    });
	
	if(selectedValue == 1){
		var img1 = "1.png";
		var img2 = "2.png";
		alert("请求已发送，请等待！")
		await sleep(10000);
		client.get(img1).then(function(result) {
			var imageUrl = URL.createObjectURL(new Blob([result.content]));
			document.getElementById('img1').src = imageUrl;
			document.getElementById('annotation1').innerHTML = "Semantic embedding clustering plot for the training sequence dataset";
		}).catch(function(err) {
		  console.error('Error downloading image:', err);
		});
		
		client.get(img2).then(function(result) {
			var imageUrl = URL.createObjectURL(new Blob([result.content]));
			document.getElementById('img2').src = imageUrl;
			document.getElementById('annotation2').innerHTML = "Semantic embedding clustering plot for the training sequence dataset, coloured by year";
		}).catch(function(err) {
		  console.error('Error downloading image:', err);
		});
		document.getElementById('clusterimgs').style.display = 'block';
	}
	
	if(selectedValue == 2){
		var img3 = "3.png";
		var img4 = "4.png";
		alert("请求已发送，请等待！")
		await sleep(10000);
		client.get(img3).then(function(result) {
			var imageUrl = URL.createObjectURL(new Blob([result.content]));
			document.getElementById('img1').src = imageUrl;
			document.getElementById('annotation1').innerHTML = "Semantic embedding clustering plot for the training vs. optimised dataset";
		}).catch(function(err) {
		  console.error('Error downloading image:', err);
		});
		
		client.get(img4).then(function(result) {
			var imageUrl = URL.createObjectURL(new Blob([result.content]));
			document.getElementById('img2').src = imageUrl;
			document.getElementById('annotation2').innerHTML = "Semantic embedding clustering plot for the training vs. optimised dataset, coloured by year";
		}).catch(function(err) {
		  console.error('Error downloading image:', err);
		});
		document.getElementById('clusterimgs').style.display = 'block';
	}
}
