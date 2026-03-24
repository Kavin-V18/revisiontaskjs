
// Create Event Bus
let eventBus = {
    events: {},
    // subscribe
    subscribe: function (event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    },
    // publish
    publish: function (event, data) {
        if (this.events[event]) {
            this.events[event].forEach(cb => cb(data));
        }
    }
};
// Subscribe to even
eventBus.subscribe("userLogin", function (data) {
    alert("User logged in: " + data.name);
});
// Trigger event
function login() {
    eventBus.publish("userLogin", { name: "John" });

}
