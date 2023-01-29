class Telephone {
	#observers = [];

	AddPhoneNumber = function (phonenumber) {
		this.#observers.push(phonenumber);
	};

	RemovePhoneNumber = function (phonenumber) {
		const index = this.#observers.indexOf(phonenumber);
		if (index > -1) {
			this.#observers.splice(index, 1);
		}
	};

	notify = function (event, phonenumber) {
		if (event == 'dial') {
			const index = this.#observers.indexOf(phonenumber);
			return index > -1
				? console.log(`Now Dialing ${phonenumber}`)
				: console.log(`Ooops!! ${phonenumber} does not exist in your package`);
		}
		if (event === 'log') {
			const index = this.#observers.indexOf(phonenumber);
			return index > -1
				? console.log(phonenumber)
				: console.log(`Ooops!! ${phonenumber} does not exist in your package`);
		}
	};
}
//INHERITANCE

class Observer extends Telephone {
	printPhoneNumber = function (phonenumber) {
		this.notify('dial', phonenumber);
	};

	printDialingPhoneNumber = function (phonenumber) {
		this.notify('log', phonenumber);
	};
}

//new suscriber
const x = new Observer();

//Telephone company
x.AddPhoneNumber('2347023232');

//user side subscription
x.printDialingPhoneNumber('2347023232');
x.printPhoneNumber('2347023232');
