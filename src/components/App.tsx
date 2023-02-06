import React from "react"
import {Grommet, Header, Page, PageContent, Text} from "grommet"
import {QueryClient, QueryClientProvider} from "react-query"
import CurrencyExchangePage from "./currency-exchange/CurrencyExchangePage"

const Nav = () => (
    <Header
        sticky="scrollup"
        background="brand"
        pad={{ left: "medium", right: "small", vertical: "small" }}
        elevation="medium"
     >
        <Text size="large">CZK Exchange</Text>
    </Header>
)
function App() {
    return (
        <QueryClientProvider client={new QueryClient()}>
            <Grommet full>
                <Page>
                    <Nav />
                    <PageContent>
                        <CurrencyExchangePage />
                    </PageContent>
                </Page>
            </Grommet>
        </QueryClientProvider>
    );
}

export default App;
