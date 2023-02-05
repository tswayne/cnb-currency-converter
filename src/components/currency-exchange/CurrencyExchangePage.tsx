import React, {useEffect} from 'react'
import {Grid, PageHeader} from "grommet"
import Card from "../common/Card"
import {CnbApiClient} from "../../lib/cnb-api-client";

const CurrencyExchangePage: React.FC = () => {
    useEffect(() => {
        const client = new CnbApiClient()
        client.getDailyExchangeRate().then(resp => console.log(resp))
    }, [])
    return (
        <Grid columns="large" gap="large" pad={{ bottom: "large" }}
        >
            <PageHeader title="CNB Currency Converter" />
            <Card>

            </Card>
        </Grid>
    )
}

export default CurrencyExchangePage