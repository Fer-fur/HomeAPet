import { Header } from "@/components"

const RehomingProcedurePage = () => {
  return (
    <div className='relative flex flex-col mt-10 max-w-screen-md mx-auto pb-10'>
        <div className='flex flex-col w-4/5 mx-auto rounded-xl bg-slate-50 border-2 border-slate-200'>
            <Header content="Rehoming Procedure"/>

            <div className='flex flex-col px-6 pb-4 gap-4'>
                <h3 className=" font-poppins font-bold">
                    How to rehome a pet? 
                </h3>
                <p>
                    Firstly, sign up for an account and log into the account and navigate to the rehoming webpage and start filling in the pet details.
                    Once the form is correctly submitted, you can view your listed pet in the pet gallery section under the Adoption tab. The pet details will be listed as well.
                </p>
            </div>

            <div className='flex flex-col px-6 pb-4 gap-4'>
                <h3 className=" font-poppins font-bold">
                    How to see who is interested to adopt my pet?
                </h3>
                <p>
                    The pet details will be displayed to the owners on the dashboard webpage upon logging in. 
                    Users will be able to view the how many interested adopters and their details on the dashboard.
                    Users can then simply click on the accept button and the staffs will arrange a zoom meeting for both parties to faciliate a smooth adoption and rehoming process.
                </p>
            </div>
            
        </div>
    </div>
  )
}

export default RehomingProcedurePage