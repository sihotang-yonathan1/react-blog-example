import '../../App.css'

import BlogContainer from '../../component/blog/BlogContainer'
import BlogDescription from '../../component/blog/BlogDescription'
import BlogHeader from '../../component/blog/BlogHeader'
import BlogTitle from '../../component/blog/BlogTitle'


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

const data = [{
  'id': 1,
  'title': 'Hello world',
  'description': `Hello world`,
  'thumbnail_url': '#',
}, {
  'id': 2,
  'title': 'Hello world',
  'description': 'Hello',
  'thumbnail_url': '#',
}]

export default function App() {
  return (
    <>
        <h3 className='font-semibold text-lg'>Blog</h3>
        
        {/* Blog List */}
        <div className="flex flex-row gap-3 my-3">
            {/* <BlogContainer url='#'>
            <BlogHeader>
                <BlogTitle title='Hello World'/>
            </BlogHeader>
            <BlogDescription description='Hello'/>
            </BlogContainer> */}
            {data.map((item) => (
              <BlogContainer url={`/blog/${item.id}`} key={item.id}>
                <BlogHeader>
                    <BlogTitle title={item.title}/>
                </BlogHeader>
                <BlogDescription description={item.description}/>
              </BlogContainer> 
            ))}
        </div>
    </>
  )
}