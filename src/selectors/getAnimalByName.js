import { animals } from "../data/animals"

export const getAnimalByName = (nombre = '') => {

    if (nombre === '') {
        return [];
    }

    nombre = nombre.toLowerCase();
    return animals.filter(animal => animal.animal.toLowerCase().includes(nombre));

}