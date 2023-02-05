import React from 'react'
import {Grid, PageHeader} from "grommet"
import Card from "../common/Card"

const CurrencyExchangePage: React.FC = () => {

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