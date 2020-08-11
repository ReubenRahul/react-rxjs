import React from 'react';

class ErrorBoundaryComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }
    static getDerivedStateFromError() {
        // trigger when find the error occured
        return {hasError: true};
    }
    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h3 className="text-danger">Something went wrong.</h3>;
        }

        return this.props.children; 
    }
}

export default ErrorBoundaryComponent;