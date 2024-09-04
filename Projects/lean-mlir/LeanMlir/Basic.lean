import SSA
import SSA.Projects.InstCombine.ForMathlib
import SSA.Projects.InstCombine.ForStd
import SSA.Projects.InstCombine.TacticAuto

set_option linter.unusedTactic false
set_option linter.unreachableTactic false

namespace Basic

variable {x y z : BitVec w}

/- 2-1 De Morgan’s Laws Extended -/

theorem not_and_eq_not_or_not :
    ~~~ (x &&& y) = ~~~ x ||| ~~~ y := by
  try alive_auto
  all_goals sorry

theorem not_or_eq_not_and_not :
    ~~~ (x ||| y) = ~~~ x &&& ~~~ y := by
  try alive_auto
  all_goals sorry

theorem not_add_one_eq_not_sub_one :
    ~~~ (x + 1) = ~~~ x - 1 := by
  try alive_auto
  all_goals sorry

theorem not_sub_one_eq_not_add_one :
    ~~~ (x - 1) = ~~~ x + 1 := by
  try alive_auto
  all_goals sorry

end Basic
