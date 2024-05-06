import { RoutePathProvider } from "./Route";
import HomePage from "./app/home/page"
import BlogPage from "./app/blog/page"
import { PageProvider } from "./context/pageContext";
import Layout from "./app/Layout";
/* 1st Color Pallete 
primary: #03AED2
secondary: #68D2E8
third: #FDDE55
fourth: #FEEFAD
*/

/* 2nd Second Pallete
primary: #F3CA52
secondary: #F6E9B2
third: #0A6847
fourth: #7ABA78

*/

/*

TODO: use better routing technique
eg:
- https://dilshankelsen.com/react-routing-without-react-router/
- https://ncoughlin.com/posts/react-navigation-without-react-router/
*/

export default function App() {  
  return (
    // TODO: load link based without manual routing (or probably using `react-router-dom` i guess?)
    <PageProvider>
      <Layout>
        <RoutePathProvider urlPattern="^/$">
            <HomePage />
        </RoutePathProvider>

        <RoutePathProvider urlPattern={`/blog/(?<blog_id>\\d+)`}>
            <BlogPage />
        </RoutePathProvider>
  
      </Layout>
    </PageProvider>
  )
}

