module.exports = function parseNestedBodyFields(req, res, next) {
    if (!req.body) {
        return next();
    }
    const newBody = {};
    for (const key in req.body) {
        if (key.includes('[') && key.includes(']')) {
            // Convert keys like 'listing[title]' to nested objects
            const parts = key.split(/\[|\]/).filter(Boolean); // e.g. ['listing', 'title']
            let current = newBody;
            for (let i = 0; i < parts.length; i++) {
                const part = parts[i];
                if (i === parts.length - 1) {
                    current[part] = req.body[key];
                } else {
                    if (!current[part]) current[part] = {};
                    current = current[part];
                }
            }
        } else {
            newBody[key] = req.body[key];
        }
    }
    req.body = newBody;
    next();
};
