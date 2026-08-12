import { PlusIcon } from "lucide-react"
import { Button } from "./components/ui/button.tsx"

function App() {

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
            <Button size="sm">
              <PlusIcon className="size-4" />
              New Task
            </Button>
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
