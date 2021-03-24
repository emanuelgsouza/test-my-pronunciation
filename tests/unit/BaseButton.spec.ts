import { mount } from "@vue/test-utils";

import BaseButton from "@/components/BaseButton.vue";

describe("BaseButton tests", () => {
  it("should have a button with the correct label", () => {
    const wrapper = mount(BaseButton, {
      props: {
        label: "Test label",
      },
    });

    expect(wrapper.text()).toBe("Test label");
  });

  it("should emit the click event when clicks in the button", async () => {
    const wrapper = mount(BaseButton, {
      props: {
        label: "Test label",
      },
    });

    await wrapper.trigger("click");

    expect(wrapper.emitted("click")).not.toBeUndefined();
  });

  it("should set the correct classes", async () => {
    const wrapper = mount(BaseButton, {
      props: {
        label: "Test label",
      },
    });

    expect(wrapper.classes("base-button--primary")).toBe(true);

    await wrapper.setProps({
      variant: "ghost",
    });

    expect(wrapper.classes("base-button--ghost")).toBe(true);
  });
});
