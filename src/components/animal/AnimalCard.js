import { Link } from 'react-router-dom';

export const AnimalCard = ({
    id,
    animal,
    habitat,
    tipo,
}) => {
    return (
        <div className="card">
            <div className="row no-gutters">
                <img
                    src={`/assets/${id}.png`}
                    className="card-img"
                    alt={animal}
                />
                <div className="card-body">
                    <h5 className="card-title">{animal}</h5>
                    <p className="card-text">{tipo}</p>

                    <p className="card-text">
                        <small className="text-muted">{habitat}</small>
                    </p>

                    <Link to={`/animal/${id}`}>
                        Más...
                    </Link>
                </div>
            </div>
        </div>
    )
}
