import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getAnimalById } from '../../selectors/getAnimalById';


export const AnimalScreen = () => {

    const { animalId } = useParams();
    const navigate = useNavigate();

    const animal = useMemo(() => getAnimalById(animalId), [animalId]);

    const handleReturn = () => {
        navigate(-1)
    }

    if (!animal) {
        return <Navigate to='/' />
    }

    return (
        <div className="row mt-5 animate__animated animate__fadeInLeft">
            <img
                src={`/assets/${animal.id}.png`}
                alt={animal.animal}
                className="img-thumbnail"
            />
            <h3 className="mt-3">{animal.animal}</h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Este es un animal: <b>{animal.tipo}</b></li>
                <li className="list-group-item">Y es un animal: <b>{animal.habitat}</b></li>
            </ul>

            <button
                className="btn btn-outline-primary mt-5"
                onClick={handleReturn}
            >
                Regresar
            </button>
        </div>
    )
}
