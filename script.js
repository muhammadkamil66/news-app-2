function news(x){
$.ajax({
	url: `https://newsapi.org/v2/top-headlines?sources=${x}&apiKey=4c1f191459014feaac61cf27485157f9`,
	success: function(data){

		document.querySelector(".main").innerHTML="";
		for(let i = 0; i <= 9; i++){
			document.querySelector(".main").innerHTML+=`
			<div class="news">
				<div class="img" style="background-image: url(${data.articles[i].urlToImage})"></div>
				<div class="detail">
				<p class="title">${data.articles[i].title}</p>
				<a href="${data.articles[i].url}" target="_blank"><button class="btn btn-dark btn-sm">Read More</button></a>
				</div>			
			</div>
			`
		}
		
	},

	error: function(error){
		console.log(error);
	}

})
}
news('polygon');
