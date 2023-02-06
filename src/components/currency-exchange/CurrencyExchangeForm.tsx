import React, {useState} from "react"
import {CnbExchangeResponse} from "lib/cnb-api-client"
import {Select, Box, Heading, TextInput, FormField, Button, Paragraph} from "grommet";

interface CurrencyExchangeTableProps {
    exchangeResponse: CnbExchangeResponse
}

const CurrencyExchangeForm: React.FC<CurrencyExchangeTableProps> = ({exchangeResponse}: CurrencyExchangeTableProps) => {
    const [selectedCurrency, setSelectedCurrency] = useState<string>("PLN");
    const [czkAmount, setCzkAmount] = useState<number>(1);
    const [convertedAmount, setConvertedAmount] = useState<string>("")

    const calculateConversion = () => {
        const exchangeRates = exchangeResponse.exchangeRates
        const exchangeRate = exchangeRates.find(rate => rate.code.toLowerCase() === selectedCurrency.toLowerCase())
        if (!exchangeRate || !czkAmount) {
            return setConvertedAmount("")
        }
        const conversion = (exchangeRate.amount / exchangeRate.rate) * czkAmount
        setConvertedAmount(`${conversion.toFixed(2)} ${exchangeRate.code}`)
    }

    const options = exchangeResponse.exchangeRates.map(rate => rate.code)
    return (
        <Box margin={{top: "medium"}} pad={{top: "medium", bottom: "medium"}}>
            <Heading level={4} margin="none">Currency conversion calculator</Heading>
            <Paragraph margin="none" size="small" fill>Enter an amount in CZK and select a currency, then click calculate to display the converted amount.</Paragraph>
            <Box width="medium">
                <Paragraph><strong>Conversion</strong>: {convertedAmount}</Paragraph>
                    <FormField name="czkAmount" label="CZK amount">
                        <TextInput data-testid="czkAmount" placeholder="CZK amount" type="number" name="czkAmount" onChange={({ target: { value }}) => setCzkAmount(parseInt(value))} value={czkAmount} />
                    </FormField>
                    <FormField name="currencyType" label="Convert to">
                        <Select
                            name="currencyType"
                            options={options}
                            value={selectedCurrency}
                            onChange={({ option }) => setSelectedCurrency(option)}
                            dropHeight="small"
                            dropAlign={{ top: "bottom", left: "left" }}
                        />
                    </FormField>
                    <Box direction="row" gap="medium">
                        <Button primary label="Calculate" onClick={calculateConversion} />
                    </Box>
            </Box>
        </Box>
    )
}

export default CurrencyExchangeForm