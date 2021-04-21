import { mount } from "@vue/test-utils";

import ResultIllustration from "../index.vue";

import type { ResultIllustrationProps } from "../types";

const factory = (props: Partial<ResultIllustrationProps> = {}) =>
  mount(ResultIllustration, {
    props,
  });

describe("ResultIllustration tests", () => {
  it("should render an img tag", () => {
    const wrapper = factory();

    expect(wrapper.find("img").exists()).toBe(true);
  });

  it("should have the correct svg computed", async () => {
    const wrapper = factory();

    expect(wrapper.vm.illustrationSvg).toBe("sad.svg");

    await wrapper.setProps({
      rate: 0.5,
    });

    expect(wrapper.vm.illustrationSvg).toBe("almost-there.svg");

    await wrapper.setProps({
      rate: 0.8,
    });

    expect(wrapper.vm.illustrationSvg).toBe("congrats.svg");
  });
});
