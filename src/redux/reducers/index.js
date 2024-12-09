const initialState = {
  companies: {
    content: [],
  },
}

const mainReducer = (state = initialState, action) => {
  // mainReducer calcolerà lo stato nuovo
  // quindi ritornerà SEMPRE un oggetto, il nuovo stato dell'app

  // mainReducer è una PURE FUNCTION, non può modificare i propri parametri e non può eseguire "side-effects" (ad es. contattare delle API)

  switch (action.type) {
    // qui inseriamo tutte le possibili casistiche
    case 'ADD_TO_FAV':
      // qui dentro fornisco istruzioni al mio reducer su COSA FARE
      // quando intercetta una action con type "ADD_TO_CART"
      return {
        // devo SEMPRE ritornare un oggetto, il nuovo stato dell'app
        ...state,
        // andiamo a riscrivere la slice di nostro interesse
        companies: {
          ...state.companies,
          //   vado a ri-dichiarare "content" prestando attenzione a NON utilizzare metodi e tecniche che andrebbero ad alterare il valore di state, perchè in una funzione pura non si possono mutare i propri parametri
          content: state.companies.content.includes(action.payload)
            ? [...state.companies.content]
            : [...state.companies.content, action.payload],

        },
      }

    case 'REMOVE_FROM_FAV':
      return {
        ...state,
        companies: {
          ...state.companies,
          content: state.companies.content.filter((book, i) => {
            if (i === action.payload) {
              return false
            } else {
              return true
            }
          }),

          // METODO ALTERNATIVO CON SLICE
          //   content: [
          //     ...state.cart.content.slice(0, action.payload),
          //     ...state.cart.content.slice(action.payload + 1),
          //   ],
        },
      }

    default:
      // finiamo qui dentro se l'action.type non corrisponde a nessuno dei case stabiliti precedentemente
      return state
    // nel peggiore dei casi ritorniamo lo stato esattamente come l'abbiamo trovato
  }
}

export default mainReducer
