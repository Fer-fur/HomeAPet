
export interface searchbarProps {
    onSearch : (searchTerm: string) => void;
}

export interface petDataProps {
    pet_id : number;
    name : string;
    species: string;
    breed: string;
    color: string;
    age: string;
    gender: string;
    description: string;
    medical_condition: string;
    petURL: string;
    user_id: number
}