import React from 'react';

class BlogComponent extends React.Component {
    componentDidMount() {
        const {error } = this.props;
        if( error === true) {
            throw new Error( "some error occured");
        }
    }
    render() {
        const { title, description } = this.props;
        return (
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-header">
                        {title}
                    </div>
                    <div className="card-body">
                        <p className="card-text"> {description} </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default BlogComponent;