'use client';
import { GalleryCard } from "@/constants";
import { useEffect, useState } from "react";


const PetsForAdoption = () => {

    const [pets, setPets] = useState([{}]);

    // useEffect(() => {
    //     // Get the list of pets for adoption.
    //     // getPetsForAdoption().then((pets) => {
    //     // setPets(pets);
    //     // });
    //     setPets(GalleryCard);
    // }, []);

    return (
        <ul className="list-group">
        {GalleryCard.map((pet) => (
            <li className="list-group-item" key={pet.id}>
            <h4>{pet.name}</h4>
            <p>{pet.breed}</p>
            <p>
                {/* {pet.applications.map((application) => (
                <span key={application.id}>
                    {application.user.name}
                </span>
                ))} */}
                Potential Adopters
            </p>
            </li>
        ))}
        </ul>
    )
}

export default PetsForAdoption