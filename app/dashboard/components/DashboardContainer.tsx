
interface DashboardProps {
    border_color : string;
    header_bg_color: string;
    content_bg_color: string;
    header_title: string;
    children: React.ReactNode;
}

const DashboardContainer = ({border_color, header_bg_color, content_bg_color,header_title, children} : DashboardProps ) => {
  return (
    <div className={`flex flex-col border-4 w-4/5 mx-auto rounded-2xl ${border_color}`}>
        <h2 className= {`flex flex-1 justify-center font-bold text-xl font-poppins rounded-t-xl py-6 h-12 text-white items-center ${header_bg_color}`}>
           {header_title}
        </h2>
        <div className={`flex flex-1 rounded-b-xl justify-center ${content_bg_color} `}>
            <div className="h-32">
                {children}
            </div>
        </div>
    </div>
  )
}

export default DashboardContainer