import Header  from "./Header";


const ListItems = ({title,m1,m2,m3,m4}) => {
    return(
        <div>
            <Header title={title}></Header>
            <ul>
                <li>{m1}</li>
                <li>{m2}</li>
                <li>{m3}</li>
                <li>{m4}</li>
            </ul>

        </div>
    )
}

export default ListItems;