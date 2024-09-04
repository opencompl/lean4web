import { LeanWebConfig } from './docs' // look here for documentation of the individual config options

const lean4webConfig : LeanWebConfig = {
  "projects": [
    { "folder": "lean-mlir",
      "name": "Lean-MLIR",
      "examples": [
        { "file": "LeanMlir/Basic.lean", "name": "Basic Example" },
        { "file": "LeanMlir/HackersDelight.lean", "name": "Hacker's Delight" }
      ]
    }
  ],
  "serverCountry": null,
  "contactDetails": null,
  "impressum": null
}

export default lean4webConfig
