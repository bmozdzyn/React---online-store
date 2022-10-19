import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/",
});

export default client;