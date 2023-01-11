import renderer from "react-test-renderer";
import Card from "..";
import WeatherInfo from "../../../model/WeatherInfo";

const weather: WeatherInfo = {
  city: "Miami",
  icon: "",
  id: 1234,
  latitude: 12.5,
  longitude: 14.45,
  temperatures: [],
};

it("renders correctly", () => {
  const tree = renderer.create(<Card weather={weather} />).toJSON();
  expect(tree).toMatchSnapshot();
});
