import Greetings from "../Components/Dashboard components/Greetings"
import DashboardCard from "../Components/Dashboard components/DashboardCard"
import PaymentMeter from "../Components/Dashboard components/PaymentMeter"
import PickupStats from "../Components/Dashboard components/PickupStats"
import Barchart from "../Components/Dashboard components/Barchart"
import History from "../Components/Dashboard components/History"

// import FloatingButton from "./FloatingRoundButton";
export default function Dashboard() {
  return (
    <>
      {/* <HamburgerMenu /> */}
      <Greetings name={"Elo"} />
      <DashboardCard />
      <PaymentMeter />
      <PickupStats />
      <Barchart />
      <History />
    </>
  );
}
