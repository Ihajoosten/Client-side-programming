export function index(req, res) {
    // Get all tasks
    
    return res.status(200).json();
}

export function create(req, res) {
    // Create task
    
    return res.status(201).json();
}

export function update(req, res) {
    // Update task

    return res.status(204).json();
}

export function show(req, res) {
    // Get task by ID
    
    return res.status(200).json();
}

export function remove(req, res) {
    // Delete task

    return res.status(204).json();
}
