import { mount } from "@vue/test-utils";

import HomeView from "../index.vue";

const mockRouter = {
  push: jest.fn(),
};

const factory = () => {
  return mount(HomeView, {
    global: {
      mocks: {
        $router: mockRouter,
      },
    },
  });
};

describe("HomeView tests", () => {
  it("should redirect to Select challenge page when click on the first button", async () => {
    const wrapper = factory();

    const firstButton = wrapper.findAll("button")[0];

    await firstButton.trigger("click");

    expect(mockRouter.push).toHaveBeenCalled();

    expect(mockRouter.push).toHaveBeenNthCalledWith(1, {
      name: "SelectPage",
    });
  });

  it("should redirect to About page when click on the second button", async () => {
    const wrapper = factory();

    const secondButton = wrapper.findAll("button")[1];

    await secondButton.trigger("click");

    expect(mockRouter.push).toHaveBeenCalled();

    expect(mockRouter.push).toHaveBeenNthCalledWith(2, "about");
  });

  it("should have a h1 tag with correct title", () => {
    const wrapper = factory();

    expect(wrapper.find("h1").text()).toBe("Teste a minha pronúncia!");
  });
});
