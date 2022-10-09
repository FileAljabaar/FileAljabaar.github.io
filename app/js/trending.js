let trendings = new XMLHttpRequest();
trendings.open('get', 'app/json/trending.json', true);
trendings.send();
trendings.onload = function(){
	if(this.readyState == 4 && this.status == 200){
		let trending = JSON.parse(this.responseText);
		let output = "";
		for(let item of trending){
			output += `
<article>
<a href="${item.link}" class="shadow-0">
  <div class="item draggable">
    <div class="card hover-shadow" style="max-width: 7em; min-width: 7em; min-height: 12em; max-height: 12em">
      <img src="${item.images}" class="card-img-top" alt="${item.alt}"/>
        <span class="badge fs-badge rounded-pill fw-bold bg-danger position-absolute shadow-2 mt-1 ms-1 top-0 start-0">${item.badge}</span>
      <div class="card-body p-2">
        <h7 class="card-title fs-title text text-danger fw-bold">${item.title}</h7>
        <p class="card-text fs-sm fw-light text-dark">${item.descriptions}</p>
      </div>
    </div>
  </div>
</a>
</article>
			`;}
document.querySelector(".trending").innerHTML = output;
}}