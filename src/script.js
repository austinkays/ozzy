document.addEventListener('DOMContentLoaded', () => {
    // Update the "Last updated" timestamp when the page loads
    const lastUpdatedSpan = document.getElementById('last-updated');
    if (lastUpdatedSpan) {
        const now = new Date();
        lastUpdatedSpan.textContent = now.toLocaleString(); // Format date and time nicely
    }

    // --- Future Agent Status & Task Management ---
    // This is where we would later add JavaScript to:
    // 1. Fetch current agent statuses from the backend/API and update the #agent-list.
    // 2. Fetch task data (To-Do, In Progress, etc.) and populate the respective lists.
    // 3. Implement any interactive features for tasks (e.g., marking as complete, moving between states).

    // Example placeholder for fetching agent statuses (will be implemented later)
    // fetch('/api/agent-statuses')
    //     .then(response => response.json())
    //     .then(data => {
    //         const agentList = document.getElementById('agent-list');
    //         agentList.innerHTML = ''; // Clear existing list items
    //         data.forEach(agent => {
    //             const li = document.createElement('li');
    //             li.textContent = `${agent.name}: ${agent.status}`;
    //             agentList.appendChild(li);
    //         });
    //     })
    //     .catch(error => console.error('Error fetching agent statuses:', error));

    // Example placeholder for task board updates (will be implemented later)
    // fetch('/api/tasks')
    //     .then(response => response.json())
    //     .then(data => {
    //         // Logic to populate todo-tasks, in-progress-tasks, etc.
    //     })
    //     .catch(error => console.error('Error fetching tasks:', error));

});