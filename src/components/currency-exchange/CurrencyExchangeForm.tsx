import React, {useEffect, useMemo} from 'react'
import {CnbExchangeResponse, CountryExchangeRate} from "lib/cnb-api-client"
import {Select, Form, Box, Heading, TextInput, FormField, Button, Paragraph} from "grommet";

interface CurrencyExchangeTableProps {
    exchangeResponse: CnbExchangeResponse
}

const calculateConversion = (czkAmount: number, selectedCurrencyType: string, exchangeRates: Array<CountryExchangeRate>): string => {
    const exchangeRate = exchangeRates.find(rate => rate.code.toLowerCase() === selectedCurrencyType.toLowerCase())
    if (!exchangeRate || !czkAmount) {
        return ''
    }
    return `${((exchangeRate.amount / exchangeRate.rate) * czkAmount).toFixed(2)} ${exchangeRate.code}`
}
const CurrencyExchangeForm: React.FC<CurrencyExchangeTableProps> = ({exchangeResponse}: CurrencyExchangeTableProps) => {
    const [selectedCurrency, setSelectedCurrency] = React.useState('PLN');
    const [czkAmount, setCzkAmount] = React.useState(1);


    const option = exchangeResponse.exchangeRates.map(rate => rate.code)
    return (
        <Box border={{side: "top"}} margin={{top: 'medium'}} pad={{top: 'medium', bottom: 'xlarge'}}>
            <Heading level={4} margin="none">Currency conversion calculator</Heading>
            <Paragraph margin="none" size="small" fill>Enter an amount in CZK and select a currency, then click calculate to display the converted amount.</Paragraph>
            <Box width="medium">
                <Paragraph><strong>Currency amount</strong>: {calculateConversion(czkAmount, selectedCurrency, exchangeResponse.exchangeRates)} {}</Paragraph>
                <Form onSubmit={(e) => e.preventDefault()}>
                    <FormField name="name" htmlFor="text-input-id" label="CZK amount">
                        <TextInput placeholder="CZK amount" type="number" name="czkAmount" onChange={({ target: { value }}) => setCzkAmount(parseInt(value))} value={czkAmount} />
                    </FormField>
                    <FormField name="name" htmlFor="text-input-id" label="Currency Type">
                        <Select
                            name="currencyType"
                            options={option}
                            value={selectedCurrency}
                            onChange={({ option }) => setSelectedCurrency(option)}
                            dropHeight="small"
                            dropAlign={{ top: "bottom", left: "left" }}
                        />
                    </FormField>
                    <Box direction="row" gap="medium">
                        <Button primary label="Calculate" />
                    </Box>
                </Form>
            </Box>
        </Box>
    )
}

export default CurrencyExchangeForm