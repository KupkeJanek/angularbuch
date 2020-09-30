

function createTask(title, severity) {
    severity = severity || 'normal';
    return {
        title: title,
        severity: severity
    }
}

const tasks = [createTask('Clean up code'),
             createTask('Fix blocker bug', 'important')];

function createTask2(title, severity = 'normal') {
    return {
        title: title,
        severity: severity
    }
}
const tasks2 = [createTask2('Clean up code'),
    createTask2('Fix blocker bug', 'important')];

console.log(tasks2);

function f([x, y] = [1, 2], {z: z} = {z: 3}) {
    return x + y + z;
}

f(); // 6

console.log(f())