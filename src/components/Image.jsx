function Image(props) {
  return (
    <a href={props.href}>
      <img
        src={props.src}
        alt={props.alt}
        style={{ width: props.width + "px" }}
      />
    </a>
  );
}

export default Image;