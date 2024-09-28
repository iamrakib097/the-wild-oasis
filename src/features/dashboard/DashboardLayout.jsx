import styled from "styled-components";
import { useRecentBooking } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
// import { useRecentStays } from "./useRecentStays";
import Spinner from "../../ui/Spinner";
const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

const DashboardLayout = () => {
  const { bookings, isLoading: isLoading1 } = useRecentBooking();
  const { stays, confirmedStays, isLoading: isLoading2 } = useRecentStays();
  if (isLoading1 || isLoading2) return <Spinner />;
  console.log(confirmedStays);
  return (
    <StyledDashboardLayout>
      <div>Statistics</div>
      <div>Today&apos;s Activity</div>
      <div>Chart stay durations</div>
      <div>Chart sales</div>
    </StyledDashboardLayout>
  );
};

export default DashboardLayout;
