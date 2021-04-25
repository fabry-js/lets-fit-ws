export const scrollIntoSection = (
  refElement: React.MutableRefObject<null | HTMLDivElement>
) => {
  refElement.current?.scrollIntoView({
    behavior: "smooth",
    inline: "center",
  });
};
