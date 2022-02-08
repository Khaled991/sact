import { toast } from 'react-toastify';
import './Toast.scss';

type ToastType = 'success' | 'error' | 'warning';

interface IShowToast {
  msg: string;
  type: ToastType;
  time?: number;
}

const ShowToast = ({ msg, type, time = 5000 }: IShowToast) => {
  toast[type](msg, {
    position: 'bottom-right',
    autoClose: time,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: 'black-background',
  });
};
export default ShowToast;
