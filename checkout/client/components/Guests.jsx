import React from 'react';
import GuestDropdown from './GuestDropdown.jsx';
import { GuestsStyle, BoldText, BoxText, BoxIcon, BoxWrapper, GuestMenuBtn } from './styled/Styled.jsx';

const Guests = ({guests, dropdown, displayDropdown, handleGuestCountChange}) => {
  const guestCount = guests.adults + guests.children;
  const infantCount = guests.infants;
  const infantDisplay = (<span>, {infantCount} infant{infantCount > 1 ? 's' : null}</span>);
  const dropdownToDisplay = (dropdown === 'guest') ? 'none' : 'guest';
  return (
    <GuestsStyle>
      <div style={{ marginBottom: '5px' }}>
        <BoldText>Guests</BoldText>
      </div>
      <BoxWrapper>
        <GuestMenuBtn type="button" onClick={() => displayDropdown(dropdownToDisplay)}>
          <div>
            <BoxText dropdown={dropdown}>
              <div>
                <span>
                  {guestCount} guest{guestCount > 1 ? 's' : null}
                </span>
                {infantCount > 0 ? infantDisplay : null}
              </div>
            </BoxText>
            <BoxIcon>
              {(dropdown === 'guest') ? <i className="fas fa-angle-up" style={{ fontSize: '1.4em' }} />
                : <i className="fas fa-angle-down" style={{ fontSize: '1.4em' }} />}
            </BoxIcon>
          </div>
        </GuestMenuBtn>
        {(dropdown === 'guest') ? <GuestDropdown guests={guests} displayDropdown={displayDropdown} handleGuestCountChange={handleGuestCountChange} /> : null}
      </BoxWrapper>
    </GuestsStyle>
  );
}

export default Guests;
