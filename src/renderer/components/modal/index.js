import { createApp } from 'vue';
import Modal from './index.vue';

export function confirm(content, title, onConfirm, onCancel) {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const modal = createApp(Modal, {
    content,
    title,
    onConfirm() {
      const close = () => {
        modal.unmount();
        div.remove();
      };
      // eslint-disable-next-line no-unused-expressions
      typeof onConfirm === 'function' ? onConfirm(close) : null;
    },
    onCancel() {
      // eslint-disable-next-line no-unused-expressions
      typeof onCancel === 'function' ? onCancel() : null;
      modal.unmount();
      div.remove();
    },
  });
  modal.mount(div);
}

export function alert(options) {
  const modal = createApp(Modal);
  return new Promise((resolve, reject) => {
    modal.use(options).use({ onConfirm: resolve, onCancel: reject });
    modal.mount(document.createElement('div'));
  });
}
