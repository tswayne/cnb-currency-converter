import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import CurrencyExchangeForm from "../../components/currency-exchange/CurrencyExchangeForm"
import {cnbResponse} from "../test-utils/fixtures"


test('loads and displays greeting', async () => {
    render(<CurrencyExchangeForm exchangeResponse={cnbResponse} />)
    fireEvent.change(screen.getByTestId("czkAmount"), { target: { value: 3 } })

    fireEvent.click(screen.getByText('Calculate'))
    expect(screen.getByText(': 0.59 PLN')).toBeDefined()
})
