import { Provider } from 'react-redux'
import { client } from '../api/config'
import { MemoryRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { store } from '../redux/store'
import { PropsWithChildren } from 'react'

export const WrapperWithContext = ({ children }: PropsWithChildren) => {
    return (
        <MemoryRouter>
            <ApolloProvider client={client}>
                <Provider store={store}>
                    {children}
                </Provider>
            </ApolloProvider>
        </MemoryRouter>
    )
}

export default WrapperWithContext