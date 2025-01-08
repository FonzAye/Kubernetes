db = db.getSiblingDB("admin");

db.createUser({
    user: "metrics",
    pwd: "example",
    roles: [
        { role: "clusterMonitor", db: "admin" },
        { role: "read", db: "local" },
    ],
});