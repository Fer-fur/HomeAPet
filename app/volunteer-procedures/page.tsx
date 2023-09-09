import { Header } from '@/components';

const VolunteerProceduresPage = () => {
  return (
    <div className='relative flex flex-col mt-10 max-w-screen-md mx-auto pb-10'>
        <div className='flex flex-col w-4/5 mx-auto rounded-xl bg-slate-50 border-2 border-slate-200'>
            <Header content="Volunteer Procedure"/>

            <div className='flex flex-col px-6 pb-4 gap-4'>
                <h3 className=" font-poppins font-bold">
                    How to become a volunteer? 
                </h3>
                <p>
                    Interested volunteers can sign up via the volunteer webpage and fill in the form with a personal email. 
                    Staff will contact you shortly to schedule an interview to know more about you and what type of your pets you prefer to help.
                </p>
            </div>

            <div className='flex flex-col px-6 pb-4 gap-4'>
                <h3 className=" font-poppins font-bold">
                    What are the roles of a volunteer?
                </h3>
                <p>
                    Volunteers will be helping to conduct house visits to the new adopters to ensure that they are guided and adviced on how to better care for their new pet.
                </p>
            </div>
            
        </div>
    </div>
  )
}

export default VolunteerProceduresPage