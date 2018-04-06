import React from 'react';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({ message: { textAlign: 'center' } });

const EmptyMessage = ({ coll, children, classes }) =>
  coll.length === 0 ? (
    <Typography className={classes.message} color="primary">
      {children}
    </Typography>
  ) : null;

export default withStyles(styles)(EmptyMessage);
