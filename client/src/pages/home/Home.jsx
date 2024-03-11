import { CreatePost, ListPost } from "."
import SwipperHome from "../../components/share/swipper/SwipperHome"
import "./home.css"

const Home = () => {
  return (
    <div>
      <SwipperHome/>
      <CreatePost/>
      <ListPost/>
    </div>
  )
}

export default Home