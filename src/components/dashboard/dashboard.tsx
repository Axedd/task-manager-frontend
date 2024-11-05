import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import BasicDateCalendar from "../Widgets/Calendar";
import ClockWidget from "../Widgets/Clock";
import styles from "./MainPanel.module.css";

const initialWidgets = [
    { id: "clock", content: <ClockWidget /> },
    { id: "calendar", content: <BasicDateCalendar /> },
];

const Dashboard: React.FC = () => {
    const [widgets, setWidgets] = useState(initialWidgets);

    const onDragEnd = (result: any) => {
        if (!result.destination) return;

        const reorderedWidgets = Array.from(widgets);
        const [movedWidget] = reorderedWidgets.splice(result.source.index, 1);
        reorderedWidgets.splice(result.destination.index, 0, movedWidget);

        setWidgets(reorderedWidgets);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
                {(provided) => (
                    <div
                        className={styles.widgetsContainer}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {widgets.map((widget, index) => (
                            <Draggable key={widget.id} draggableId={widget.id} index={index}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className={styles.draggableItem}
                                    >
                                        {widget.content}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default Dashboard;