import { postUser } from 'api/handlers';
import createElement from 'utils/createElement';
import navigate from 'utils/navigate';

export default function EnterRoomPage(): HTMLElement {
  const header = createElement('h1', { textContent: '닉네임 설정' });
  const enterRoomButton = createElement('button', { type: 'submit', textContent: '입장하기' });
  const input = createElement('input', {
    type: 'text',
    placeholder: '닉네임을 입력해 주세요',
    required: true,
    autofocus: true,
  });
  const form = createElement(
    'form',
    {
      className: 'name-box__form',
      onsubmit(e) {
        e.preventDefault();
        postUser({ name: input.value });
        navigate('/room');
      },
    },
    input,
    enterRoomButton
  );
  const box = createElement('div', { className: 'name-box' }, header, form);
  const container = createElement('div', { className: 'main-page__container' }, box);

  return container;
}
