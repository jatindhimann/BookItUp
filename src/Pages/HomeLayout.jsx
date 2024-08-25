import { Outlet ,Link, useNavigation} from "react-router-dom"
import Navbar from "../Components/Navbar"

const HomeLayout = () => {
    const navigation = useNavigation();
    const isPageLoading = navigation.state === 'loading';

  return (
    <div>
      <Navbar />
      <section className="page">
        {isPageLoading ? <div className="loading"></div> : <Outlet />}
      </section>
    </div>
  )
}
export default HomeLayout