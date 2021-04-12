import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: !!error };
  }

  componentDidCatch() {
    /** do something on Error */
  }

  render() {
    const { fallback, children } = this.props;
    return this.state.hasError ? fallback : children;
  }
}

export default ErrorBoundary;
