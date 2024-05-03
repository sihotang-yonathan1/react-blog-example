import Layout from "../Layout";

export default function BlogPage({id}: {id: number}){
    return (
        <Layout>
            <p>{id}</p>
        </Layout>
    )
}