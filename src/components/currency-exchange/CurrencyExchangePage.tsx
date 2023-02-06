import React, {useMemo, useState} from "react"
import {Grid, PageHeader, Notification, Box, AccordionPanel, Accordion} from "grommet"
import Card from "components/common/Card"
import {CnbApiClient, CnbExchangeResponse} from "lib/cnb-api-client"
import CurrencyExchangeTable from "./CurrencyExchangeTable"
import CurrencyExchangeForm from "./CurrencyExchangeForm"
import {useQuery} from "react-query"

const CurrencyExchangePage: React.FC = () => {
    const cnbApiClient = useMemo(() => new CnbApiClient(), [])
    const [activePanel, setActivePanel] = useState<number | undefined>(0)
    const apiCacheKey = `exchange-rates-${new Date().getUTCDate()}`
    const { isError, data: exchangeResponse } = useQuery<CnbExchangeResponse>(apiCacheKey, cnbApiClient.getDailyExchangeRate)
    const toggleActivePanel = () => activePanel === 0 ? setActivePanel(undefined) : setActivePanel(0)
    return (
        <Grid columns="large" gap="large" pad={{ bottom: "large" }} margin={{bottom: "large"}}>
            {isError && (
                <Notification
                    toast
                    status="critical"
                    title="Something went wrong"
                    message="There was a problem getting the daily exchange rates, please try again soon."
                    onClose={() => {}}
                />
            )}
            <PageHeader title="CZK Currency Exchange" />
            <Card cardProps={ {margin: {bottom: "large"} } }>
                {exchangeResponse &&
                <Box>
                    <Accordion activeIndex={activePanel} focusIndicator={false} onClick={toggleActivePanel}>
                        <AccordionPanel label="Daily exchange rates"  >
                            <CurrencyExchangeTable exchangeResponse={exchangeResponse} />
                        </AccordionPanel>
                    </Accordion>
                    <CurrencyExchangeForm exchangeResponse={exchangeResponse} />
                </Box>}
            </Card>
        </Grid>
    )
}

export default CurrencyExchangePage