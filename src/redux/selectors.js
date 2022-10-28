export const getAllContacts = state => state.contacts.contacts;
export const getFilter = state => state.filter.filter;
export const getState = ({contacts}) => ({loading: contacts.loading, error: contacts.error});

export const getFilteredPeople = (contacts,filter) => {
        
    if (!filter) {
        return contacts
    };
    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredPeople = contacts.filter(({ name, number }) => {
        const normalizedName = name.toLocaleLowerCase();
        const normalizedNumber = number.toLocaleLowerCase();
        const result = normalizedName.includes(normalizedFilter) || normalizedNumber.includes(normalizedFilter);
        return result;
    })
    return filteredPeople;
  };