module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  moduleNameMapper: {
    "\\.(svg)$": "jest-transform-stub",
  },
  setupFilesAfterEnv: ["./jest.setup.js"],
};
