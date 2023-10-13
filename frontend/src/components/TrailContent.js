import details from "../trailcontents"
export default function TrailContent(props){
    console.log(details.dhoni)
    for (const key in details) {
        if(props.url==key){
            return(<div className="container py-5">
                <h1>{details[key].title}</h1>
                <h3>{details[key].desc}</h3>
                </div>
            )
        }
        
    }
}