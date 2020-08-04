var arrOfName = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i=0;i<arrOfName.length;i++) {
	if(arrOfName[i].startsWith('j')||arrOfName[i].startsWith('J')) {
		sayGoodBye();
	}
	else {
		sayHello();
	}
}