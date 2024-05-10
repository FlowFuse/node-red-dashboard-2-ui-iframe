module.exports = function (RED) {
    function UIIframeNode (config) {
        RED.nodes.createNode(this, config)

        const node = this

        // which group are we rendering this widget
        const group = RED.nodes.getNode(config.group)

        // const base = group.getBase()

        // server-side event handlers
        // const evts = {
        //     onAction: true,
        //     onInput: function (msg, send, done) {
        //         // store the latest value in our Node-RED datastore
        //         base.stores.data.save(base, node, msg)
        //         // send it to any connected nodes in Node-RED
        //         send(msg)
        //     }
        // }

        // inform the dashboard UI that we are adding this node
        if (group) {
            group.register(node, config)
        } else {
            node.error('No group configured')
        }
    }

    RED.nodes.registerType('ui-iframe', UIIframeNode)
}
