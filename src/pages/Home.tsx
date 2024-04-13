import { LeftSection } from "../components/layouts/leftsection/LeftSection";
import { Navbar } from "../components/layouts/topsection/Navbar/Navbar";
import { RightSection } from "../components/layouts/rightsection/RightSection";


export const Home = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <LeftSection />
        <RightSection />
      </div>
    </div>
  )
}
