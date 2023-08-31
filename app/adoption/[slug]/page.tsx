import Adoption_PetInfo_Cell from "./components/Adoption_PetInfo_Cell"
import CharacteristicsItem from "./components/CharacteristicsItem"
import PetCarousel from "./components/PetCarousel"

const AdoptionPetInfoPage = () => {
  return (
    <>
        {/* Pet Information Section */}
        <div className='relative flex flex-col lg:flex-row justify-center items-center h-auto max-w-screen-2xl mx-auto mt-12 pb-8'>
            <div className='h-[50vh] flex justify-center items-center bg-black w-4/5 rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none'>
                Pet Photo here
            </div>
            <div className='h-[50vh] flex flex-col gap-6 justify-center items-center bg-green-50 w-4/5 rounded-b-xl lg:rounded-r-xl lg:rounded-bl-none p-10 shadow-lg'>
                <Adoption_PetInfo_Cell 
                    header='Name | (Type of Pet):'
                    content='Tubby ( Dog )'
                    size = 'w-4/5 text-2xl'
                />
                <div className='flex-1 flex gap-6 justify-center items-center w-4/5 h-4/5'>
                    <Adoption_PetInfo_Cell 
                        header = 'Breed'
                        content = 'Corgi'
                        size = 'w-full'
                    />
                    <Adoption_PetInfo_Cell 
                        header = 'Color'
                        content='White-brown'
                        size = 'w-full'
                    />
                </div>
                <div className='flex-1 flex gap-6 justify-center items-center w-4/5 h-4/5'>
                    <Adoption_PetInfo_Cell 
                        header = 'Gender'
                        content='Male'
                        size = 'w-full'
                    />
                    <Adoption_PetInfo_Cell 
                        header = 'Age'
                        content='3+ years'
                        size = 'w-full'
                    />
                    <Adoption_PetInfo_Cell 
                        header = 'Toilet-Trained'
                        content='Yes'
                        size = 'w-full'
                    />
                </div>
                <Adoption_PetInfo_Cell 
                    header = 'Medical Condition (If Any)'
                    content='Healthy'
                    size = 'w-4/5'
                />
            </div>
        </div>
        {/* Pet description, characteristics section */}
        <div className='relative flex flex-col lg:flex-row justify-center items-center h-fit mx-auto mt-12 bg-zinc-200 py-6'>
            <div className='flex flex-col lg:flex-row w-4/5 max-w-screen-2xl gap-8'>
                <div className='relative basis-2/3 flex-col flex gap-10 lg:gap-18'>
                    <div className=' w-full bg-white py-6 rounded-lg shadow-md min-h-[256px] h-fit'>
                        <div className='flex justify-start w-4/5 p-6'>
                            <h2 className='font-bold text-2xl text-primary-green'>
                                Reasons for rehoming
                            </h2>
                        </div>
                        <div className='px-6'>
                            <p>
                            Lost of job therefore could no longer afford to continue caring for this wonderful friend.
                            </p>
                        </div>
                    </div>
                    <div className='w-full bg-white rounded-lg shadow-md p-6 min-h-[128px] h-fit'>
                        <h2 className=' text-primary-green font-semibold text-2xl'>
                            Characteristics 
                        </h2>
                        <ul className='flex gap-6 my-6'>
                            <CharacteristicsItem content='Children Friendly'/>
                            <CharacteristicsItem content='House-trained' />
                            <CharacteristicsItem content='Can live with other pets' />
                        </ul>
                    </div>
                </div>
                
                <div className='basis-1/3 bg-white shadow-md rounded-lg p-6 flex flex-col justify-center  min-h-[384px] h-fit '>
                    <div className='border-4 border-dotted border-green-500 flex flex-col gap-20 p-8 rounded-2xl'>
                        <p className=' text-center'>Love Tubby? Give him a home. We will provide animal loving volunteers who will visit and guide you to provide your new loving pet a comfortable home.</p>
                        <button className='bg-green-400 h-24 rounded-2xl text-white hover:bg-green-600 shadow-md'>Adopt me!</button>
                    </div>
                    
                </div>
            </div>
        </div>
        {/* Pet promotional banner section */}
        <PetCarousel />
    </>
  )
}

export default AdoptionPetInfoPage