function openModal(){
	if(document.getElementById("todayMenuModal").style.display == "block"){
		document.getElementById("todayMenuModal").style.display = "none";
	}else{
		document.getElementById("todayMenuModal").style.display = "block";
	}
}
document.getElementById("todayMenu").addEventListener("click", openModal);