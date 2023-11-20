import { mount } from "@vue/test-utils";

// Import your Vue component
import Navbar from "./Navbar.vue";

describe("Navbar.vue", () => {
  it("renders Navbar component correctly", () => {
    // Mount the component
    const wrapper = mount(Navbar);

    // Assert that the component is rendered
    expect(wrapper.exists()).toBe(true);

    // You can add more specific assertions based on your component's structure
    expect(wrapper.find(".Navbar").exists()).toBe(true);
    expect(wrapper.find(".nightmode").exists()).toBe(true);
    // Add more assertions as needed
  });

  it("toggles night mode when nightmode button is clicked", async () => {
    // Mount the component
    const wrapper = mount(Navbar);

    // Get the nightmode button
    const nightmodeButton = wrapper.find(".nightmode");

    // Click the nightmode button
    await nightmodeButton.trigger("click");

    // Assert that the night mode is toggled
    expect(wrapper.vm.isNightMode).toBe(true);
    expect(wrapper.vm.lightnightvalue).toBe("Light Mode");

    // Click the nightmode button again
    await nightmodeButton.trigger("click");

    // Assert that the night mode is toggled back
    expect(wrapper.vm.isNightMode).toBe(false);
    expect(wrapper.vm.lightnightvalue).toBe("Night Mode");
  });

  // You can add more test cases for different functionalities as needed
});
