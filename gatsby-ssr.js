exports.onRenderBody = ({ setBodyAttributes }) => {
    setBodyAttributes({
        className: 'main-body',
        color: "white",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif",
        style:{
            margin: 0,
            padding: 0
        }
      });
  };