import {CnbApiClient} from "../../lib/cnb-api-client"
import {validApiResponse, invalidApiResponse} from "../test-utils/fixtures"
import sinon from "sinon"

describe("CnbApiClient", () => {
    test('api client parses text response', async () => {
        const api = new CnbApiClient()
        sinon.stub(api, 'get').resolves({ body: validApiResponse })
        const results = await api.getDailyExchangeRate()
        expect(results.date.getDate()).toBe(3);
        expect(results.headers).toStrictEqual(["Country", "Currency", "Amount", "Code", "Rate"]);
        expect(results.exchangeRates[0]).toStrictEqual({amount: 1, code: "AUD", country: "Australia", currency: "dollar", rate: 15.309})
    });

    test('api throws expected error when given unexpected headers', async () => {
        const api = new CnbApiClient()
        sinon.stub(api, 'get').resolves({ body: invalidApiResponse })
        await expect(api.getDailyExchangeRate()).rejects.toThrow("Api response has breaking change, could not parse correctly")
    });
})
