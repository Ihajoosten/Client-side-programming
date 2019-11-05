"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.index = index;
exports.create = create;
exports.update = update;
exports.show = show;
exports.remove = remove;
function index(req, res) {
    // Get all tasks

    return res.status(200).json();
}

function create(req, res) {
    // Create task

    return res.status(201).json();
}

function update(req, res) {
    // Update task

    return res.status(204).json();
}

function show(req, res) {
    // Get task by ID

    return res.status(200).json();
}

function remove(req, res) {
    // Delete task

    return res.status(204).json();
}