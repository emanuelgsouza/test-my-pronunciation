import { mount } from "@vue/test-utils";
import { RouteLocation } from "vue-router";

import { key as storeKey } from "@/store";

import SelectView from "../index.vue";
import { ActionTypes } from "@/store/modules/challenge/action-types";
import { ChallengeLevel } from "@/types";

const mockStore = {
  state: {
    challenge: {
      challenges: {},
    },
  },
  dispatch: jest.fn(() => Promise.resolve({})),
};

let mockRoutes: RouteLocation[] = [];

jest.mock("vue-router", () => ({
  useRouter: () => ({
    push: (data: RouteLocation) => {
      mockRoutes.push(data);
    },
  }),
}));

const factory = () => {
  return mount(SelectView, {
    global: {
      provide: {
        [storeKey.valueOf()]: mockStore,
      },
    },
  });
};

describe("SelectView tests", () => {
  beforeEach(() => {
    mockRoutes = [];
  });

  it("should render a disable button with Inglês text", () => {
    const wrapper = factory();

    const firstButton = wrapper.findAll("button")[0];
    expect(firstButton.text()).toBe("Inglês");
    expect(firstButton.attributes("disabled")).toBe("");
  });

  it("should call store.dispatch with easy params when click on the Easy button", async () => {
    const wrapper = factory();

    const easyButton = wrapper.findAll("button")[1];

    await easyButton.trigger("click");

    expect(mockStore.dispatch).toHaveBeenCalled();

    expect(mockStore.dispatch).toHaveBeenNthCalledWith(
      1,
      ActionTypes.BUILD_CHALLENGE,
      ChallengeLevel.EASY
    );

    expect(mockRoutes[0]).toEqual({
      name: "ChallengePage",
      params: { uuid: "" },
    });
  });

  it("should call store.dispatch with medium params when click on the Medium button", async () => {
    const wrapper = factory();

    const easyButton = wrapper.findAll("button")[2];

    await easyButton.trigger("click");

    expect(mockStore.dispatch).toHaveBeenCalled();

    expect(mockStore.dispatch).toHaveBeenNthCalledWith(
      2,
      ActionTypes.BUILD_CHALLENGE,
      ChallengeLevel.MEDIUM
    );

    expect(mockRoutes[0]).toEqual({
      name: "ChallengePage",
      params: { uuid: "" },
    });
  });

  it("should call store.dispatch with hard params when click on the Hard button", async () => {
    const wrapper = factory();

    const easyButton = wrapper.findAll("button")[3];

    await easyButton.trigger("click");

    expect(mockStore.dispatch).toHaveBeenCalled();

    expect(mockStore.dispatch).toHaveBeenNthCalledWith(
      3,
      ActionTypes.BUILD_CHALLENGE,
      ChallengeLevel.HARD
    );

    expect(mockRoutes[0]).toEqual({
      name: "ChallengePage",
      params: { uuid: "" },
    });
  });
});
