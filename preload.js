const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("test", {
    version: (type) => process.versions[type],
})

