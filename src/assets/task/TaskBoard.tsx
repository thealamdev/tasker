import TaskList from "./TaskList"
import TaskSearch from "./TaskSearch"
import TaskActions from "./TaskActions"
import { useState } from "react";
import AddTaskModal from "./AddTaskModal";

export default function TaskBoard() {
    const defaultTask = {
        id: crypto.randomUUID(),
        title: 'Task one',
        description: 'Task one description',
        tags: ['web', 'js', 'pythobn'],
        priority: 'high',
        isFav: true
    }

    const [tasks, setTasks] = useState([defaultTask]);
    const [isModalOpen, setModalOpen] = useState<boolean>(false);

    const handleAddTask = () => {
        setModalOpen(true)
    }

    const handleSaveTask = (task: any) => {
        setTasks((prev: any) => (
            [...prev, task]
        ))
        setModalOpen(false)
    }

    return (
        <section className="mb-20" id="tasks">
            {isModalOpen && <AddTaskModal onSave={handleSaveTask} />}
            <div className="container">
                <TaskSearch />
                <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                    <TaskActions onSmash={handleAddTask} />
                    <TaskList tasks={tasks} />
                </div>
            </div>
        </section>
    )
}