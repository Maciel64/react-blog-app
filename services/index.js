import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
        query MyQuery {
            postagemsConnection {
                edges {
                    node {
                        autor {
                            id
                            nome
                            descricao
                            foto {
                                url
                            }
                        }
                        createdAt
                        slug
                        resumo
                        titulo
                        imagemApresentacao {
                            url
                        }
                        categorias {
                            nome
                            slug
                        }
                    }
                }
            }
        }
    `

    const results = await request(graphqlAPI, query);

    return results.postagemsConnection.edges;
} 