import Sidebar  from './Sidebar';
import MainDash from './MainDash/MainDash'
import RightSide from './RigtSide/RightSide'

function Home() {
    return (
        <div className="App">
            <div className="AppGlass">

                <Sidebar />
                <MainDash />
                <RightSide />
                
            </div>
        </div>
    )
}