import artdetails from "../articlecontents"
export default function TrailContent(props){
    for (const key in artdetails) {
        if(props.url==key){
            return(<div className="container py-5">
                <h1>{artdetails[key].title}</h1>
                <h3>{artdetails[key].desc}</h3>
                </div>
            )
        }
        
    }
}