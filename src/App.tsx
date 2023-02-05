import React from 'react'
import {Grommet, Header, Page, PageContent, Text} from 'grommet'
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'
const Nav = (props: any) => (
    <Header
        background="brand"
        pad={{ left: "medium", right: "small", vertical: "small" }}
        elevation="medium"
        {...props}
     >
        <Text size="large">Sample app</Text>
    </Header>
)
function App() {
    return (
        <QueryClientProvider client={new QueryClient()}>
            <Grommet full>
                <Page>
                    <Nav />
                    <PageContent>
                    </PageContent>
                </Page>
            </Grommet>
        </QueryClientProvider>
    );
}

export default App;
