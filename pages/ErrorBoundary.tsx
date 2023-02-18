import React from "react";

export default class ErrorBoundary extends React.Component<
  any,
  { hasError: boolean }
> {
  state = { hasError: false };
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log({ error, errorInfo });
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h2>Oops, there is an error!</h2>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}>
            Try again?
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
