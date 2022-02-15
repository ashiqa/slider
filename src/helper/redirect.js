import {useHistory} from 'react-router-dom';

export default (context, target) => {
  const history = useHistory()
  if (context.res) {
    context.res.writeHead(303, { Location: target });
    context.res.end();
  } else {
    history.replace(target);
  }
};
