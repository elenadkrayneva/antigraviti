import React from 'react';
import styles from './TaskChecklist.module.css';

interface Task {
  id: number;
  label: string;
  isDone: boolean;
}

const tasks: Task[] = [
  { id: 1, label: 'Task Checklist Panel', isDone: true }, 
  { id: 2, label: 'AI buttons unification', isDone: true },
  { id: 3, label: 'Availability badge update', isDone: true },
  { id: 4, label: 'Strategic project image zoom/crop', isDone: true },
  { id: 5, label: 'Skills update', isDone: true },
  { id: 6, label: 'Education & Certifications section split', isDone: true },
  { id: 7, label: 'Contact section typography increase', isDone: true },
  { id: 8, label: 'Add Contact to top navigation', isDone: true },
  { id: 9, label: 'Speed up scroll animations', isDone: true },
];

const TaskChecklist = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Project Status</h3>
      <ul className={styles.list}>
        {tasks.map((task) => (
          <li key={task.id} className={`${styles.item} ${task.isDone ? styles.done : styles.pending}`}>
            <span className={styles.statusIcon}>
              {task.isDone ? '✓' : '○'}
            </span>
            <span className={styles.label}>{task.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskChecklist;
