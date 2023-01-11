import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TemperatureItem from "../../components/TemperatureItem";

describe("Componenet: TemperatureItem", () => {
  it("renders a temperature item component", () => {
    render(
      <TemperatureItem
        temperature={{
          day: "TODAY",
          value: 6.1,
        }}
      />
    );

    const element = screen.getByTestId("temperature-item");
    expect(element).toContainHTML(
      '<h1 class="uppercase sm:text-[28px]">TODAY |</h1><div class="sm:text-[28px] mt-3">6.1°</div>'
    );
    expect(element).toBeInTheDocument();
  });
});
