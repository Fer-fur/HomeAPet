

export interface rehomingApplicantsType { 
    petURL: string; 
    applicants: { 
        applicant_name: string; 
        applicant_phone: string 
    }[] 
}

export interface adoptionApplicationType {
    petURL : string;
    petName : string;
    petBreed : string;
}  