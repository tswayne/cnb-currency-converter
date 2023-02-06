import {CnbExchangeResponse} from "../../lib/cnb-api-client"

const validApiResponse = "03 Feb 2023 #25\n" +
    "Country|Currency|Amount|Code|Rate\n" +
    "Australia|dollar|1|AUD|15.309\n" +
    "Brazil|real|1|BRL|4.283"

const invalidApiResponse = "03 Feb 2023 #25\n" +
    "Currency|Amount|Code|Rate\n" +
    "Australia|dollar|1|AUD|15.309\n" +
    "Brazil|real|1|BRL|4.283"


const cnbResponse: CnbExchangeResponse = {
    date: new Date("03 Feb 2023"),
    headers: ["Country", "Currency", "Amount", "Code", "Rate"],
    exchangeRates: [{
        country: "Australia",
        currency: "dollar",
        amount: 1,
        code: "AUD",
        rate: 15.309,
    }, {
        country: "Poland",
        currency: "zloty",
        amount: 1,
        code: "PLN",
        rate: 5.057,
    }]
}

export { validApiResponse, invalidApiResponse, cnbResponse }


