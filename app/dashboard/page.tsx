'use client';
import { useState, useEffect } from 'react';
import { Header } from "@/components"
import DashboardContainer from "./components/DashboardContainer"
import AdoptionDashBoardCard from "./components/AdoptionDashBoardCard"
import VolunteerAppDashBoardCard from "./components/VolunteerAppDashBoardCard"
import RehomingListingDashBoardCard from "./components/RehomingListingDashBoardCard"
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

export interface rehomingApplicantsType { 
    petURL: string; 
    applicants: { 
        applicant_name: string; 
        applicant_phone: string 
    }[] 
}
    

const DashBoardPage = () => {

    const [petPhotos, setPetPhotos] = useState<string[]>();
    const [rehomingApplicants, setRehomingApplicants] = useState<rehomingApplicantsType[]>();
    const { user_email } = useAuth();

    const getDashBoardData = async () => {
        try {
            const res = await axios.post('/api/dashboard', {user_email: user_email});
            console.log(res.data);
            setPetPhotos(res.data.petApplicationPhotos);
            setRehomingApplicants(res.data.petApplicationData);
        } catch (error) {
            return
        }
    }

    useEffect(() => {
        getDashBoardData();
    }, [])
    

    return (
        <div className="min-w-screen mb-12">
            <Header content="Dashboard" />
            <div className="flex flex-col justify-center gap-10">

                <DashboardContainer
                    border_color="border-green-600"
                    header_bg_color="bg-primary-green"
                    content_bg_color="bg-green-200"
                    header_title="Listed Pets For Rehoming"
                >
                    {rehomingApplicants != null ? (
                        <div className="py-12 flex flex-wrap gap-10">
                            {rehomingApplicants.map((pet, index) => (
                                <RehomingListingDashBoardCard 
                                    key={index} 
                                    petURL={pet.petURL}  
                                    applicants = {pet.applicants}
                                />
                            ))}
                        </div>)
                        : (
                            <div className='h-32'>
                                No rehoming applications.
                            </div>
                        )
                        
                    }
                </DashboardContainer>

                <DashboardContainer
                    border_color="border-blue-600"
                    header_bg_color="bg-primary-blue"
                    content_bg_color="bg-blue-200"
                    header_title="Adoption Application Status"
                >   
                    {petPhotos != null ? (
                        <div className="py-12 flex flex-wrap gap-10">
                            {petPhotos.map((photo, index) => (
                                <AdoptionDashBoardCard key={index} petURL={photo} />
                            ))}
                        </div>)
                        : (
                            <div className='h-32'>
                                No adoption applications.
                            </div>
                        )
                        
                    }
                    
                </DashboardContainer>

                <DashboardContainer
                    border_color="border-orange-600"
                    header_bg_color="bg-primary-orange"
                    content_bg_color="bg-orange-200"
                    header_title="Volunteer Application Status"
                >
                    <div className="py-12">
                        <VolunteerAppDashBoardCard />
                    </div>
                </DashboardContainer>

            </div>
        </div>
    )
}

export default DashBoardPage