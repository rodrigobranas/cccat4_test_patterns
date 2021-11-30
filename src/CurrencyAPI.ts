export default interface CurrencyAPI {
	convert (amount: number, currency: string): number;
}
