import { LeanWebConfig } from './docs' // look here for documentation of the individual config options

const lean4webConfig : LeanWebConfig = {
  "projects": [
    { "folder": "lean-mlir",
      "name": "Lean-MLIR",
      "examples": [
        { "file": ".lake/packages/SSA/SSA/Projects/InstCombine/HackersDelight/DeMorgan.lean", "name": "Hacker's Delight - De Morgan" },
        { "file": ".lake/packages/SSA/SSA/Projects/InstCombine/HackersDelight/AdditionAndLogicalOps.lean", "name": "Hacker's Delight - Addition And Logical Ops" },
        { "file": ".lake/packages/SSA/SSA/Projects/InstCombine/AliveStatements.lean", "name": "LLVM Rewrites" },
        { "file": ".lake/packages/SSA/SSA/Projects/PaperExamples/PaperExamples.lean", "name": "Toy Semantics+Examples" },
        { "file": ".lake/packages/SSA/SSA/Projects/FullyHomomorphicEncryption/Basic.lean", "name": "FHE emantics" },
        { "file": ".lake/packages/SSA/SSA/Projects/Scf/ScfFunctor.lean", "name": "Scf Semantics" },
        { "file": ".lake/packages/SSA/SSA/Projects/InstCombine/PaperExamples.lean", "name": "InstCombine Examples" },
        { "file": "LeanMlir/Basic.lean", "name": "Toy Rewrite Examples" },
      ]
    }
  ],
  "serverCountry": null,
  "contactDetails": null,
  "impressum": null
}

export default lean4webConfig
