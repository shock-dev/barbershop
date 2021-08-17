export const setMeta = (title = '') => {
  return {
    title: 'Barbershop',
    titleTemplate: title.length ? `%s - ${title}` : '%s',
    htmlAttrs: {
      lang: 'ru',
      amp: true
    }
  };
}
