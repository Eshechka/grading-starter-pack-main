import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { clearBook } from 'store/actions/questsActions';
import { bookQuest } from 'store/api-actions';

type bookingModalProps = {
  onClose: () => void,
};


const BookingModal = (props: bookingModalProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const { book } = useAppSelector(state => state.quests);

  const [incorrectText, setIncorrectText] = useState<string | null>(null);

  const nameRef = useRef<HTMLInputElement | null>(null);
  const peopleCountRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const isLegalRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
        nameRef.current !== null &&
        peopleCountRef.current !== null &&
        phoneRef.current !== null &&
        phoneRef.current.value.length >= 10 &&
        isLegalRef.current !== null &&
        isLegalRef.current.value === 'on'
      ) {
      setIncorrectText(null);

      dispatch(bookQuest(
        {
          name: nameRef.current.value,
          peopleCount: +peopleCountRef.current.value,
          phone: phoneRef.current.value,
          isLegal: true
        }
      ));
    } else {
      setIncorrectText('Необходимо корректно заполнить поля');
    }
  };

  useEffect(() => {
    return () => {dispatch(clearBook())};
  }, [])

  useEffect(() => {
    if (book === true) {
      props.onClose();
    }
  }, [book])

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn>
          <IconClose width="16" height="16" onClick={props.onClose}/>
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <span style={{color: 'red'}}>{ book === false && 'Данные не были отправлены' }</span>
        {incorrectText && <span style={{color: 'red'}}>{ incorrectText }</span>}
        <S.BookingForm
          // action="https://echo.htmlacademy.ru"
          method="post"
          id="booking-form"
          onSubmit={onSubmit}
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              ref={nameRef}
              type="text"
              id="booking-name"
              name="booking-name"
              placeholder="Имя"
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              ref={phoneRef}
              type="tel"
              id="booking-phone"
              name="booking-phone"
              placeholder="Телефон"
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              ref={peopleCountRef}
              type="number"
              id="booking-people"
              name="booking-people"
              placeholder="Количество участников"
              required
            />
          </S.BookingField>
          <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              ref={isLegalRef}
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              required
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  )
};

export default BookingModal;
