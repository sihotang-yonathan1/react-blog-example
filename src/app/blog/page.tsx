import { useContext } from "react";
import { RoutePathContext } from "../../Route";

// TODO: read data from json file
const data = [{
    'id': 1,
    'title': 'Hello world',
    'short_description': 'Hello',
    'thumbnail_url': '#',
  }, {
    'id': 2,
    'title': 'Hello world 2',
    'short_description': 'Hello',
    'thumbnail_url': '#',
  }]

export default function BlogPage(){
    const routePathCOntext = useContext(RoutePathContext);
    const {matcher} = routePathCOntext

    const id = matcher?.groups?.blog_id;
    const selected_data = data.filter((items) => items.id === Number(id || "-1"))
    console.log(selected_data)
    return (
        selected_data.map((item, index) => (
            <div key={index}>
                <p>{item.title}</p>
            </div>
        ))
    )
}