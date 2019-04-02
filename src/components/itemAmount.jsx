import React from 'react';
import PropTypes from 'prop-types';

//import '../sass/components/loading.scss';

class ItemAmount extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
        };
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }

    increase() {
        this.setState({amount: this.state.amount + 1});
    }

    decrease() {
        if(this.state.amount > 0 )
            this.setState({amount: this.state.amount - 1});
    }
    
    render() {
        return (
            <div>
                <form method="post" action="#">
                    <div class="row gtr-uniform">
                        <div class="col-6 col-12-xsmall">
                            <ul class="actions">
                                <li><a onClick={this.decrease} class="button primary icon fa-minus"></a></li>
                                <li><input class="button" value={this.state.amount}/></li>
                                <li><a onClick={this.increase} class="button primary icon fa-plus"></a></li>

                                <li><input type="submit" value="Comprar!" class="primary" /></li>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
ItemAmount.defaultProps = {
};

ItemAmount.propTypes = {
};

export default ItemAmount;