import { mount } from "@vue/test-utils";
import { RouteLocation } from "vue-router";
import { key as storeKey } from "@/store";

import ResultView from "../index.vue";

const TEST_UUID = "95c987da-49c1-44eb-ae9b-c08f3b67fee4";

const mockStore = {
  state: {
    challenge: {
      challenges: {
        [TEST_UUID]: {
          createdAt: "2021-04-20T00:41:14.304Z",
          updatedAt: "2021-04-20T00:41:47.574Z",
          level: "EASY",
          sentence: {
            value: "May the Force be with you.",
            author: "Star Wars",
          },
          uuid: TEST_UUID,
          result: {
            transcript: "May 1st be with you",
            duration: 5,
          },
        },
      },
    },
  },
  dispatch: jest.fn(() => Promise.resolve({})),
};

let mockRoutes: RouteLocation[] = [];

jest.mock("vue-router", () => ({
  useRouter: () => ({
    currentRoute: {
      value: {
        params: {
          uuid: "95c987da-49c1-44eb-ae9b-c08f3b67fee4",
        },
      },
    },
    push: (data: RouteLocation) => {
      mockRoutes.push(data);
    },
  }),
}));

const factory = () => {
  return mount(ResultView, {
    global: {
      provide: {
        [storeKey.valueOf()]: mockStore,
      },
    },
  });
};

describe("Result view tests", () => {
  beforeEach(() => {
    mockRoutes = [];
  });

  it("should shown the correct title, rate, original and transcript texts", () => {
    const wrapper = factory();

    expect(wrapper.find("h1").text()).toBe("Parabéns!");

    expect(wrapper.find("[data-testid='result-rate']").text()).toBe(
      "79% de acerto!"
    );

    expect(wrapper.find("[data-testid='original-text']").text()).toBe(
      "May the Force be with you."
    );

    expect(wrapper.find("[data-testid='transcript-text']").text()).toBe(
      "May 1st be with you"
    );
  });

  it.todo("should back to HomePage when there is no challenge by uuid");

  it("should back to SelectPage view when click on the first button", async () => {
    const wrapper = factory();

    const firstButton = wrapper.findAll("button")[0];

    await firstButton.trigger("click");

    expect(mockRoutes[0]).toEqual({
      name: "SelectPage",
    });
  });

  it("should back to ChallengePage view when click on the second button", async () => {
    const wrapper = factory();

    const firstButton = wrapper.findAll("button")[1];

    await firstButton.trigger("click");

    expect(mockRoutes[0]).toEqual({
      name: "ChallengePage",
      params: {
        uuid: TEST_UUID,
      },
    });
  });
});
