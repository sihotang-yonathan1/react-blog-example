import { useContext } from "react";
import { RoutePathContext } from "../../Route";

// TODO: read data from json file
const data = [{
    'id': 1,
    'title': 'Snapdragon X Elite hadir pertengahan tahun 2024',
    'description': `Snapdragon X Elite adalah salah satu lini terbaru Qualcomm. SoC ini digadang-gadang sebagai processor yang dapat menyaingi SoC Apple M3. Dengan adanya SoC ini, pilihan konsumen terhadap laptop berbasis ARM akan meningkat`,
    'thumbnail_url': 'https://gadget.jagatreview.com/wp-content/uploads/2023/10/Snapdragon-X-Elite_Hero-Image.webp',
  }, {
    'id': 2,
    'title': 'Rabbit R1 dapat dijalankan di Android',
    'description': 'Rabbit R1 adalah sebuah perangkat yang digunakan untuk menjalankan tugas dasar dan memanfaatkan AI. Baru-baru ini, pihak Android Authority menemukan bahwa kode Rabbit R1 dapat dijalankan pada smartphone Android',
    'thumbnail_url': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPzGrAY86uH0vtaEScQluYxc9kjgk2jsr4wVPBdtlxpg&s',
  }]

export default function BlogPage(){
    const routePathCOntext = useContext(RoutePathContext);
    const {matcher} = routePathCOntext

    const id = matcher?.groups?.blog_id;
    const selected_data = data.filter((items) => items.id === Number(id || "-1"))
    const isValidId = selected_data.length > 0;
    
    // TODO: handle Invalid id
    return (
        // TODO: maybe not using map?
        // TODO: set selected blog UI in separate function
        isValidId && selected_data.map((item, index) => (
            <div key={index}>
                <h3 className="text-center font-semibold text-xl">{item.title}</h3>
                {/* Thumbnail */}
                <div className="mx-5 my-2 flex justify-center">
                    <img src={item.thumbnail_url} alt={item.title} />
                </div>
                {/* Description */}
                <div>
                    <p>{item.description}</p>
                </div>
            </div>
            
        ))
    )
}