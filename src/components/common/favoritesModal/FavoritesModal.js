import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from 'store/actions/favorites';

import { FavoritesModalWrapper, ModalHead, ModalContent } from './styles';

export function FavoritesModal() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isOpen, favorites } = useSelector((state) => ({
    isOpen: state.favorites.modalIsOpen,
    favorites: state.favorites.items,
  }));

  const onClose = () => {
    dispatch(closeModal());
  };

  const onCompanySelect = (symbol) => () => {
    history.push(`/company/${symbol}`);
    onClose();
  };

  return (
    <FavoritesModalWrapper open={isOpen} onClose={onClose}>
      <ModalHead>Favorite Companies</ModalHead>
      <ModalContent>
        <ul className="favorites">
          {favorites.length > 0 ? (
            favorites.map((f) => (
              <li
                className="favorites__item"
                key={f.symbol}
                onClick={onCompanySelect(f.symbol)}
              >
                {`${f.companyName} (${f.symbol})`}
              </li>
            ))
          ) : (
            <li className="favorites__no-items">
              You don't have favorite companies yet
            </li>
          )}
        </ul>
      </ModalContent>
    </FavoritesModalWrapper>
  );
}

export default FavoritesModal;
