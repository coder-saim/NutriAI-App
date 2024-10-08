import { Redirect } from "expo-router";

const Homepage = () => {
  return <Redirect href="/(auth)/welcome" />;
};

export default Homepage;
