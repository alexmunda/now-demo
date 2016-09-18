import rootPath from 'app-root-path';
import express from 'express';

const {path} = rootPath;

const app = express();

app.use('/dist', express.static(`${path}/dist`));

app.get('/', (req, res) => {
  return res.sendFile(`${path}/src/index.html`);
});

app.listen(8080, () => console.log('Listening on port 8080'));
