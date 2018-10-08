function lookMessage(){
	var valor, texto;
	valor = document.getElementById("text").value;

	if(valor = 1){	
		texto = "AIA 1";
	}
	if(valor = 2){	
		texto = "AIA 2";
	}
	if(valor = 3){	
		texto = "AIA 3";
	}
	else{
		texto = "Digite um valor válido";
	}

	document.getElementById("result").innerHTML = texto;
	 
}