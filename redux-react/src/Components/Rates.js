import React from 'react';
import { connect } from 'react-redux';
import { getRateData } from '../actions';

const Rates = props => {
  //console.log(props);
  return (
    <>
      <button
        onClick={() => {
          props.getRateData();
        }}
      >
        get rates
      </button>
      {props.error && <div>{props.error}</div>}
      {props.isLoading ? (
        <div>loading data...</div>
      ) : (
        <>
          <div>{props.rates}</div>
        </>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    error: state.error,
    rates: state.rates
  };
};

export default connect(mapStateToProps, { getRateData })(Rates);
