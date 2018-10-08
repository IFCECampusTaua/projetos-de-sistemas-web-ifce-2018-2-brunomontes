
function testQuality(){
	var valor, texto;
	valor = document.getElementById("text").value;

	if((valor >= 0) && (valor < 10)){	
		texto = "Insuficiente";
	}
	if((valor >= 10) && (valor < 14)){
		texto = "Bom";
	}
	if(valor > 14){
		texto = "Muito Bom";
	}

	document.getElementById("result").innerHTML = texto;
	 
}