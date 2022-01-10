import { AnimalCard } from "./AnimalCard";
import { getAnimalsByType } from "../../selectors/getAnimalsByType"
import { useMemo } from "react";


export const AnimalList = ({ type }) => {

    const animals = useMemo(() => getAnimalsByType(type), [type]);

    return (
        <div className="animate__animated animate__fadeIn row rows-cols-1 row-cols-md-3 g-3">
            {
                animals.map(animal => (
                    <AnimalCard key={animal.id} {...animal} />
                ))
            }
        </div>
    )
}
