export const hotelsTypeAdapter = (type) => {
  switch (type) {
    case `motel`: {
      return `мотель`;
    }
    case `apartments`: {
      return `апартаменты`;
    }
    case `hotel`: {
      return `гостиница`;
    }
  }
};
