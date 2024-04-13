import { LeftSection } from "@layouts/leftsection/LeftSection";
import { Navbar } from "@layouts/topsection/Navbar/Navbar";
import { RightSection } from "@layouts/rightsection/RightSection";


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
