import { notify } from 'react-notify-toast';

const tip = {
  success (text = '请求成功!', duration = 2000) {
    notify.show(text, 'custom', duration, {
      background: '#ffffff', text: "#646466"
    });
  }
}

export default tip;