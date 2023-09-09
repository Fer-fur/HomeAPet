import { Header } from '@/components';

const AdoptionProcedurePage = () => {
  return (
    <div className='relative flex flex-col mt-10 max-w-screen-md mx-auto pb-10'>
        <div className='flex flex-col w-4/5 mx-auto rounded-xl bg-slate-50 border-2 border-slate-200'>
            <Header content="Adoption Procedure "/>

            <div className='flex flex-col px-6 pb-4 gap-4'>
                <h3 className=" font-poppins font-bold">
                    How to adopt a pet? 
                </h3>
                <p>
                  First sign up for an account and browse through the available listed pets. 
                  Navigate to the pet's profile and fill in the relevant information on the page,
                  and submit the adoption application. An admin will reach out to you shortly via email,
                  to set up a zoom meeting with the pet owner. 
                </p>
            </div>

            <div className='flex flex-col px-6 pb-4 gap-4'>
                <h3 className=" font-poppins font-bold">
                    Pet Adoption Fee.
                </h3>
                <p>
                  To deter irresponsible pet owners or breeders, we have established an adoption fee so that only serious adopters will apply.
                  A faciliated zoom meeting with the admins and the pet owner will be arranged to ensured that a smooth adoption and rehoming process.
                </p>
            </div>
            
        </div>
    </div>
  )
}

export default AdoptionProcedurePage