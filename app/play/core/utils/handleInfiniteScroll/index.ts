export const handleInfiniteScroll = <T extends HTMLElement>(
  event: React.UIEvent<T>,
  callback: () => void,
  offset: number = 200,
) => {
  const { offsetTop, scrollHeight, scrollTop } = event.currentTarget;

  const bottom = Math.ceil(offsetTop + scrollTop) >= scrollHeight - offset;

  if (bottom) {
    callback();
  }
};
