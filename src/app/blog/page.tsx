import { useContext } from "react";
import { RoutePathContext } from "../../Route";

// TODO: read data from json file
const data = [{
    'id': 1,
    'title': 'Hello world',
    'description': 'Hello',
    'thumbnail_url': '#',
  }, {
    'id': 2,
    'title': 'Hello world 2',
    'description': 'Hello',
    'thumbnail_url': '#',
  }]

export default function BlogPage(){
    const routePathCOntext = useContext(RoutePathContext);
    const {matcher} = routePathCOntext

    const id = matcher?.groups?.blog_id;
    const selected_data = data.filter((items) => items.id === Number(id || "-1"))
    const isValidId = selected_data.length > 0;
    
    // TODO: handle Invalid id
    return (
        isValidId && selected_data.map((item, index) => (
            <div key={index}>
                <h3 className="text-center font-semibold text-xl">{item.title}</h3>
                {/* Description */}
                <div>
                    <p>{item.description}</p>
                </div>

                {/* Thumbnail */}
            </div>
            
        ))
    )
}