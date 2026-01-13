import { Card } from "@radix-ui/themes";

const DashboardCard = ({ title, value }: any) => {
  return (
    <Card style={{ padding: 20 }}>
      <h3>{title}</h3>
      <h1>{value}</h1>
    </Card>
  );
};

export default DashboardCard;
