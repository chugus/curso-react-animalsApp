import { useMemo, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';


import { getAnimalByName } from '../../selectors/getAnimalByName'
import { AnimalCard } from '../animal/AnimalCard';


export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const [values, setValues] = useState({ searchText: q });

    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [target.name]: target.value
        });

    }

    const { searchText } = values;
    const animalsFiltered = useMemo(() => getAnimalByName(q), [q]);


    const handleSearch = (e) => {
        e.preventDefault();

        navigate(`?q=${searchText}`)
    }

    return (
        <>
            <h1>Búsquedas</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Buscar:</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Buscar animal..."
                            className="form-control mt-1"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />

                        <button className="btn btn-primary" type="submit">Buscar</button>
                    </form>
                </div>
                <div className='col-7'>
                    <h4>Resultados</h4>
                    <hr />

                    {
                        (q === '')
                            ? <div className='alert alert-info'>Buscar un animal...</div>
                            : (animalsFiltered.length === 0)
                            && <div className='alert alert-danger'>No hay resultados</div>
                    }

                    {
                        animalsFiltered.map(animal => (
                            <AnimalCard key={animal.id} {...animal} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}