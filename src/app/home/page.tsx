import '../../App.css'

import BlogContainer from '../../component/blog/BlogContainer'
import BlogDescription from '../../component/blog/BlogDescription'
import BlogHeader from '../../component/blog/BlogHeader'
import BlogThumbnail from '../../component/blog/BlogThumbnail'
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
  'title': 'Snapdragon X Elite hadir pertengahan tahun ini',
  'description': `Hello world`,
  'thumbnail_url': 'https://gadget.jagatreview.com/wp-content/uploads/2023/10/Snapdragon-X-Elite_Hero-Image.webp',
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
        <div className="flex flex-col gap-3 my-3">
            {/* <BlogContainer url='#'>
            <BlogHeader>
                <BlogTitle title='Hello World'/>
            </BlogHeader>
            <BlogDescription description='Hello'/>
            </BlogContainer> */}
            {data.map((item) => (
              <BlogContainer url={`/blog/${item.id}`} key={item.id}>
                <div className='flex flex-row'>
                  {/* Thumbnail */}
                  <BlogThumbnail url={item.thumbnail_url} alt={item.title}/>
                  {/* Content */}
                  <div className='h-full'>
                      {/* TODO: rename BlogHeader to BlogContent? */}
                      <BlogHeader>
                          <BlogTitle title={item.title}/>
                          <BlogDescription description={item.description}/>
                      </BlogHeader>
                    </div>
                </div>
              </BlogContainer> 
            ))}
        </div>
    </>
  )
}