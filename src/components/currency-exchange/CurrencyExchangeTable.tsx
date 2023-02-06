import React from "react"
import {CnbExchangeResponse} from "lib/cnb-api-client"
import {Box, Table, TableBody, TableCell, TableHeader, TableRow} from "grommet"

interface CurrencyExchangeTableProps {
    exchangeResponse: CnbExchangeResponse
}
const CurrencyExchangeTable: React.FC<CurrencyExchangeTableProps> = ({exchangeResponse}: CurrencyExchangeTableProps) => {

    return (
        <Box>
            <Table>
                <TableHeader>
                    <TableRow>
                        {exchangeResponse.headers.map((header, headerIndex) => (
                            <TableCell scope="col" border="bottom" key={`ert-header-${headerIndex}`}>
                                {header}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {exchangeResponse.exchangeRates.map((exchangeRate, erIndex) => (
                        <TableRow key={`ert-row-${erIndex}`}>
                            {exchangeResponse.headers.map((header, headerIndex) => (
                                <TableCell key={`ert-cell-${headerIndex}`}>
                                    {exchangeRate[header.toLowerCase()]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </Box>
    )
}

export default CurrencyExchangeTable