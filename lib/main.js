import _Lo from 'lodash-node/modern/lang/isEqual.js';
import _Fetch from 'fetch';
import _React from 'react';
let React = _React;

let foobar = function foobar(){

    console.log(_Lo(1, 4));
    console.log("foobar2");
    console.log("foobar3");
    console.log("foobar4");
};

let HelloWorld = _React.createClass({
    render: function() {
        return <div>Hello {this.props.name}</div>;
    }
})

let reposForUser = function(username) {
    let url = `https://api.github.com/users/${username}/repos`;
    return _Fetch(url).then(response => response.json());
}

let reposeAsync = async function (username) {
    let response = await _Fetch(`https://api.github.com/users/${username}/repos`)
    let json    = await response.json()
    return json
}

let logAsync = async function() {
    let json = await reposeAsync("timcash")
    console.log(json);
}

foobar();

//reposForUser("timcash").then(repos => console.log(repos));

logAsync();

_React.render(<HelloWorld name="timcash" />, document.body)

export let __hostRealod = true;
