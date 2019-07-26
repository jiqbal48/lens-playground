import * as L from "partial.lenses";
import * as R from "ramda";

console.log("hi");

const sampleTitles = {
  titles: [{ language: "en", text: "Title" }, { language: "sv", text: "Rubrik" }]
};

const bob = L.get(L.prop("titles"), sampleTitles);

// testing some commits
console.log("bob?:", bob);
