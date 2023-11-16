export default function Card({ name, type, img }) {
    return <div className="card-container">
        <img src={img} alt="" width={'200px'} />
        <div className="description">
            <p>Name : <span>{name}</span></p>
            <p>Type : <span>{type}</span></p>
        </div>
    </div>

}