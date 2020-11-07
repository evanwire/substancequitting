import { Component } from 'react';
import { base } from './components/Firebase/base';

class Landing extends Component {
    constructor() {
        super();
        this.user = this.user.bind(this);
        this.state = {
            username: "",
            email: "",
            password: "",
            daystoquit: 0,
            dayswithout: 0,
            whyquit: ""
        }
    }

    componentWillMount
}