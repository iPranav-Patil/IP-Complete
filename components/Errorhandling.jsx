class ErrorBoundary extends React.Component {
    state = { hasError: false };
  
    componentDidCatch(error, errorInfo) {
      this.setState({ hasError: true });
      // You can log the error or send it to a logging service
      console.error(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return <div>Something went wrong.</div>;
      }
      return this.props.children;
    }
  }
  