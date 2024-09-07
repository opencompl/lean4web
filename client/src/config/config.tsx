import { LeanWebConfig } from './docs' // look here for documentation of the individual config options

const lean4webConfig : LeanWebConfig = {
  "projects": [
    { "folder": "lean-mlir",
      "name": "Lean-MLIR",
      "examples": [
        { "file": ".lake/packages/SSA/SSA/Projects/PaperExamples/PaperExamples.lean", "name": "Toy Semantics+Examples" },
        { "file": ".lake/packages/SSA/SSA/Projects/FullyHomomorphicEncryption/Basic.lean", "name": "FHE emantics" },
        { "file": ".lake/packages/SSA/SSA/Projects/Scf/ScfFunctor.lean", "name": "Scf Semantics" },
        { "file": ".lake/packages/SSA/SSA/Projects/InstCombine/PaperExamples.lean", "name": "InstCombine Examples" },
        { "file": "LeanMlir/Basic.lean", "name": "Toy Rewrite Examples" },
        { "file": "LeanMlir/HackersDelight.lean", "name": "Hacker's Delight" }
      ]
    }
  ],
  "serverCountry": null,
  "contactDetails": null,
  "impressum": null
}

export default lean4webConfig
