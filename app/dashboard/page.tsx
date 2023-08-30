import { CustomButton, Header } from "@/components"
import PetsForAdoption from "./components/PetsForAdoption"
import DashboardContainer from "./components/DashboardContainer"


const DashBoardPage = () => {
  return (
    <div className=" container min-w-full">
        <Header content="Dashboard" />

        <div className="flex flex-col justify-center w-screen gap-10">

            <DashboardContainer
                border_color="border-green-600"
                header_bg_color="bg-primary-green"
                content_bg_color="bg-green-200"
                header_title="Pets for Adoption"
            >
                <div>
                    Rehomed Pet Listings
                </div>
            </DashboardContainer>

            <DashboardContainer
                border_color="border-blue-600"
                header_bg_color="bg-primary-blue"
                content_bg_color="bg-blue-200"
                header_title="Adoption Application Status"
            >
                <div>
                    Pet adoption status
                </div>
            </DashboardContainer>

            <div className="">
                <h2 className="mb-4 font-bold text-xl font-poppins">Volunteer Status</h2>
                <ul className="">
                    {/* Volunteer status card component */}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default DashBoardPage