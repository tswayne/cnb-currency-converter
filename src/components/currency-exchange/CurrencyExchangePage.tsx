import React, {useMemo, useState} from 'react'
import {Grid, PageHeader, Notification, Box } from "grommet"
import Card from "components/common/Card"
import {CnbApiClient} from "lib/cnb-api-client"
import CurrencyExchangeTable from './CurrencyExchangeTable'
import CurrencyExchangeForm from './CurrencyExchangeForm'
import {useQuery} from "react-query";

const CurrencyExchangePage: React.FC = () => {
    const cnbApiClient = useMemo(() => new CnbApiClient(), [])
    const apiCacheKey = `exchange-rates-${new Date().getUTCDate()}`
    const { isLoading, isError, data: exchangeResponse, error } = useQuery(apiCacheKey, () => cnbApiClient.getDailyExchangeRate())
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
            <PageHeader title="CNB Currency Converter" />
            <Card cardProps={ {margin: {bottom: "large"} } }>
                {exchangeResponse &&
                <Box>
                    <CurrencyExchangeTable exchangeResponse={exchangeResponse} />
                    <CurrencyExchangeForm exchangeResponse={exchangeResponse} />
                </Box>}
            </Card>
        </Grid>
    )
}

export default CurrencyExchangePage