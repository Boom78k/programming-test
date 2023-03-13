const btn = document.querySelector('.check_but');
const ansText = document.querySelector('.answer_text');

btn.addEventListener('click', test);

function test(){
	var point = 0;

	if(document.getElementsByName("v1")[1].checked){
		point = point + 1;
	}

	if(document.getElementsByName("v2")[3].checked){
		point = point + 1;
	}

	if(document.getElementsByName("v3")[1].checked){
		point = point + 1;
	}

	if(document.getElementsByName("v4")[2].checked){
		point = point + 1;
	}

	if(document.getElementsByName("v5")[3].checked){
		point = point + 1;
	}

	if(document.getElementsByName("v6")[0].checked){
		point = point + 1;
	}

	if(document.getElementsByName("v7")[1].checked){
		point = point + 1;
	}

	if(document.getElementsByName("v8")[0].value.toLowerCase() == "sql"){
		point = point + 2;
	}

	if(document.getElementsByName("v9")[0].value.toLowerCase() == "websocket"){
		point = point + 2;
	}

	if(document.getElementsByName("v10")[0].value.toLowerCase() == "полиморфизм"){
		point = point + 2;
	}

	if(point >= 11){
		ansText.innerHTML = `Вы набрали ${point} баллов из 13 баллов. Отличный результат!`;
	}

	else if(point <= 10 && point >= 6){
		ansText.innerHTML = `Вы набрали ${point} баллов из 13 баллов. Неплохо!`;
	}

	else if(point <= 5 && point >= 3){
		ansText.innerHTML = `Вы набрали ${point} баллов из 13 баллов. Не сказать бы что все хорошо`;
	}

	else if(point <= 2){
		ansText.innerHTML = `Вы набрали ${point} баллов из 13 баллов. Вам стоит еще подучиться`;
	}
 
}