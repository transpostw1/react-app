export const loadState = () => {
    try {
      const serialState = localStorage.getItem('quote_list');
      if (serialState === null) {
        return undefined;
      }
      return JSON.parse(serialState);
    } catch (err) {
      return undefined;
    }
};


export const saveState = (state:any) => {
    try {
      const serialState = JSON.stringify(state);
      localStorage.setItem('quote_list', serialState);
    } catch(err) {
        console.log(err);
    }
};