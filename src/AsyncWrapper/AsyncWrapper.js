import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const AsyncWrapper = ({ status, children,  errorComp = 'Error' }) => {
  const styles = {
    margin: 'auto',
    marginTop: '37px',
    display: 'flex'
  };
  return (
    <React.Fragment>
      {status === 'pending' && <CircularProgress data-testid="loader" style={styles} />}
      {status === 'success' && children}
      {status === 'error' && <React.Fragment>{errorComp}</React.Fragment>}
    </React.Fragment>
  );
};

export default AsyncWrapper;
