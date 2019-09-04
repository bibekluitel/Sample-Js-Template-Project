import React from 'react';
import styles from './style.module.css';
import { PrimaryButton } from './../../lib/Button';
import AppContext from './../../AppContext';
import { Link } from 'react-router-dom';

class ConversionResult extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.state = { ...this.context.state };
  }

  render() {

    const { conversionDetails } = this.state;

    if (!conversionDetails) {

      return this.props.history.push('customerdetails');
    }

    return (<div className={styles.wrapper}>
      <div className="header">
        <h1>Quick Quote</h1>
      </div>
      <div className={styles.row}>
        <div className={styles['header-title']}>
          OFX Customer Rate
        </div>
        <div className={styles['rate']}>
          {conversionDetails.CustomerRate}
        </div>
      </div>
      <div className={styles['row']}>
        <div className={styles['from']}> From</div>
        <div className={styles['currency']}>
          <span className={styles.code}>
            {conversionDetails.fromCurrency}
          </span>
          <span>
            {conversionDetails.amount}
          </span>
        </div>
      </div>
      <div className={styles['row']}>
        <div className={styles['from']}> To</div>
        <div className={styles['currency']}>
          <span className={styles.code}>
            {conversionDetails.toCurrency}
          </span>
          <span>
            {conversionDetails.CustomerAmount}
          </span>
        </div>
      </div>
      <div className={`${styles['row']} ${styles['footer']}`}>
        <PrimaryButton >
          <Link to="customerdetails" style={{ color: 'white', textDecoration: 'none' }}>
            Start A new Quote
            </Link>
        </PrimaryButton>
      </div>
    </div>)
  }
}

ConversionResult.contextType = AppContext;

export default ConversionResult;