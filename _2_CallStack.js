"in _1Execution-Context.js"
"we see that create EX-Context & SUB-Ex-Context and so on is HEAVY task"
"How JS will manage it?"

"Ans: CALLSTACK"

"Callstack: is a STACK"

"In call stack" // GEC: Global EX Cont & E1: Ex-Cont1
    "[]"
    "[]"
    "[E2]"  // E2 is done, POP() it
    "[E1]"  // E1 is done, POP() it
    "[GEC]" // GEC will run & pop  when ALL above stack is cleard.

    "after GEC pop, file run is complete"