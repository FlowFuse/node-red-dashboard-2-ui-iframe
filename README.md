# Dashboard 2.0 Node: `ui-frame`

This node allows you to embed an external webpage into your Dashboard 2.0 applications using an iframe. This can be useful for displaying content from other services or websites.

## Configuration

### Properties

- **size**: Width and height of the iframe in the context of the Dashboard layout. It's recommended _not_ to use _"auto"_ sizing.
- **src**: The URL of the webpage you want to embed in the iframe.

### Dynamic Configuration

You can override the `src` value defined in Node-RED by passing a `msg.src` value to the iframe. This can be useful for dynamically changing the content of the iframe based on user input or other events.
