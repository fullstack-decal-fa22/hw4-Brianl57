import React from 'react';
// import { useState } from 'react';

/* TODO: Translate the below class component to a functional component! */
// class Color extends React.Component 
const Color = (props) => {

    // constructor(props) {
    //     super(props);
    // }

    // render() {
    //     return <button onClick={() => this.props.handleClick(this.props.color)}>Post {this.props.color}</button>
    // }
    // const [post, setPost] = useState(0)

    // const updatePost = () => {

    // }

    return (
        <button onClick={() => props.handleClick(props.color)}>Post {props.color}</button>
    )
}

export default Color;