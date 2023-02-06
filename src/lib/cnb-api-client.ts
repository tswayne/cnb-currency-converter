const { HttpClient } = require('base-http-client')

const EXPECTED_HEADERS = 'Country|Currency|Amount|Code|Rate'
interface CountryExchangeRate{
    [key: string]: string | number,
    country: string,
    currency: string,
    amount: number,
    code: string,
    rate: number,
}
interface CnbExchangeResponse {
    date: Date,
    headers: Array<string>,
    exchangeRates: Array<CountryExchangeRate>
}

class CnbApiClient extends HttpClient {
    constructor() {
        super('http://localhost:4000'); // TODO would be to make the server endpoint configurable
    }
    async getDailyExchangeRate(): Promise<CnbExchangeResponse> {
        const path = '/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt'
        const response = await this.get(path, {}, { headers: { 'Content-Type': 'text/plain' }})
        return this.parseResponse(response.body.trim())
    }

    private parseResponse(response: string): CnbExchangeResponse {
        const [date, headers, ...exchangeRates] = response.split('\n')
        if (headers !== EXPECTED_HEADERS) {
            // todo here would be to dynamically parse exchange rate values using header string to be a little bit more resilient
            throw new Error("Api response has breaking change, could not parse correctly")
        }
        return {
            date: new Date(date),
            headers: headers.split("|"),
            exchangeRates: exchangeRates.map((psv): CountryExchangeRate => {
                const [country, currency, amount, code, rate] = psv.split('|')
                return { country, currency, amount: parseInt(amount), code, rate: parseFloat(rate) }
            })
        }
    }
}

export { CnbApiClient }
export type { CnbExchangeResponse, CountryExchangeRate }