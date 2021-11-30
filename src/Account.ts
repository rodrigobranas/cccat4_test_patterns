import CurrencyAPI from "./CurrencyAPI";

export default class Account {
	balance: number;
	currencyAPI: CurrencyAPI;

	constructor (currencyAPI: CurrencyAPI) {
		this.currencyAPI = currencyAPI;
		this.balance = 0;
	}

	credit (amount: number, currency?: string) {
		if (currency) {
			amount = this.currencyAPI.convert(amount, currency);
		}
		this.balance += amount;
	}

	debit (amount: number) {
		this.balance -= amount;
	}

	getBalance () {
		return this.balance;
	}
}
