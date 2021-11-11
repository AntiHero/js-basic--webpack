import { showMsg } from './alert';
import './styles/style.css';

(async () =>
  await new Promise((resolve) =>
    setTimeout(() => resolve(showMsg('Meow!')), 1000)
  ))();
