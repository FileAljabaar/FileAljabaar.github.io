let trendings = new XMLHttpRequest();
trendings.open('get', 'app/json/trending.json', 'json/trending.json', true);
trendings.send();
trendings.onload = function(){
	if(this.readyState == 4 && this.status == 200){
		let trending = JSON.parse(this.responseText);
		let output = "";
		for(let item of trending){
			output += `
<article class="s-slide">
<a href="${item.link}" class="shadow-0">
  <div class="item p-1">
    <div class="card hover-shadow" style="max-width: 9em; min-width: 9em; min-height: 15em; max-height: 15em">
      <img src="${item.images}" class="card-img-top" alt="${item.alt}"/>
        <span class="badge fs-badge rounded-pill fw-bold bg-danger position-absolute shadow-2 mt-1 ms-1 top-0 start-0">${item.badge}</span>
      <div class="card-body p-2">
        <h2 class="card-title fs-title text text-danger fw-bold">${item.title}</h2>
        <p class="card-text fs-sm fw-light text-dark">${item.descriptions}</p>
      </div>
    </div>
  </div>
</a>
</article>
			`;}
document.querySelector(".trending").innerHTML = output;
}}