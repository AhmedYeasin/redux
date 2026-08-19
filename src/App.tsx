import { Minus, PlusIcon } from "lucide-react"
import { Button } from "./components/ui/button.tsx"

import { decrement, increment, incrementByValue, selectValue } from "./redux/counter/counterSlice.ts";

import { useAppDispatch, useAppSelector } from "./redux/hooks.ts";

function App() {
  const value = useAppSelector(selectValue);
  const dispatch = useAppDispatch();

  return (
    <div>
      <main className="container mx-auto max-w-3xl px-4 py-8 space-y-5">
        <header className="flex items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Redux Todo
            </h1>
            <p className="text-sm text-muted-foreground">
              State managed using Redux Toolkit
            </p>

          </div>
          <div className="flex items-center gap-2">
            <div className="flex-cols items-center text-center gap-2">
              Counter Value<span className="text-5xl font-medium">
                <p> {value}</p>
              </span>
              <Button variant="outline" size="sm" className="mr-6"
                onClick={() => dispatch(decrement())}>
                <Minus />
              </Button>

              <Button variant="outline" size="sm" onClick={() => dispatch(incrementByValue(5))}>
                <PlusIcon />
              </Button>
            </div>
            {/* <Button size="sm">
              <PlusIcon className="size-4" />
              New Task
            </Button> */}
          </div>
        </header>

        {/* <TaskStats />
        <FiltersBar />
        <TaskList onEdit={openEdit} /> */}
      </main>
    </div>
  )
}

export default App
