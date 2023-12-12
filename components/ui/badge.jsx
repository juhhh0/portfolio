export default function Badge({label, color}){

    let text_color = ""
    let bg_color = ""

    if(color == "green"){
        text_color = "text-green-300"
        bg_color = "bg-green-800"
    }else if(color == "yellow"){
        text_color = "text-yellow-300"
        bg_color = "bg-yellow-800"
    }

    return(
        <span className={`py-1 px-2 h-fit rounded-sm text-xs text-green-300 bg-green-800 ${text_color} ${bg_color}`}>{label}</span>
    )
}