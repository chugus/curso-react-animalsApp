import { animals } from "../data/animals"

export const getAnimalsByType = (type) => {

    const validTypes = ['Terrestre', 'Acuático'];

    if (!validTypes.includes(type)) {
        throw new Error(`${type} no es un tipo válido`)
    }

    return animals.filter(animal => animal.habitat === type)
}