var arrOfName = ["Ali", "John", "Fady", "jack", "Medhat", "Mohamed", "Heba", "jony", "Jehad", "Sara"];
for (var i=0;i<arrOfName.length;i++) {
	if(arrOfName[i].startsWith('j')||arrOfName[i].startsWith('J')) {
		sayGoodBye();
	}
	else {
		sayHello();
	}
}