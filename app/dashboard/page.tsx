import { CustomButton, Header } from "@/components"
import PetsForAdoption from "./components/PetsForAdoption"
import DashboardContainer from "./components/DashboardContainer"


const DashBoardPage = () => {
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

            <DashboardContainer
                border_color="border-orange-600"
                header_bg_color="bg-orange-400"
                content_bg_color="bg-orange-200"
                header_title="Volunteer Application Status"
            >
                <div>
                    Volunteer Application
                </div>
            </DashboardContainer>

        </div>
    </div>
  )
}

export default DashBoardPage