import { Header } from "@/components"
import FeeTable from "./components/FeeTable"

const AdoptionFeePage = () => {
  return (
    <div className='relative flex flex-col mt-10 max-w-screen-md mx-auto pb-10'>
        <div className='flex flex-col w-4/5 mx-auto rounded-xl bg-slate-50 border-2 border-slate-200'>
            <Header content="Adoption Fee Information"/>

            <div className='flex flex-col px-6 pb-4 gap-4'>
                <h3 className=" font-poppins font-bold">
                    Why is there an adoption fee?
                </h3>
                <p>
                  As this is a non-profitable website solely to provide a social service in hopes to reduce the amount of animal abandonment cases in Singapore,
                  the fees is used to help maintain the site so that it can continue to function and allow more people to utilize it.  
                </p>
            </div>

            <div className='flex flex-col px-6 pb-4 gap-4'>
                <h3 className=" font-poppins font-bold">
                    How will the fee be utilized?
                </h3>
                <p>
                  The fees will be used for 3 purposes. 
                </p>
                <FeeTable />

                <p>The volunteers will provided with traveling expenses rebate to vist the new adopter's house to provide them with proper advise and guidance on their newly adopted pets.
                    Should they choose not to take the rebate, it will be added to the donation to the animal shelters.
                </p>
            </div>
            
        </div>
    </div>
  )
}

export default AdoptionFeePage