"use client";
import './animal.css'

import { useState, useEffect } from 'react';
import { Header } from '../../components/Header';


interface Animal {
    id: string;
    fields: {
        name: string;
        type: string;
        age: string;
        habitat: string;
        size: string;
        image_link: string;
    }
}

function Movies() {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [movies, setMovies] = useState<Animal[] | null>(null);
    let dropInfo = document.getElementsByClassName("info");

    useEffect(() => {
        fetch('/movies/api')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setMovies(data);
        })
        .catch(() => {
            setIsError(true);
        })
        .finally(() => {
            setIsLoading(false);
        })
    }, []);

    return (
        <main className="mt-6">
            <h1 className='header'>ANIMAL KINGDOM</h1>
            {/* {isError && <p>Error!</p>} */}
            {isError ? <p>Error!</p> : null}
            {isLoading && <p>Loading...</p>}
            <div className='animal-list'>
                {movies && movies.map((elem) => {
                    return (
                        <div key={elem.id} className='animal'>
                            <h2 className='animal-name'>
                                {elem.fields.name}
                            </h2>
                            <img className="animal-img" src={elem.fields.image_link} alt="" />
                            <button className='drop-box'>
                                Information
                                <div className='info un-dropped'>
                                    <p className='animal-type'>
                                        {elem.fields.type}
                                    </p>
                                    <p className='animal-age'>
                                        {elem.fields.age}
                                    </p>
                                    <p className='animal-size'>
                                        {elem.fields.size}
                                    </p>
                                    <p className='animal-habitat'>
                                        {elem.fields.habitat}
                                    </p>
                                </div>
                            </button>
                            
                        </div>
                    )
                })}
            </div>
        </main>
    );
}

export default Movies;
